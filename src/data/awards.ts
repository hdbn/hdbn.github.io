/**
 * Award annotations for specific papers, keyed by BibTeX key. Kept separate
 * from hideo-bannai.bib (which stays a verbatim DBLP export) and merged into
 * each Publication's `note` field at build time in lib/bibtex.ts.
 */
export const AWARDS: Record<string, string> = {
  'DBLP:conf/esa/BannaiFHMP24': 'ESA 2024 Best Paper Award (Track B)',
  'DBLP:conf/iwoca/BannaiIKKP22': 'IWOCA 2022 Best Paper Award',
  'DBLP:conf/spire/KutsukakeMNIBT20': 'SPIRE 2020 Best Paper Award',
};
