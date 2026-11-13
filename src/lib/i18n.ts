// English at the root, Japanese under /ja/: the site is mainly for readers
// abroad. The helpers follow the DSCalgo lab site's, the other way round.
export const locales = ['en', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const ui = {
  en: {
    langName: 'English',
    description:
      'Hideo Bannai, Professor at the M&D Data Science Center, Institute of Biomedical Engineering, Institute of Science Tokyo. String algorithms, data compression and combinatorics on words.',
    nav: { about: 'About', publications: 'Publications', talks: 'Talks' },
    home: {
      heading: 'About',
      talks: 'Selected talks',
      allTalks: 'All selected talks',
      publications: 'Recent publications',
      allPublications: 'All publications',
    },
    publications: {
      heading: 'Publications',
      description: 'Publications of Hideo Bannai, from DBLP.',
      searchLabel: 'Search publications',
      searchPlaceholder: 'Title, co-author, venue, year',
      noMatches: 'Nothing matched.',
      journalVersion: 'Journal version:',
      bibtex: 'BibTeX',
    },
    publicationType: {
      journal: 'Journal',
      proceedings: 'Conference',
      book: 'Book chapter',
      preprint: 'Preprint',
      report: 'Report',
      thesis: 'Thesis',
    },
    links: { pdf: 'PDF', code: 'Code', poster: 'Poster', doi: 'DOI', arxiv: 'arXiv', slides: 'Slides', paper: 'Paper' },
    talks: {
      heading: 'Selected talks',
      description: 'Selected talks by Hideo Bannai, with slides.',
      intro: 'Keynotes, invited talks, lectures and other talks.',
    },
    talkKind: { keynote: 'Keynote', invited: 'Invited talk', lecture: 'Lecture' },
  },
  ja: {
    langName: '日本語',
    description: '坂内英夫(東京科学大学 国際医工共創研究院 M&Dデータ科学センター 教授)。文字列アルゴリズム、データ圧縮、文字列の組合せ論。',
    nav: { about: 'プロフィール', publications: '論文', talks: '講演' },
    home: {
      heading: 'プロフィール',
      talks: '主な講演',
      allTalks: '講演一覧',
      publications: '最近の論文',
      allPublications: '論文一覧',
    },
    publications: {
      heading: '論文',
      description: '坂内英夫の論文一覧(DBLP より)。',
      searchLabel: '論文を検索',
      searchPlaceholder: 'タイトル・共著者・会議名・年',
      noMatches: '該当する論文はありません。',
      journalVersion: 'ジャーナル版:',
      bibtex: 'BibTeX',
    },
    publicationType: {
      journal: '論文誌',
      proceedings: '国際会議',
      book: '書籍',
      preprint: 'プレプリント',
      report: '報告書',
      thesis: '学位論文',
    },
    links: { pdf: 'PDF', code: 'コード', poster: 'ポスター', doi: 'DOI', arxiv: 'arXiv', slides: 'スライド', paper: '論文' },
    talks: {
      heading: '主な講演',
      description: '坂内英夫の主な講演とスライド。',
      intro: '基調講演、招待講演、講義など。',
    },
    talkKind: { keynote: '基調講演', invited: '招待講演', lecture: '講義' },
  },
} as const;

export function useTranslations(locale: Locale) {
  return ui[locale];
}

export function localizedPath(locale: Locale, path: string): string {
  return locale === 'en' ? path : `/ja${path}`;
}

/** A pathname without the /ja prefix, ending in a slash: "/publications/". */
export function logicalPath(pathname: string): string {
  return pathname.replace(/^\/ja(?=\/|$)/, '').replace(/\/?$/, '/');
}

/**
 * The `getStaticPaths` of every page under `src/pages/[...lang]/`: English
 * at the root (an undefined rest parameter), Japanese under /ja/.
 */
export function localeStaticPaths() {
  return locales.map((locale) => ({
    params: { lang: locale === 'en' ? undefined : locale },
    props: { locale },
  }));
}

/** How a talk's month is written: "Sep 2025", "2025年9月". */
export function formatMonth(locale: Locale, date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString(locale === 'en' ? 'en-GB' : 'ja-JP', {
    year: 'numeric',
    month: locale === 'en' ? 'short' : 'long',
    timeZone: 'UTC',
  });
}

/** Open Graph's spelling of the locale. */
export const ogLocale: Record<Locale, string> = { en: 'en_US', ja: 'ja_JP' };
