import type { Locale } from "../lib/i18n";

/** Who the site is about, as the sidebar on every page shows it. */
export const PROFILE = {
  name: { en: "Hideo Bannai", ja: "坂内 英夫" },
  initials: "HB",
  position: { en: "Professor", ja: "教授" },
  /** Largest last in English, first in Japanese, as each writes an address. */
  affiliations: {
    en: [
      {
        name: "M&D Data Science Center",
        url: "https://dsc.bme.isct.ac.jp/en/",
      },
      {
        name: "Institute of Biomedical Engineering",
        url: "https://www.isct.ac.jp/en/001/about/organizations/institute-of-biomedical-engineering",
      },
      { name: "Institute of Science Tokyo", url: "https://www.isct.ac.jp/en" },
    ],
    ja: [
      { name: "東京科学大学", url: "https://www.isct.ac.jp/ja" },
      {
        name: "国際医工共創研究院",
        url: "https://www.isct.ac.jp/ja/001/about/organizations/institute-of-biomedical-engineering",
      },
      { name: "M&Dデータ科学センター", url: "https://dsc.bme.isct.ac.jp/" },
    ],
  },
  /**
   * The mail address as its bijective BWT, from scripts/encode-email.mjs:
   * the address is never whole in this public repository or in the HTML,
   * only in the reader's browser, which inverts it (see Profile.astro).
   */
  emailBbwt: "pthmc.55a7.inbas.a..@najic",
};

export const PROFILE_LINKS: {
  label: Record<Locale, string>;
  href: Record<Locale, string>;
  icon: string;
}[] = [
  {
    label: { en: "DSCalgo Lab", ja: "DSCalgo 研究室" },
    href: {
      en: "https://algo.dsc.bme.isct.ac.jp/en/",
      ja: "https://algo.dsc.bme.isct.ac.jp/",
    },
    icon: "lucide:flask-conical",
  },
  {
    label: { en: "researchmap", ja: "researchmap" },
    href: {
      en: "https://researchmap.jp/hdbn",
      ja: "https://researchmap.jp/hdbn",
    },
    icon: "lucide:book-open",
  },
  {
    label: { en: "ORCID", ja: "ORCID" },
    href: {
      en: "https://orcid.org/0000-0002-6856-5185",
      ja: "https://orcid.org/0000-0002-6856-5185",
    },
    icon: "academicons:orcid",
  },
  {
    label: { en: "Google Scholar", ja: "Google Scholar" },
    href: {
      en: "https://scholar.google.com/citations?user=RSzIRC4AAAAJ&hl=en",
      ja: "https://scholar.google.com/citations?user=RSzIRC4AAAAJ&hl=ja",
    },
    icon: "academicons:google-scholar",
  },
  {
    label: { en: "GitHub", ja: "GitHub" },
    href: { en: "https://github.com/hdbn", ja: "https://github.com/hdbn" },
    icon: "lucide:github",
  },
  // With its address filled in:
  // { label: { en: 'DBLP', ja: 'DBLP' }, href: { en: 'https://dblp.org/pid/…', ja: '…' }, icon: 'academicons:dblp' },
];
