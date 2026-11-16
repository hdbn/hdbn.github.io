import type { Locale } from "../lib/i18n";

/**
 * Positions held, newest first, as researchmap lists them; shown on the CV
 * page. Dates are "YYYY-MM", or just "YYYY" where the month is not known;
 * `to` left out means the position is held now.
 */
export const CAREER: {
  from: string;
  to?: string;
  position: Record<Locale, string>;
  organization: Record<Locale, string>;
}[] = [
  {
    // The centre moved from the Institute of Integrated Research to the
    // Institute of Biomedical Engineering on 1 October 2026.
    from: "2026-10",
    position: { en: "Professor", ja: "教授" },
    organization: {
      en: "M&D Data Science Center, Institute of Biomedical Engineering, Institute of Science Tokyo",
      ja: "東京科学大学 国際医工共創研究院 M&Dデータ科学センター",
    },
  },
  {
    // Institute of Science Tokyo was formed on 1 October 2024.
    from: "2024-10",
    to: "2026-09",
    position: { en: "Professor", ja: "教授" },
    organization: {
      en: "M&D Data Science Center, Institute of Integrated Research, Institute of Science Tokyo",
      ja: "東京科学大学 総合研究院 M&Dデータ科学センター",
    },
  },
  {
    from: "2020-04",
    to: "2024-09",
    position: { en: "Professor", ja: "教授" },
    organization: {
      en: "M&D Data Science Center, Tokyo Medical and Dental University",
      ja: "東京医科歯科大学 M&Dデータ科学センター",
    },
  },
  {
    // The title 助教授 became 准教授 on 1 April 2007; the same post, so in
    // English (both "Associate Professor") the CV page shows the two as one row.
    from: "2007-04",
    to: "2020-03",
    position: { en: "Associate Professor", ja: "准教授" },
    organization: {
      en: "Department of Informatics, Faculty of Information Science and Electrical Engineering, Kyushu University",
      ja: "九州大学 大学院システム情報科学研究院 情報学部門",
    },
  },
  {
    from: "2006-12",
    to: "2007-03",
    position: { en: "Associate Professor", ja: "助教授" },
    organization: {
      en: "Department of Informatics, Faculty of Information Science and Electrical Engineering, Kyushu University",
      ja: "九州大学 大学院システム情報科学研究院 情報学部門",
    },
  },
  {
    from: "2005-04",
    to: "2006-11",
    position: { en: "Lecturer", ja: "講師" },
    organization: {
      en: "Department of Informatics, Faculty of Information Science and Electrical Engineering, Kyushu University",
      ja: "九州大学 大学院システム情報科学研究院 情報学部門",
    },
  },
  {
    from: "2000-07",
    to: "2005-03",
    position: { en: "Research Associate", ja: "助手" },
    organization: {
      en: "Human Genome Center, Institute of Medical Science, The University of Tokyo",
      ja: "東京大学 医科学研究所 ヒトゲノム解析センター",
    },
  },
];

/** Degrees, newest first; shown under Education on the CV page. */
export const DEGREES: {
  /** "YYYY-MM", or just "YYYY" where the month is not known. */
  date: string;
  degree: Record<Locale, string>;
  university: Record<Locale, string>;
}[] = [
  {
    date: "2005-03",
    degree: {
      en: "Ph.D. in Information Science and Technology",
      ja: "博士(情報理工学)",
    },
    university: { en: "The University of Tokyo", ja: "東京大学" },
  },
  {
    date: "2000-03",
    degree: { en: "M.Sc. in Information Science", ja: "修士(理学)" },
    university: {
      en: "Graduate School of Science, The University of Tokyo",
      ja: "東京大学 大学院理学系研究科 情報科学専攻",
    },
  },
  {
    date: "1998-03",
    degree: { en: "B.Sc. in Information Science", ja: "学士(理学)" },
    university: {
      en: "Faculty of Science, The University of Tokyo",
      ja: "東京大学 理学部 情報科学科",
    },
  },
];
