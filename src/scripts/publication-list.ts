// What the publication list shows, drawn from its state: the years shown,
// from the address (#2015-2020, #2007, or #pub-… for a paper), and the search
// and filters, from the page's history entry.
//
// It has to be drawn before the browser or the site's router puts the page
// back where the reader left it, or the place is found in the wrong list. So
// besides the page's own script, this runs inline just after the list as the
// page is read (publications.astro compiles it in at build), and on the new
// page before the router swaps it in (Base.astro). Being compiled on its own,
// it imports nothing.

/** The search and the pressed chips: `award`, `type:journal`, `tag:…`. */
export interface Filters {
  search: string;
  pressed: string[];
}

/** The years shown, from and to, both included. */
export interface Range {
  from: number;
  to: number;
}

export const NO_FILTERS: Filters = { search: '', pressed: [] };

const fold = (text: string) => text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

// The searchable words of each paper: the title, authors, venue and lines on
// it, its year, and its abstract, folded up but there in the page. Set by
// KaTeX, a formula reads as its letters run together ("O(nlogn)").
const searchable = new WeakMap<Element, string>();
function wordsOf(item: HTMLElement): string {
  let text = searchable.get(item);
  if (text === undefined) {
    text = fold(
      [
        item.querySelector('h3')?.textContent,
        ...[...item.querySelectorAll(':scope > p')].map((p) => p.textContent),
        item.closest('.pub-year')?.querySelector('h2')?.textContent,
        item.querySelector('.pub-abstract')?.textContent,
      ].join(' '),
    );
    searchable.set(item, text);
  }
  return text;
}

export function chipsOf(list: Element): HTMLButtonElement[] {
  return [...list.querySelectorAll<HTMLButtonElement>('.pub-award-chip, .pub-filter-chip, .pub-tag-chip')];
}

export function chipValue(chip: HTMLElement): string {
  if (chip.classList.contains('pub-award-chip')) return 'award';
  return `${chip.classList.contains('pub-tag-chip') ? 'tag' : 'type'}:${chip.dataset.value}`;
}

/** The filters as the controls now have them. */
export function readFilters(list: Element): Filters {
  return {
    search: list.querySelector<HTMLInputElement>('.pub-search')?.value ?? '',
    pressed: chipsOf(list).filter((chip) => chip.ariaPressed === 'true').map(chipValue),
  };
}

/** The filters kept in a history entry's state, if any. */
export function savedFilters(state: unknown): Filters {
  const saved = (state as { publications?: Partial<Filters> } | null)?.publications;
  return {
    search: typeof saved?.search === 'string' ? saved.search : '',
    pressed: Array.isArray(saved?.pressed) ? saved.pressed.filter((v): v is string => typeof v === 'string') : [],
  };
}

/** The first and last years on the timeline. */
export function bounds(list: Element): Range {
  const el = list as HTMLElement;
  return { from: Number(el.dataset.firstYear), to: Number(el.dataset.lastYear) };
}

/** The five-year periods on the timeline, 2005–2009, oldest first, each with its button. */
function periods(list: Element): (Range & { tab: HTMLButtonElement })[] {
  return [...list.querySelectorAll<HTMLButtonElement>('.pub-period-tab')].map((tab) => ({
    from: Number(tab.dataset.from),
    to: Number(tab.dataset.to),
    tab,
  }));
}

/** The period a year is in. */
function periodOf(list: Element, year: number): Range | undefined {
  const found = periods(list).find((p) => year >= p.from && year <= p.to);
  return found && { from: found.from, to: found.to };
}

/** The years shown to begin with: the latest period. */
export function defaultRange(list: Element): Range {
  return periodOf(list, bounds(list).to) ?? bounds(list);
}

/** A range within the timeline, from no later than to. */
export function clampRange(list: Element, range: Range): Range {
  const { from: first, to: last } = bounds(list);
  const clamp = (year: number) => Math.min(last, Math.max(first, year));
  const a = clamp(range.from);
  const b = clamp(range.to);
  return { from: Math.min(a, b), to: Math.max(a, b) };
}

export const sameRange = (a: Range, b: Range) => a.from === b.from && a.to === b.to;

/** As the address has it: #2015-2020, or #2007 for one year. */
export const rangeHash = ({ from, to }: Range) => (from === to ? `#${from}` : `#${from}-${to}`);

/** As it reads: 2015–2020, or 2007. */
export const rangeText = ({ from, to }: Range) => (from === to ? `${from}` : `${from}–${to}`);

/** The paper a #pub-… hash names, in this list. */
export function hashTarget(list: Element, hash: string): HTMLElement | null {
  let id: string;
  try {
    id = decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    return null;
  }
  if (!/^pub-[\w-]+$/.test(id)) return null;
  return list.querySelector<HTMLElement>(`.pub-item[id="${id}"]`);
}

/**
 * The years a hash shows: #2015-2020 or #2007 themselves, kept within the
 * timeline, whether or not they are a period; for #pub-…, the period its
 * paper is in. None for any other hash.
 */
export function rangeFromHash(list: Element, hash: string): Range | undefined {
  const years = hash.match(/^#(\d{4})(?:-(\d{4}))?$/);
  if (years) return clampRange(list, { from: Number(years[1]), to: Number(years[2] ?? years[1]) });
  const year = Number(hashTarget(list, hash)?.closest<HTMLElement>('.pub-year')?.dataset.year);
  return year ? periodOf(list, year) : undefined;
}

/**
 * Sets the controls to `filters` and the timeline to `range`, and shows the
 * papers of those years the filters leave. The timeline's bars count what
 * the filters leave in every year, shown or not, so that it tells where the
 * rest are.
 */
export function render(list: Element, range: Range, filters: Filters): void {
  const search = list.querySelector<HTMLInputElement>('.pub-search');
  if (search && search.value !== filters.search) search.value = filters.search;
  for (const chip of chipsOf(list)) chip.ariaPressed = String(filters.pressed.includes(chipValue(chip)));

  // No chip of a kind pressed means all of that kind, not none; within a
  // kind, any of those pressed.
  const onlyAwarded = filters.pressed.includes('award');
  const types = filters.pressed.filter((v) => v.startsWith('type:')).map((v) => v.slice(5));
  const tags = filters.pressed.filter((v) => v.startsWith('tag:')).map((v) => v.slice(4));
  // Every word has to appear somewhere, so typing more narrows the list.
  const words = fold(filters.search).split(/\s+/).filter(Boolean);
  for (const item of list.querySelectorAll<HTMLElement>('.pub-item')) {
    item.hidden = !(
      (!onlyAwarded || item.dataset.award !== undefined) &&
      (types.length === 0 || types.includes(item.dataset.pubType ?? '')) &&
      (tags.length === 0 || tags.some((tag) => (item.dataset.tags ?? '').split(' ').includes(tag))) &&
      (words.length === 0 || words.every((word) => wordsOf(item).includes(word)))
    );
  }

  // A year out of the range is marked out, not hidden, so that on paper the
  // whole list is printed (global.css); one the filters leave empty, hidden.
  const perYear = new Map<number, number>();
  let shown = 0;
  let matched = 0;
  for (const year of list.querySelectorAll<HTMLElement>('.pub-year')) {
    const y = Number(year.dataset.year);
    const left = year.querySelectorAll('.pub-item:not([hidden])').length;
    perYear.set(y, left);
    matched += left;
    const inRange = y >= range.from && y <= range.to;
    year.toggleAttribute('data-out', !inRange);
    year.hidden = left === 0;
    if (inRange) shown += left;
  }
  // The timeline: each year's bar, as tall as what the filters leave in it
  // against the fullest year, dark if it is shown; each period's count, and
  // its button pressed if it is the years shown, and not to be pressed if
  // the filters leave it empty.
  const fullest = Math.max(1, ...perYear.values());
  for (const bar of list.querySelectorAll<HTMLElement>('.pub-year-bar')) {
    const y = Number(bar.dataset.year);
    const n = perYear.get(y) ?? 0;
    bar.style.height = n === 0 ? '0' : `${Math.max(8, (100 * n) / fullest)}%`;
    bar.title = `${y}: ${n}`;
    bar.toggleAttribute('data-in', y >= range.from && y <= range.to);
  }
  const all = periods(list);
  for (const period of all) {
    let left = 0;
    for (let y = period.from; y <= period.to; y++) left += perYear.get(y) ?? 0;
    period.tab.disabled = left === 0;
    period.tab.ariaPressed = String(sameRange(period, range));
    const count = period.tab.querySelector('.pub-period-count');
    if (count) count.textContent = String(left);
  }
  for (const label of list.querySelectorAll('.pub-range-text')) label.textContent = rangeText(range);

  // The steps at the head and foot: the period with the year after the
  // range, and the one with the year before, or past it the next the
  // filters leave anything in. Years shown may be shown again, as a range
  // need not be a period, but none is skipped.
  const { from: first, to: last } = bounds(list);
  for (const step of list.querySelectorAll<HTMLButtonElement>('.pub-range-step')) {
    const later = step.dataset.step === '1';
    const year = later ? range.to + 1 : range.from - 1;
    const start = all.findIndex((p) => year >= p.from && year <= p.to);
    let to: (typeof all)[number] | undefined;
    if (year >= first && year <= last && start >= 0) {
      for (let i = start; i >= 0 && i < all.length; i += later ? 1 : -1) {
        if (!all[i].tab.disabled) {
          to = all[i];
          break;
        }
      }
    }
    step.hidden = !to;
    if (!to) continue;
    step.dataset.from = String(to.from);
    step.dataset.to = String(to.to);
    const text = step.querySelector('.pub-range-step-text');
    if (text) text.textContent = rangeText(to);
  }
  for (const button of list.querySelectorAll<HTMLButtonElement>('.pub-range-all')) {
    if (!button.closest('.pub-no-matches')) button.disabled = range.from <= first && range.to >= last;
  }

  const count = list.querySelector('.pub-count');
  if (count) count.textContent = String(shown);
  const unit = list.querySelector<HTMLElement>('.pub-count-unit');
  if (unit) unit.textContent = (shown === 1 ? unit.dataset.one : unit.dataset.many) ?? '';
  // Nothing in these years: said so, and how many there are in the others.
  const none = list.querySelector<HTMLElement>('.pub-no-matches');
  if (none) {
    none.classList.toggle('hidden', shown > 0);
    const nowhere = none.querySelector<HTMLElement>('.pub-nowhere');
    if (nowhere) nowhere.hidden = matched > 0;
    const elsewhere = none.querySelector<HTMLElement>('.pub-elsewhere');
    if (elsewhere) {
      elsewhere.hidden = matched === 0;
      const n = elsewhere.querySelector('.pub-elsewhere-count');
      if (n) n.textContent = String(matched);
    }
  }
}

/**
 * The list as a hash and a history entry's state have it. A paper that the
 * saved filters would hide is shown, without them. Returns the range shown.
 */
export function show(list: Element, hash: string, state: unknown): Range {
  const range = rangeFromHash(list, hash) ?? defaultRange(list);
  render(list, range, savedFilters(state));
  if (hashTarget(list, hash)?.hidden) render(list, range, NO_FILTERS);
  return range;
}

/** For a whole page: as it is read, or before the router swaps it in. */
export function prepare(page: Document, hash: string, state: unknown): void {
  const list = page.querySelector('.publication-list');
  if (list) show(list, hash, state);
}
