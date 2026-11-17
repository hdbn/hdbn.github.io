/**
 * Code for specific papers, keyed by BibTeX key, shown as a Code link. Kept
 * separate from hideo-bannai.bib, like awards.ts. As in summaries.ts, one of
 * a paper's keys is enough: lib/bibtex.ts gives the link to every version
 * with the same title.
 */
export const CODE: Record<string, string> = {
  // Height-Bounded Lempel-Ziv Encodings (ESA 2024)
  'DBLP:conf/esa/BannaiFHMP24': 'https://github.com/dscalgo/lzhb',
  // Computing NP-hard Repetitiveness Measures via MAX-SAT (ESA 2022, TALG 2026)
  'DBLP:journals/talg/BannaiGIKKNS26': 'https://github.com/kg86/satcomp',
  // Optimal Dictionary-Based Compression with Answer Set Programming (KR 2026)
  'DBLP:conf/kr/BanbaraBHKMN26': 'https://github.com/nabesima/kr2026',
};
