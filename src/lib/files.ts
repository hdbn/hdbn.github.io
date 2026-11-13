import { readdirSync } from 'node:fs';

/** A file's format as a reader would name it, from its extension: PDF, PPTX. */
export function fileFormat(path: string): string {
  return path.split(/[?#]/)[0].split('.').pop()!.toUpperCase();
}

export interface SlideFile {
  url: string;
  format: string;
}

// Read at build time, from the project root where `astro build` runs. The
// lock file PowerPoint leaves beside an open deck (~$name.pptx) is not slides.
const SLIDE_FILES = readdirSync('public/slides').filter((name) => !name.startsWith('.') && !name.startsWith('~$'));
/** PDF first: it opens in the browser, where PowerPoint downloads. */
const FORMAT_ORDER = ['PDF', 'PPTX'];
const rank = (file: SlideFile) => {
  const i = FORMAT_ORDER.indexOf(file.format);
  return i === -1 ? FORMAT_ORDER.length : i;
};

/**
 * Every file in public/slides/ named `stem` with any extension, so a deck
 * kept both as PDF and as PowerPoint is offered both ways. A stem with no
 * file fails the build rather than publishing a link that would 404.
 */
export function slideFiles(stem: string): SlideFile[] {
  const files = SLIDE_FILES.filter((name) => name.slice(0, name.lastIndexOf('.')) === stem)
    .map((name) => ({ url: `/slides/${name}`, format: fileFormat(name) }))
    .sort((a, b) => rank(a) - rank(b) || a.format.localeCompare(b.format));
  if (files.length === 0) throw new Error(`talks.ts: no file named ${stem}.* in public/slides/`);
  return files;
}
