// Taken from the DSCalgo lab site's lib/bibtex.ts, cut down to one person's
// bib file: the lab's member matching became `ME`.
import { parse, type Creator, type Entry } from '@retorquere/bibtex-parser';
import bib from '../data/hideo-bannai.bib?raw';
import { AWARDS } from '../data/awards';
import { TALKS, talkSlides } from '../data/talks';
import { fileFormat, type SlideFile } from './files';

export type PublicationType = 'journal' | 'proceedings' | 'preprint' | 'report' | 'thesis' | 'book';

export interface Author {
  name: string;
  isMe: boolean;
}

export interface Publication {
  key: string;
  title: string;
  authors: Author[];
  year: number;
  venue?: string;
  note?: string;
  abstract?: string;
  /** Set on a non-journal entry when a journal version of the same paper also exists. */
  journalVersion?: { venue?: string; year: number; url?: string };
  type: PublicationType;
  /** From the talks on the paper, or a `slides` field in the entry. */
  slides: SlideFile[];
  links: {
    pdf?: string;
    code?: string;
    poster?: string;
    doi?: string;
    arxiv?: string;
  };
  /** The entry's original BibTeX source text, for a "cite this" display. */
  rawBibtex: string;
}

/** The author to set in bold, as DBLP writes the name. */
const ME = 'Hideo Bannai';

const TYPE_BY_ENTRY: Record<string, PublicationType> = {
  article: 'journal',
  inproceedings: 'proceedings',
  proceedings: 'proceedings',
  conference: 'proceedings',
  misc: 'preprint',
  unpublished: 'preprint',
  techreport: 'report',
  phdthesis: 'thesis',
  mastersthesis: 'thesis',
  book: 'book',
  incollection: 'book',
};

const SLIDES_BY_KEY = new Map(TALKS.filter((talk) => talk.bibKey && talk.slides).map((talk) => [talk.bibKey!, talkSlides(talk)]));

function formatCreator(creator: Creator): string {
  if (creator.name) return creator.name;
  return [creator.firstName, creator.lastName].filter(Boolean).join(' ');
}

/** DBLP files preprints under the pseudo-journal "CoRR" (arXiv). */
function isCorrEntry(entry: Entry): boolean {
  return entry.type === 'article' && entry.fields.journal?.trim().toUpperCase() === 'CORR';
}

function typeOf(entry: Entry): PublicationType {
  if (isCorrEntry(entry)) return 'preprint';
  return TYPE_BY_ENTRY[entry.type] ?? 'preprint';
}

function venueOf(entry: Entry): string | undefined {
  if (isCorrEntry(entry)) return undefined;
  const { booktitle, journal, institution, publisher } = entry.fields;
  const raw = booktitle ?? journal ?? institution ?? publisher;
  if (Array.isArray(raw)) return raw.join(', ');
  return raw;
}

function entryToPublication(entry: Entry): Publication {
  const fields = entry.fields;
  // The parser decomposes accented letters, so compare in one form.
  const authors = (fields.author ?? []).map((creator) => {
    const name = formatCreator(creator).normalize('NFC');
    return { name, isMe: name === ME };
  });

  // Custom fields such as pdf/code/doi/arxiv aren't part of the parser's
  // typed schema, so they come through as plain strings via the index signature.
  const custom = fields as unknown as Record<string, string | undefined>;

  return {
    key: entry.key,
    title: (fields.title ?? '').trim(),
    authors,
    year: Number(fields.year ?? 0),
    venue: venueOf(entry),
    note: custom.note ?? AWARDS[entry.key],
    abstract: custom.abstract,
    type: typeOf(entry),
    slides: custom.slides ? [{ url: custom.slides, format: fileFormat(custom.slides) }] : (SLIDES_BY_KEY.get(entry.key) ?? []),
    links: {
      pdf: custom.pdf,
      code: custom.code,
      poster: custom.poster,
      doi: custom.doi ? `https://doi.org/${custom.doi}` : undefined,
      // DBLP exports arXiv preprints as eprinttype=arXiv + eprint=<id>, rather
      // than a plain `arxiv` field.
      arxiv: custom.arxiv
        ? `https://arxiv.org/abs/${custom.arxiv}`
        : custom.eprinttype?.toLowerCase() === 'arxiv' && custom.eprint
          ? `https://arxiv.org/abs/${custom.eprint}`
          : undefined,
    },
    rawBibtex: entry.input.trim(),
  };
}

function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function loadPublications(source: string): Publication[] {
  // DBLP's exports are already correctly capitalized; the parser's default
  // English sentence-casing would otherwise lowercase proper nouns (city
  // names, acronyms) in titles and venue names.
  const { entries, errors } = parse(source, { sentenceCase: false });
  if (errors.length > 0) {
    throw new Error(`Failed to parse hideo-bannai.bib: ${errors.map((e) => e.error).join('; ')}`);
  }

  const corrEntries = entries.filter((entry) => isCorrEntry(entry));
  const publishedEntries = entries.filter((entry) => !isCorrEntry(entry));

  const publishedByTitle = new Map<string, Publication[]>();
  const publications = publishedEntries.map((entry) => {
    const pub = entryToPublication(entry);
    const key = normalizeTitle(pub.title);
    const list = publishedByTitle.get(key) ?? [];
    list.push(pub);
    publishedByTitle.set(key, list);
    return pub;
  });

  // DBLP files an arXiv preprint as its own "CoRR" entry even once the paper
  // has a published venue. Fold that entry's arXiv link into the published
  // version(s) with a matching title instead of listing the preprint separately.
  for (const entry of corrEntries) {
    const corrPub = entryToPublication(entry);
    const matches = publishedByTitle.get(normalizeTitle(corrPub.title));
    if (matches) {
      for (const match of matches) {
        match.links.arxiv ??= corrPub.links.arxiv;
      }
    } else {
      publications.push(corrPub);
    }
  }

  // When a proceedings/other version and a journal version of the same paper
  // both exist, point the non-journal entry at the journal one without
  // merging them, since they remain distinct, separately citable publications.
  for (const group of publishedByTitle.values()) {
    const journalVersion = group.find((p) => p.type === 'journal');
    if (!journalVersion || group.length < 2) continue;
    for (const pub of group) {
      if (pub === journalVersion) continue;
      pub.journalVersion = {
        venue: journalVersion.venue,
        year: journalVersion.year,
        url: journalVersion.links.doi ?? journalVersion.links.pdf ?? journalVersion.links.arxiv,
      };
    }
  }

  return publications.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}

export const PUBLICATIONS = loadPublications(bib);

/**
 * DBLP's conference `venue` strings often already end with the year (and
 * "Proceedings"), e.g. "..., SPIRE 2024, ..., September 23-25, 2024,
 * Proceedings" — appending the year again would show it twice.
 */
export function venueWithYear(venue: string | undefined, year: number): string | undefined {
  if (!venue) return venue;
  return venue.includes(String(year)) ? venue : `${venue}, ${year}`;
}

/**
 * The id of a publication's entry in the list. BibTeX keys from DBLP look
 * like `DBLP:journals/mst/BannaiK24`: legal in an id, but not a valid CSS
 * selector.
 */
export function publicationAnchor(key: string): string {
  return `pub-${key.replace(/[^A-Za-z0-9_-]/g, '-')}`;
}

export function groupByYear(publications: Publication[]): { year: number; items: Publication[] }[] {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
  return years.map((year) => ({ year, items: publications.filter((p) => p.year === year) }));
}
