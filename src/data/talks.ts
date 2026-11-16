import { slideFiles, type SlideFile } from '../lib/files';

/**
 * Selected talks, newest first: not a complete record, only the ones worth
 * showing, listed on their own page and the latest on the home page. Kept
 * apart from hideo-bannai.bib, which stays a verbatim DBLP export: a talk on
 * a paper names the paper's BibTeX key, and its slides also show on that
 * paper in the publication list, whoever gave the talk.
 */
export interface Talk {
  title: string;
  event: string;
  eventUrl?: string;
  /** YYYY-MM-DD. */
  date: string;
  /** Keynote, invited talk or lecture, as opposed to presenting a paper; named in each language by i18n's `talkKind`. */
  kind?: 'keynote' | 'invited' | 'lecture';
  /**
   * The slides' name in public/slides/, without the extension: every format
   * there under that name is offered, e.g. both .pdf and .pptx.
   */
  slides?: string;
  bibKey?: string;
}

export const TALKS: Talk[] = [
  {
    title: 'New Perspectives on the BWT',
    event: '32nd International Symposium on String Processing and Information Retrieval (SPIRE 2025)',
    eventUrl: 'https://sites.google.com/view/spire-2025',
    date: '2025-09-10',
    kind: 'keynote',
    slides: '2025-spire-bwt',
  },
  {
    title: 'On the Compressiveness of the Burrows-Wheeler Transform',
    event: '36th Annual Symposium on Combinatorial Pattern Matching (CPM 2025)',
    eventUrl: 'https://cpm2025.pangenome.eu/',
    date: '2025-06-19',
    slides: '2025-cpm-bwt-compressiveness',
    bibKey: 'DBLP:conf/cpm/BannaiI025',
  },
  {
    title: 'Dictionary Compression and Repetitiveness Measures',
    event: 'CPM 2025 Summer School',
    eventUrl: 'https://cpm2025.pangenome.eu/p/summer_school/',
    date: '2025-06-13',
    kind: 'lecture',
    slides: '2025-cpm-school-dictionary-compression',
  },
  {
    title: 'Height-Bounded Lempel-Ziv Encodings',
    event: '32nd Annual European Symposium on Algorithms (ESA 2024)',
    eventUrl: 'https://algo-conference.org/2024/esa/',
    date: '2024-09-03',
    slides: '2024-esa-height-bounded-lz',
    bibKey: 'DBLP:conf/esa/BannaiFHMP24',
  },
  {
    title: 'Repetitions in Strings: A "Constant" Problem',
    event: '32nd Annual Symposium on Combinatorial Pattern Matching (CPM 2021)',
    // cpm2021.ii.uni.wroc.pl no longer answers (November 2026). The site
    // listed the talk under Keynotes (keynote.shtml), though the paper in
    // the proceedings is titled "(Invited Talk)"; the conference's own word
    // goes here, as for SPIRE 2025.
    date: '2021-07-07',
    kind: 'keynote',
    slides: '2021-cpm-repetitions',
    bibKey: 'DBLP:conf/cpm/Bannai21',
  },
];

export function talkSlides(talk: Talk): SlideFile[] {
  return talk.slides ? slideFiles(talk.slides) : [];
}

