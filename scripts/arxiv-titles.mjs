// Fetches the title each arXiv preprint in the bib files has now, which can
// differ from DBLP's (the title of its first version), into
// src/data/arxiv-titles.json:
//
//   node scripts/arxiv-titles.mjs
//
// Run it again when the bib files are updated, or now and then, as titles
// change on arXiv. See lib/bibtex.ts for how the titles are used.
import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const bibs = ['src/data/hideo-bannai.bib', 'src/data/not-in-dblp.bib'];
const out = 'src/data/arxiv-titles.json';

// DBLP writes an arXiv preprint as eprinttype = {arXiv} and eprint = {<id>};
// a hand-written entry may have arxiv = {<id>}.
const ids = new Set();
for (const bib of bibs) {
  const text = await readFile(new URL(bib, root), 'utf8');
  for (const entry of text.split(/\n(?=@)/)) {
    const arxiv = entry.match(/^\s*arxiv\s*=\s*\{([^}]+)\}/im)?.[1];
    const eprint = /^\s*eprinttype\s*=\s*\{arxiv\}/im.test(entry) ? entry.match(/^\s*eprint\s*=\s*\{([^}]+)\}/im)?.[1] : undefined;
    const id = (arxiv || eprint)?.trim().replace(/v\d+$/, '');
    if (id) ids.add(id);
  }
}

const unescape = (text) =>
  text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');

const titles = {};
const list = [...ids];
for (let i = 0; i < list.length; i += 50) {
  // arXiv asks for no more than a request every three seconds.
  if (i > 0) await new Promise((resolve) => setTimeout(resolve, 3000));
  const batch = list.slice(i, i + 50);
  const response = await fetch(`https://export.arxiv.org/api/query?id_list=${batch.join(',')}&max_results=${batch.length}`);
  if (!response.ok) throw new Error(`arXiv: ${response.status} ${response.statusText}`);
  const feed = await response.text();
  for (const [, entry] of feed.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const id = entry.match(/<id>https?:\/\/arxiv\.org\/abs\/([^<]+?)(?:v\d+)?<\/id>/)?.[1];
    const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
    if (id && title) titles[id] = unescape(title).replace(/\s+/g, ' ').trim();
  }
}

const missing = list.filter((id) => !(id in titles));
if (missing.length > 0) console.warn(`Not found on arXiv: ${missing.join(', ')}`);
const sorted = Object.fromEntries(Object.entries(titles).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(new URL(out, root), `${JSON.stringify(sorted, null, 2)}\n`);
console.log(`${out}: ${Object.keys(sorted).length} titles`);
