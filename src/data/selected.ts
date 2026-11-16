import type { Locale } from "../lib/i18n";
import type { Tag } from "./tags";

/**
 * Selected publications, by theme: the home page lists the themes in this
 * order, under their names from tags.ts, and each theme's papers newest
 * first. Each paper is marked with a star in the publication list. Kept apart
 * from hideo-bannai.bib, like awards.ts. Where a paper has a journal version,
 * the journal version is the one listed. `why`, if given, is one line on what
 * the paper did, shown under it.
 */
export type Selected = { key: string; why?: Record<Locale, string> };

export const SELECTED: { theme: Tag; papers: Selected[] }[] = [
  {
    theme: "compression",
    papers: [
      {
        key: "DBLP:journals/talg/BannaiGIKKNS26",
        why: {
          en: "First practical exact computation of smallest string attractors, macro schemes and SLPs",
          ja: "最小の文字列アトラクタ・マクロスキーム・SLP を厳密に求める初の実用的な実装",
        },
      },
      {
        key: "DBLP:conf/birthday/BannaiKL25",
        why: {
          en: "A survey of the bijective BWT: its history, properties, algorithms and applications",
          ja: "全単射 BWT のサーベイ:歴史・性質・アルゴリズム・応用",
        },
      },
      {
        key: "DBLP:conf/esa/BannaiFHMP24",
        why: {
          en: "LZ-style compression with fast random access, by bounding the height of references",
          ja: "参照の高さを抑えて高速なランダムアクセスを可能にする LZ 型圧縮",
        },
      },
      {
        key: "DBLP:journals/tcs/BannaiGI20",
        why: {
          en: "A simpler Toehold Lemma, and updating the r-index as genomes are added",
          ja: "Toehold Lemma の簡素化と、ゲノムの追加に応じた r-index の更新",
        },
      },
    ],
  },
  {
    theme: "combinatorics",
    papers: [
      {
        key: "DBLP:conf/spire/BannaiFIKMN21",
        why: {
          en: "Thue-Morse words separate the smallest string attractor from the smallest macro scheme: γ = o(b)",
          ja: "Thue-Morse 語により最小文字列アトラクタと最小双方向マクロスキームを分離(γ = o(b))",
        },
      },
      {
        key: "DBLP:conf/spire/BannaiMN20",
        why: {
          en: "A more general Three Squares Lemma, and an n log₂ n bound on primitively rooted squares, via Lyndon words",
          ja: "Lyndon 語による三平方補題の一般化と、原始平方の数の上界 n log₂ n",
        },
      },
      {
        key: "DBLP:journals/siamcomp/BannaiIINTT17",
        why: { en: "Proof of the Runs Conjecture", ja: "Runs 予想の証明" },
      },
    ],
  },
  {
    theme: "bioinformatics",
    papers: [
      {
        key: "DBLP:journals/bioinformatics/BannaiTMNM02",
        why: {
          en: "iPSORT: simple, interpretable rules that predict N-terminal protein sorting signals nearly as well as TargetP",
          ja: "iPSORT:TargetP に迫る精度で N 末端の局在化シグナルを予測する、簡潔で解釈しやすい規則",
        },
      },
    ],
  },
];
