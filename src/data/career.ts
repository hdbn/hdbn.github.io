import type { Locale } from "../lib/i18n";

/**
 * Positions held, newest first, as researchmap lists them; shown on the CV
 * page. `to` left out means the position is held now.
 */
export const CAREER: {
  from: number;
  to?: number;
  position: Record<Locale, string>;
  organization: Record<Locale, string>;
}[] = [
  {
    from: 2024,
    position: { en: "Professor", ja: "教授" },
    organization: {
      en: "M&D Data Science Center, Institute of Science Tokyo",
      ja: "東京科学大学 M&Dデータ科学センター",
    },
  },
  {
    from: 2020,
    to: 2024,
    position: { en: "Professor", ja: "教授" },
    organization: {
      en: "M&D Data Science Center, Tokyo Medical and Dental University",
      ja: "東京医科歯科大学 M&Dデータ科学センター",
    },
  },
  {
    // 助教授 until the title became 准教授 in April 2007.
    from: 2006,
    to: 2020,
    position: { en: "Associate Professor", ja: "准教授" },
    organization: {
      en: "Faculty of Information Science and Electrical Engineering, Kyushu University",
      ja: "九州大学 大学院システム情報科学研究院",
    },
  },
  {
    from: 2005,
    to: 2006,
    position: { en: "Lecturer", ja: "講師" },
    organization: {
      en: "Faculty of Information Science and Electrical Engineering, Kyushu University",
      ja: "九州大学 大学院システム情報科学研究院",
    },
  },
  {
    from: 2000,
    to: 2005,
    position: { en: "Research Associate", ja: "助手" },
    organization: {
      en: "Institute of Medical Science, The University of Tokyo",
      ja: "東京大学 医科学研究所",
    },
  },
];

/** Degrees, newest first; shown under Education on the CV page. */
export const DEGREES: {
  year: number;
  degree: Record<Locale, string>;
  university: Record<Locale, string>;
}[] = [
  {
    year: 2005,
    degree: {
      en: "Ph.D. in Information Science and Technology",
      ja: "博士(情報理工学)",
    },
    university: { en: "The University of Tokyo", ja: "東京大学" },
  },
  {
    year: 2000,
    degree: { en: "M.Sc. in Information Science", ja: "修士(理学)" },
    university: {
      en: "Graduate School of Science, The University of Tokyo",
      ja: "東京大学 大学院理学系研究科 情報科学専攻",
    },
  },
  {
    year: 1998,
    degree: { en: "B.Sc. in Information Science", ja: "学士(理学)" },
    university: {
      en: "Faculty of Science, The University of Tokyo",
      ja: "東京大学 理学部 情報科学科",
    },
  },
];
