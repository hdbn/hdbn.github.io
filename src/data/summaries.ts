import type { Locale } from "../lib/i18n";

/**
 * One line on what each paper does, by BibTeX key, shown under the authors in
 * the publication list. Kept apart from hideo-bannai.bib, like awards.ts.
 * A paper with several versions (conference, journal, preprint) needs only
 * one of its keys here: lib/bibtex.ts gives the line to every version with
 * the same title.
 *
 * Written from each paper's abstract (arXiv, Semantic Scholar, Crossref or
 * OpenAlex); papers with no abstract to be found have no line yet.
 */
export const SUMMARIES: Record<string, Record<Locale, string>> = {
  // Bijective BWT Based Compression Schemes (2026)
  "DBLP:journals/mst/BadkobehBIK26": {
    en: "Macro schemes as small as the bijective BWT's run count, which is O(z log² n), and a separation from the BWT",
    ja: "全単射 BWT の連長数程度の大きさのマクロスキームを導き、その連長数が O(z log² n) であることと BWT との分離を示す",
  },
  // Computing NP-hard Repetitiveness Measures via MAX-SAT (2026)
  "DBLP:journals/talg/BannaiGIKKNS26": {
    en: "First practical exact computation of smallest string attractors, macro schemes and SLPs",
    ja: "最小の文字列アトラクタ・マクロスキーム・SLP を厳密に求める初の実用的な実装",
  },
  // Grammar index by induced suffix sorting (2026)
  "DBLP:journals/tcs/AkagiKNIBT26": {
    en: "A compressed text index on the grammar from induced suffix sorting, using its locality-sensitive parsing",
    ja: "誘導ソートに基づく文法圧縮の局所一貫的な構文解析を利用した圧縮索引",
  },
  // On Occurrence-Preserving Morphisms (2026)
  "DBLP:conf/cpm/KishiGUB26": {
    en: "Morphisms that preserve the number of occurrences of one word in another, characterized by interference-freeness",
    ja: "語の出現回数を保つ射を、干渉なし性によって特徴付け",
  },
  // Online Computation of Palindromes and Suffix Trees on Tries (2026)
  "DBLP:journals/corr/abs-2601-16485": {
    en: "First sub-quadratic algorithms for enumerating palindromes in a dynamic trie",
    ja: "葉の追加・削除を許す動的トライ上の回文列挙を初めて劣二乗時間で実現",
  },
  // Optimal Dictionary-Based Compression with Answer Set Programming: Encodings and Empirical Analysis (2026)
  "DBLP:conf/kr/BanbaraBHKMN26": {
    en: "Computing smallest bidirectional macro schemes and SLPs exactly with Answer Set Programming",
    ja: "解集合プログラミングによる最小双方向マクロスキーム・最小 SLP の厳密計算",
  },
  // Sensitivity of Repetitiveness Measures to String Reversal (2026)
  "DBLP:conf/cpm/BannaiFGINPU26": {
    en: "Reversing a string can change the BWT run count r and the LZ77 size z additively by Θ(n)",
    ja: "文字列の反転で BWT の連長数 r や LZ77 の句数 z が加法的に Θ(n) 変化しうることを示す",
  },
  // String Representation in Suffixient Set Size Space (2026)
  "DBLP:journals/corr/abs-2604-04377": {
    en: "Every string has a substring equation system of size proportional to its smallest suffixient set",
    ja: "任意の文字列が最小 suffixient 集合の大きさに比例する部分文字列等式系で表せることを示す",
  },
  // The Smallest String Attractors of Fibonacci and Period-Doubling Words (2026)
  "DBLP:conf/cpm/BanbaraBGKMO26": {
    en: "All smallest string attractors of Fibonacci, period-doubling and Thue-Morse words, characterized",
    ja: "Fibonacci 語・周期倍加語・Thue-Morse 語の最小文字列アトラクタをすべて特徴付け",
  },
  // A Survey of the Bijective Burrows-Wheeler Transform (2025)
  "DBLP:conf/birthday/BannaiKL25": {
    en: "A survey of the bijective BWT: its history, properties, algorithms and applications",
    ja: "全単射 BWT のサーベイ:歴史・性質・アルゴリズム・応用",
  },
  // Computing maximal palindromes in non-standard matching models (2025)
  "DBLP:journals/iandc/MienoFNIBT25": {
    en: "Maximal palindromes under reversal- and symmetry-based definitions, for non-exact matching models",
    ja: "非厳密な照合モデルにおける、反転型・対称型の両定義による極大回文の計算",
  },
  // Counting Distinct (Non-)crossing Substrings (2025)
  "DBLP:conf/spire/UmezakiSKNIB25": {
    en: "Counting distinct substrings crossing (or not crossing) each position, for all positions at once",
    ja: "各位置をまたぐ(またがない)相異なる部分文字列の数を全位置について効率よく計算",
  },
  // Nyldon Factorization of Thue-Morse Words and Fibonacci Words (2025)
  "DBLP:conf/spire/KishiKNIB25": {
    en: "The Nyldon factorizations of finite Fibonacci and Thue-Morse words, fully characterized",
    ja: "有限 Fibonacci 語と Thue-Morse 語の Nyldon 分解を完全に特徴付け",
  },
  // On the Compressiveness of the Burrows-Wheeler Transform (2025)
  "DBLP:conf/cpm/BannaiI025": {
    en: "The BWT and bijective BWT raise repetitiveness at most polylogarithmically, and the latter can make incompressible strings compressible",
    ja: "BWT・全単射 BWT は反復度を高々多重対数倍しか増やさず、後者は辞書型圧縮できない文字列を圧縮可能にしうる",
  },
  // Text Indexing for Simple Regular Expressions (2025)
  "DBLP:conf/cpm/BannaiBGL0PST25": {
    en: "Indexing a text for queries with simple regular expressions such as character-class Kleene stars",
    ja: "文字クラスのクリーネ閉包など単純な正規表現で検索するためのテキスト索引",
  },
  // Computing Longest Lyndon Subsequences and Longest Common Lyndon Subsequences (2024)
  "DBLP:journals/algorithmica/BannaiIKKP24": {
    en: "Algorithms for the longest Lyndon subsequence of a string, and the longest common one of two",
    ja: "最長 Lyndon 部分列と 2 文字列の最長共通 Lyndon 部分列を求めるアルゴリズム",
  },
  // Constructing and indexing the bijective and extended Burrows-Wheeler transform (2024)
  "DBLP:journals/iandc/BannaiKKP24": {
    en: "A self-index on the bijective BWT, and its first linear-time construction",
    ja: "全単射 BWT 上の自己索引と、その初の線形時間構築",
  },
  // Edit and Alphabet-Ordering Sensitivity of Lex-Parse (2024)
  "DBLP:conf/mfcs/0001KFIB24": {
    en: "Tight bounds on how much lex-parse can change under one edit or a change of alphabet order",
    ja: "1 文字の編集やアルファベット順の変更による lex-parse の変化量の厳密な上下界",
  },
  // Faster space-efficient STR-IC-LCS computation (2024)
  "DBLP:journals/tcs/YonemotoNIB24": {
    en: "Faster, space-efficient algorithms for the longest common subsequence containing a given string",
    ja: "指定した文字列を含む最長共通部分列(STR-IC-LCS)を省領域かつ高速に計算",
  },
  // Height-Bounded Lempel-Ziv Encodings (2024)
  "DBLP:conf/esa/BannaiFHMP24": {
    en: "LZ-style compression with fast random access, by bounding the height of references",
    ja: "参照の高さを抑えて高速なランダムアクセスを可能にする LZ 型圧縮",
  },
  // Maintaining the Size of LZ77 on Semi-Dynamic Strings (2024)
  "DBLP:conf/cpm/BannaiCR24": {
    en: "Maintaining the LZ77 size under appends and front deletions, and the most compressible rotation",
    ja: "末尾追加・先頭削除のもとでの LZ77 の句数の維持と、最も圧縮しやすい回転の計算",
  },
  // NP-Completeness for the Space-Optimality of Double-Array Tries (2024)
  "DBLP:journals/corr/abs-2403-04951": {
    en: "Finding a space-optimal double-array trie is NP-complete",
    ja: "空間最適なダブル配列トライの構築が NP 完全であることを証明",
  },
  // On the Hardness of Smallest RLSLPs and Collage Systems (2024)
  "DBLP:conf/dcc/KawamotoIKB24": {
    en: "Computing the smallest run-length SLP and collage system is NP-hard; a MAX-SAT encoding for the former",
    ja: "最小の連長 SLP・コラージュシステムの計算が NP 困難であることを示し、前者を MAX-SAT で符号化",
  },
  // On the Number of Non-equivalent Parameterized Squares in a String (2024)
  "DBLP:conf/spire/HamaiTNIB24": {
    en: "A string has fewer than σn non-equivalent parameterized squares, improving on 2σ!n",
    ja: "非等価なパラメタ化平方の数が σn 未満であることを示し、既知の上界 2σ!n を大きく改善",
  },
  // Pfp-fm: an accelerated FM-index (2024)
  "DBLP:journals/almob/HongOKBBG24": {
    en: "Faster FM-index searches on DNA by indexing words from prefix-free parsing",
    ja: "接頭辞自由構文解析による語単位の索引で DNA 上の FM-index 検索を高速化",
  },
  // Acceleration of FM-Index Queries Through Prefix-Free Parsing (2023)
  "DBLP:conf/wabi/HongOKBBG23": {
    en: "Faster FM-index searches on DNA by indexing words from prefix-free parsing",
    ja: "接頭辞自由構文解析による語単位の索引で DNA 上の FM-index 検索を高速化",
  },
  // Linear-time computation of DAWGs, symmetric indexing structures, and MAWs for integer alphabets (2023)
  "DBLP:journals/tcs/FujishigeTIBT23": {
    en: "Linear-time construction of DAWGs and minimal absent words from the suffix tree, for integer alphabets",
    ja: "整数アルファベット上で接尾辞木から DAWG と極小欠損語を線形時間で構築",
  },
  // Linear-Time Computation of Generalized Minimal Absent Words for Multiple Strings (2023)
  "DBLP:conf/spire/OkabeMNIB23": {
    en: "Minimal absent words generalized to sets of strings, computed in optimal time",
    ja: "極小欠損語を複数文字列の集合へ一般化し、最適時間で計算",
  },
  // Longest bordered and periodic subsequences (2023)
  "DBLP:journals/ipl/BannaiIK23": {
    en: "Polynomial algorithms for the longest periodic subsequence, and a conditional lower bound for the bordered case",
    ja: "最長周期部分列の多項式時間アルゴリズムと、最長ボーダー付き部分列の条件付き下界",
  },
  // Lyndon Arrays in Sublinear Time (2023)
  "DBLP:conf/esa/BannaiE23": {
    en: "The Lyndon array of a string over a small integer alphabet in sublinear time",
    ja: "小さな整数アルファベット上の文字列の Lyndon 配列を劣線形時間で計算",
  },
  // Optimal LZ-End Parsing Is Hard (2023)
  "DBLP:conf/cpm/BannaiFKNSU23": {
    en: "Computing an LZ-End parsing with the fewest phrases is NP-complete",
    ja: "句数最小の LZ-End 分解の計算が NP 完全であることを証明",
  },
  // Sliding suffix trees simplified (2023)
  "DBLP:journals/corr/abs-2307-01412": {
    en: "Maintaining the edge labels of a sliding suffix tree in worst-case constant time per update",
    ja: "スライド窓の接尾辞木の辺ラベルを、更新ごとに最悪定数時間で維持",
  },
  // Space-Efficient STR-IC-LCS Computation (2023)
  "DBLP:conf/sofsem/YonemotoNIB23": {
    en: "Space-efficient algorithms for the longest common subsequence containing a given string",
    ja: "指定した文字列を含む最長共通部分列(STR-IC-LCS)の省領域アルゴリズム",
  },
  // c-trie++: A dynamic trie tailored for fast prefix searches (2022)
  "DBLP:journals/iandc/TsurutaKKNIBT22": {
    en: "A dynamic keyword dictionary with fast prefix search using word-packed characters, evaluated in practice",
    ja: "ワードに文字を詰めて高速な接頭辞検索を行う動的キーワード辞書と、その実験評価",
  },
  // Combinatorics of minimal absent words for a sliding window (2022)
  "DBLP:journals/tcs/AkagiKMNIBT22": {
    en: "Tight bounds on how the set of minimal absent words changes as a window slides",
    ja: "窓をずらしたときの極小欠損語集合の変化量の厳密な上下界",
  },
  // Computing Longest (Common) Lyndon Subsequences (2022)
  "DBLP:conf/iwoca/BannaiIKKP22": {
    en: "Algorithms for the longest Lyndon subsequence of a string, and the longest common one of two",
    ja: "最長 Lyndon 部分列と 2 文字列の最長共通 Lyndon 部分列を求めるアルゴリズム",
  },
  // Computing maximal generalized palindromes (2022)
  "DBLP:journals/corr/abs-2210-02067": {
    en: "Maximal palindromes under reversal- and symmetry-based definitions, for non-exact matching models",
    ja: "非厳密な照合モデルにおける、反転型・対称型の両定義による極大回文の計算",
  },
  // Computing Minimal Unique Substrings for a Sliding Window (2022)
  "DBLP:journals/algorithmica/MienoFNIBT22": {
    en: "How minimal unique substrings change in a sliding window, and an algorithm to maintain them",
    ja: "スライド窓における極小一意部分文字列の変化と、それを維持するアルゴリズム",
  },
  // Longest (Sub-)Periodic Subsequence (2022)
  "DBLP:journals/corr/abs-2202-07189": {
    en: "Polynomial-time algorithms for the longest periodic and subperiodic subsequences",
    ja: "最長周期部分列(および部分周期的な部分列)を求める多項式時間アルゴリズム",
  },
  // Online Algorithms for Finding Distinct Substrings with Length and Multiple Prefix and Suffix Conditions (2022)
  "DBLP:conf/spire/LeonardIBM22": {
    en: "Online counting and reporting of distinct substrings with given length, prefix and suffix conditions",
    ja: "長さと接頭辞・接尾辞の条件を満たす相異なる部分文字列のオンライン数え上げと列挙",
  },
  // Order-preserving pattern matching indeterminate strings (2022)
  "DBLP:journals/iandc/RussoCHBF22": {
    en: "Order-preserving pattern matching when both text and pattern have uncertain characters",
    ja: "テキストとパターンの両方に不確定文字を含む順序保存パターン照合",
  },
  // Palindromic trees for a sliding window and its applications (2022)
  "DBLP:journals/ipl/MienoWNIBT22": {
    en: "Maintaining the palindromic tree (eertree) of a sliding window",
    ja: "スライド窓の回文木(eertree)を維持するアルゴリズムとその応用",
  },
  // Parameterized DAWGs: Efficient constructions and bidirectional pattern searches (2022)
  "DBLP:journals/tcs/NakashimaFHNYIB22": {
    en: "Parameterized suffix automata and DAWGs, their efficient construction, and bidirectional p-matching",
    ja: "パラメタ化接尾辞オートマトンとパラメタ化 DAWG の効率的構築と双方向パターン照合",
  },
  // A Separation of γ and b via Thue-Morse Words (2021)
  "DBLP:conf/spire/BannaiFIKMN21": {
    en: "Thue-Morse words show for the first time that the smallest string attractor can be asymptotically smaller than the smallest macro scheme",
    ja: "Thue-Morse 語により、最小文字列アトラクタが最小双方向マクロスキームより漸近的に小さくなりうることを初めて示す",
  },
  // Compressed Communication Complexity of Hamming Distance (2021)
  "DBLP:journals/algorithms/MitsuyaNIBT21": {
    en: "A randomized protocol for computing the Hamming distance of two LZ77-compressed strings",
    ja: "LZ77 で圧縮された 2 文字列のハミング距離を求める乱択通信プロトコル",
  },
  // Computing longest palindromic substring after single-character or block-wise edits (2021)
  "DBLP:journals/tcs/FunakoshiNIBT21": {
    en: "The longest palindromic substring after a character or block edit, answered quickly after linear preprocessing",
    ja: "線形時間の前処理で、1 文字やブロックの編集後の最長回文部分文字列に高速に答える",
  },
  // Constructing the Bijective and the Extended Burrows-Wheeler Transform in Linear Time (2021)
  "DBLP:conf/cpm/BannaiKKP21": {
    en: "Linear-time construction of the bijective and extended BWTs, as conjectured",
    ja: "全単射 BWT と拡張 BWT を予想どおり線形時間で構築",
  },
  // Efficiently computing runs on a trie (2021)
  "DBLP:journals/tcs/SugaharaNIBT21": {
    en: "A trie with n edges has fewer than n runs; bounds on their density and computing them efficiently",
    ja: "辺数 n のトライ上の連の数は n 未満であることを示し、その密度の評価と効率的な計算法を与える",
  },
  // Repetitions in Strings: A "Constant" Problem (Invited Talk) (2021)
  "DBLP:conf/cpm/Bannai21": {
    en: "Invited talk on squares and runs in strings, around the Runs Theorem",
    ja: "文字列中の平方と連について、Runs 定理を中心に紹介する招待講演",
  },
  // The Parameterized Suffix Tray (2021)
  "DBLP:conf/ciac/FujisatoNIBT21": {
    en: "An index for parameterized matching combining the suffix tree and suffix array",
    ja: "接尾辞木と接尾辞配列を組み合わせたパラメタ化照合のための索引",
  },
  // The Smallest Grammar Problem Revisited (2021)
  "DBLP:journals/tit/BannaiHHIJLR21": {
    en: "Tight approximation ratios for LZ78 and BISECTION, and a better lower bound for RePair",
    ja: "LZ78・BISECTION の近似比を確定させ、RePair の下界を改善",
  },
  // Computing Palindromic Trees for a Sliding Window and Its Applications (2020)
  "DBLP:journals/corr/abs-2006-02134": {
    en: "Maintaining the palindromic tree (eertree) of a sliding window",
    ja: "スライド窓の回文木(eertree)を維持するアルゴリズムとその応用",
  },
  // DAWGs for Parameterized Matching: Online Construction and Related Indexing Structures (2020)
  "DBLP:conf/cpm/NakashimaFHNYIB20": {
    en: "Parameterized suffix automata and DAWGs, with online construction",
    ja: "パラメタ化接尾辞オートマトンとパラメタ化 DAWG、およびそのオンライン構築",
  },
  // Detecting k-(Sub-)Cadences and Equidistant Subsequence Occurrences (2020)
  "DBLP:conf/cpm/FunakoshiNIBTS20": {
    en: "Subquadratic algorithms for cadences and equally spaced subsequence occurrences",
    ja: "ケイデンスと等間隔部分列の出現を劣二乗時間で検出",
  },
  // Dynamic index and LZ factorization in compressed space (2020)
  "DBLP:journals/dam/NishimotoIIBT20": {
    en: "A dynamic compressed index on signature encodings, and LZ77 factorization in compressed space",
    ja: "シグネチャ符号化に基づく動的圧縮索引と、圧縮領域での LZ77 分解",
  },
  // Fast Algorithms for the Shortest Unique Palindromic Substring Problem on Run-Length Encoded Strings (2020)
  "DBLP:journals/mst/WatanabeNIBT20": {
    en: "Answering shortest unique palindromic substring queries on run-length encoded strings",
    ja: "連長圧縮文字列上での最短一意回文部分文字列クエリ",
  },
  // Faster STR-EC-LCS Computation (2020)
  "DBLP:conf/sofsem/YamadaNIBT20": {
    en: "A faster algorithm for the longest common subsequence that avoids a given substring",
    ja: "指定した部分文字列を含まない最長共通部分列(STR-EC-LCS)の高速計算",
  },
  // Finding all maximal perfect haplotype blocks in linear time (2020)
  "DBLP:journals/almob/AlankoBCPS20": {
    en: "All maximal perfect haplotype blocks in linear time, for detecting signatures of selection",
    ja: "自然選択の痕跡を探すための極大完全ハプロタイプブロックをすべて線形時間で列挙",
  },
  // Grammar-compressed Self-index with Lyndon Words (2020)
  "DBLP:journals/corr/abs-2004-05309": {
    en: "The Lyndon SLP, a grammar inspired by Lyndon trees, and a self-index built on it",
    ja: "Lyndon 木に着想を得た文法 Lyndon SLP と、その上の自己索引",
  },
  // Longest Square Subsequence Problem Revisited (2020)
  "DBLP:conf/spire/InoueIB20": {
    en: "The first algorithm for the longest square subsequence whose time depends on parameters other than n",
    ja: "最長平方部分列を n 以外のパラメタに依存する時間で求める初のアルゴリズム",
  },
  // Lyndon Words, the Three Squares Lemma, and Primitive Squares (2020)
  "DBLP:conf/spire/BannaiMN20": {
    en: "A more general Three Squares Lemma, and an n log₂ n bound on primitively rooted squares, via Lyndon words",
    ja: "Lyndon 語による三平方補題の一般化と、原始平方の数の上界 n log₂ n",
  },
  // Minimal Unique Substrings and Minimal Absent Words in a Sliding Window (2020)
  "DBLP:conf/sofsem/MienoKAFNIBT20": {
    en: "How minimal unique substrings and minimal absent words change in a sliding window",
    ja: "スライド窓における極小一意部分文字列と極小欠損語の変化と計算",
  },
  // More Time-Space Tradeoffs for Finding a Shortest Unique Substring (2020)
  "DBLP:journals/algorithms/BannaiGHPR20": {
    en: "New time-space tradeoffs for shortest unique substrings, including the k-mismatch case in sublinear space",
    ja: "最短一意部分文字列の新たな時間・領域トレードオフ、k 誤りの場合を劣線形領域で",
  },
  // On Repetitiveness Measures of Thue-Morse Words (2020)
  "DBLP:conf/spire/KutsukakeMNIBT20": {
    en: "The smallest string attractor of Thue-Morse words has size 4, disproving a conjecture",
    ja: "Thue-Morse 語の最小文字列アトラクタの大きさが 4 であることを示し、予想を否定",
  },
  // Practical Grammar Compression Based on Maximal Repeats (2020)
  "DBLP:journals/algorithms/FuruyaTNIBK20": {
    en: "How RePair relates to maximal repeats, and MR-RePair, which replaces maximal repeats at once",
    ja: "RePair と極大反復の関係の解析と、極大反復を一度に置換する MR-RePair",
  },
  // Refining the r-index (2020)
  "DBLP:journals/tcs/BannaiGI20": {
    en: "A simpler Toehold Lemma, and updating the r-index as genomes are added",
    ja: "Toehold Lemma の簡素化と、ゲノムの追加に応じた r-index の更新",
  },
  // Space-efficient algorithms for computing minimal/shortest unique substrings (2020)
  "DBLP:journals/tcs/MienoKNIBT20": {
    en: "Succinct data structures for shortest unique substring queries",
    ja: "最短一意部分文字列クエリのための簡潔データ構造",
  },
  // Towards Efficient Interactive Computation of Dynamic Time Warping Distance (2020)
  "DBLP:conf/spire/NishiNIBT20": {
    en: "Updating the dynamic time warping distance quickly as the strings are edited",
    ja: "文字列の編集に応じて動的時間伸縮距離を効率よく更新",
  },
  // An Improved Data Structure for Left-Right Maximal Generic Words Problem (2019)
  "DBLP:conf/isaac/FujishigeNIBT19": {
    en: "A smaller, faster data structure for left-right maximal generic words in a document collection",
    ja: "文書集合における左右極大な汎用語のための、より小さく高速なデータ構造",
  },
  // Compact Data Structures for Shortest Unique Substring Queries (2019)
  "DBLP:conf/spire/MienoKNIBT19": {
    en: "Succinct data structures for shortest unique substring queries",
    ja: "最短一意部分文字列クエリのための簡潔データ構造",
  },
  // Computing Runs on a Trie (2019)
  "DBLP:conf/cpm/SugaharaNIBT19": {
    en: "A trie with n edges has fewer than n runs; bounds on their density and computing them",
    ja: "辺数 n のトライ上の連の数は n 未満であることを示し、その密度の評価と計算法を与える",
  },
  // Constructing the Bijective BWT (2019)
  "DBLP:journals/corr/abs-1911-06985": {
    en: "Linear-time construction of the bijective BWT, as conjectured",
    ja: "全単射 BWT を予想どおり線形時間で構築",
  },
  // Direct Linear Time Construction of Parameterized Suffix and LCP Arrays for Constant Alphabets (2019)
  "DBLP:conf/spire/FujisatoNIBT19": {
    en: "First worst-case linear-time direct construction of parameterized suffix and LCP arrays",
    ja: "パラメタ化接尾辞配列と LCP 配列を直接、最悪線形時間で構築する初のアルゴリズム",
  },
  // Dynamic Packed Compact Tries Revisited (2019)
  "DBLP:journals/corr/abs-1904-07467": {
    en: "A dynamic keyword dictionary with fast prefix search using word-packed characters",
    ja: "ワードに文字を詰めて高速な接頭辞検索を行う動的キーワード辞書",
  },
  // Faster Queries for Longest Substring Palindrome After Block Edit (2019)
  "DBLP:conf/cpm/FunakoshiNIBT19": {
    en: "The longest palindromic substring after an edit, answered quickly after linear preprocessing",
    ja: "線形時間の前処理で、編集後の最長回文部分文字列に高速に答える",
  },
  // Indexing the Bijective BWT (2019)
  "DBLP:conf/cpm/BannaiKKP19": {
    en: "A self-index on the bijective BWT, searching by backward search as in the FM-index",
    ja: "FM-index と同様の後方検索で検索できる全単射 BWT 上の自己索引",
  },
  // k-Abelian Pattern Matching: Revisited, Corrected, and Extended (2019)
  "DBLP:conf/stringology/BadkobehBCIIS19": {
    en: "k-Abelian pattern matching revisited: earlier claims corrected and the results extended",
    ja: "k-アーベルパターン照合の再検討:既存の主張を訂正し、結果を拡張",
  },
  // MR-RePair: Grammar Compression Based on Maximal Repeats (2019)
  "DBLP:conf/dcc/FuruyaTNIBK19": {
    en: "MR-RePair, a variant of RePair that replaces the most frequent maximal repeats at once",
    ja: "最頻の極大反復を一度に置換する RePair の変種 MR-RePair",
  },
  // On Longest Common Property Preserved Substring Queries (2019)
  "DBLP:conf/spire/KaiNIBTK19": {
    en: "A unified online setting for longest common substrings with properties such as square-freeness",
    ja: "平方なしなどの性質を保つ最長共通部分文字列クエリを統一的なオンライン設定で扱う",
  },
  // On the Size of Overlapping Lempel-Ziv and Lyndon Factorizations (2019)
  "DBLP:conf/cpm/UrabeNIBT19": {
    en: "The Lyndon factorization is smaller than four times the overlapping LZ factorization",
    ja: "Lyndon 分解の大きさは重なりを許す LZ 分解の 4 倍未満であることを示す",
  },
  // On the size of the smallest alphabet for Lyndon trees (2019)
  "DBLP:journals/tcs/NakashimaTIBT19": {
    en: "Smallest alphabets for a string with a given Lyndon tree: ⌊n/2⌋+1 always suffices and is sometimes needed",
    ja: "与えられた Lyndon 木をもつ文字列のアルファベットの大きさ:⌊n/2⌋+1 で常に足り、それが必要な木もある",
  },
  // Shortest Unique Palindromic Substring Queries on Run-Length Encoded Strings (2019)
  "DBLP:conf/iwoca/WatanabeNIBT19": {
    en: "Answering shortest unique palindromic substring queries on run-length encoded strings",
    ja: "連長圧縮文字列上での最短一意回文部分文字列クエリ",
  },
  // The Parameterized Position Heap of a Trie (2019)
  "DBLP:conf/ciac/FujisatoNIBT19": {
    en: "The parameterized position heap of a trie, for parameterized matching on tries",
    ja: "トライ上のパラメタ化照合のためのパラメタ化ポジションヒープ",
  },
  // Algorithms and combinatorial properties on shortest unique palindromic substrings (2018)
  "DBLP:journals/jda/InoueNMIBT18": {
    en: "Optimal algorithms and combinatorial properties for shortest unique palindromic substrings",
    ja: "最短一意回文部分文字列の最適アルゴリズムと組合せ的性質",
  },
  // Block Palindromes: A New Generalization of Palindromes (2018)
  "DBLP:conf/spire/GotoIBI18": {
    en: "Block palindromes, a generalization of palindromes, and enumerating the maximal ones",
    ja: "回文を一般化したブロック回文と、極大ブロック回文の列挙",
  },
  // Computing longest common square subsequences (2018)
  "DBLP:conf/cpm/InoueIHBT18": {
    en: "Algorithms for the longest square that is a common subsequence of two strings",
    ja: "2 文字列に共通する部分列のうち最長の平方を求めるアルゴリズム",
  },
  // Diverse Palindromic Factorization is NP-Complete (2018)
  "DBLP:journals/ijfcs/BannaiGIKKPS18": {
    en: "Factoring a string into distinct palindromes is NP-complete",
    ja: "文字列を相異なる回文に分解できるかの判定が NP 完全であることを証明",
  },
  // Faster Online Elastic Degenerate String Matching (2018)
  "DBLP:conf/cpm/AoyamaNIIBT18": {
    en: "A faster online algorithm for pattern matching in elastic-degenerate strings",
    ja: "伸縮縮退文字列上のパターン照合のより高速なオンラインアルゴリズム",
  },
  // Longest Lyndon Substring After Edit (2018)
  "DBLP:conf/cpm/UrabeNIBT18": {
    en: "The longest Lyndon substring after an edit, in logarithmic time after linear preprocessing",
    ja: "線形時間の前処理で、編集後の最長 Lyndon 部分文字列に対数時間で答える",
  },
  // Longest substring palindrome after edit (2018)
  "DBLP:conf/cpm/FunakoshiNIBT18": {
    en: "The longest palindromic substring after an edit, answered quickly after linear preprocessing",
    ja: "線形時間の前処理で、編集後の最長回文部分文字列に高速に答える",
  },
  // Lyndon Factorization of Grammar Compressed Texts Revisited (2018)
  "DBLP:conf/cpm/FuruyaNIIBT18": {
    en: "A faster Lyndon factorization of a string given as an SLP, using LCE queries on SLPs",
    ja: "SLP 上の LCE クエリを用いた、SLP で与えられた文字列のより高速な Lyndon 分解",
  },
  // O(n log n)-time Text Compression by LZ-style Longest First Substitution (2018)
  "DBLP:conf/stringology/NishiNIBT18": {
    en: "LZ-style longest-first-substitution compression in O(n log n) time, down from O(n²)",
    ja: "LZ 型最長優先置換圧縮を O(n²) から O(n log n) 時間に高速化",
  },
  // Online LZ77 Parsing and Matching Statistics with RLBWTs (2018)
  "DBLP:conf/cpm/BannaiGI18": {
    en: "A simpler Toehold Lemma, and updating the r-index as genomes are added",
    ja: "Toehold Lemma の簡素化と、ゲノムの追加に応じた r-index の更新",
  },
  // Right-to-left Online Construction of Parameterized Position Heaps (2018)
  "DBLP:conf/stringology/FujisatoNIBT18": {
    en: "Right-to-left online construction of parameterized position heaps",
    ja: "パラメタ化ポジションヒープの右から左へのオンライン構築",
  },
  // Almost Linear Time Computation of Maximal Repetitions in Run Length Encoded Strings (2017)
  "DBLP:conf/isaac/FujishigeNIBT17": {
    en: "All runs of a run-length encoded string in almost linear time, with a bound on their number",
    ja: "連長圧縮文字列中の連の個数の上界と、それらをほぼ線形時間ですべて計算する方法",
  },
  // Computing Abelian regularities on RLE strings (2017)
  "DBLP:journals/corr/SugimotoNIBT17": {
    en: "Abelian squares, periods and common factors computed on run-length encoded strings",
    ja: "連長圧縮文字列上でのアーベル平方・アーベル周期・共通因子の計算",
  },
  // Computing All Distinct Squares in Linear Time for Integer Alphabets (2017)
  "DBLP:conf/cpm/BannaiIK17": {
    en: "All distinct squares of a string in linear time for integer alphabets",
    ja: "整数アルファベット上で相異なる平方をすべて線形時間で計算",
  },
  // Faster STR-IC-LCS Computation via RLE (2017)
  "DBLP:conf/cpm/KuboiFIBT17": {
    en: "Faster longest common subsequence containing a given string, using run-length encoding",
    ja: "連長圧縮を用いて、指定した文字列を含む最長共通部分列を高速に計算",
  },
  // Longest Common Subsequence in at Least k Length Order-Isomorphic Substrings (2017)
  "DBLP:conf/sofsem/UekiDKMNYBIS17": {
    en: "Longest common subsequences made of order-isomorphic blocks of length at least k, in O(mn) time",
    ja: "長さ k 以上の順序同型な部分文字列からなる最長共通部分列を O(mn) 時間で計算",
  },
  // Order Preserving Pattern Matching on Trees and DAGs (2017)
  "DBLP:conf/spire/NakamuraIBT17": {
    en: "Order-preserving pattern matching on texts given as trees and DAGs",
    ja: "木や DAG で与えられたテキスト上の順序保存パターン照合",
  },
  // Shortest Unique Palindromic Substring Queries in Optimal Time (2017)
  "DBLP:conf/iwoca/NakashimaIMIBT17": {
    en: "Shortest unique palindromic substring queries answered in optimal time",
    ja: "最短一意回文部分文字列クエリに最適時間で答える",
  },
  // Small-space encoding LCE data structure with constant-time queries (2017)
  "DBLP:journals/corr/TanimuraNBIT17": {
    en: "A small-space encoding data structure answering LCE queries in constant time",
    ja: "LCE クエリに定数時間で答える省領域の符号化データ構造",
  },
  // Small-Space LCE Data Structure with Constant-Time Queries (2017)
  "DBLP:conf/mfcs/TanimuraNBIT17": {
    en: "A small-space encoding data structure answering LCE queries in constant time",
    ja: "LCE クエリに定数時間で答える省領域の符号化データ構造",
  },
  // The "Runs" Theorem (2017)
  "DBLP:journals/siamcomp/BannaiIINTT17": {
    en: "A characterization of runs by Lyndon words, proving the Runs Conjecture: fewer than n runs",
    ja: "Lyndon 語による連の特徴付けで Runs 予想(連の数は n 未満)を証明",
  },
  // Tight Bounds on the Maximum Number of Shortest Unique Substrings (2017)
  "DBLP:conf/cpm/MienoIBT17": {
    en: "Tight bounds on how many shortest unique substrings a string can have",
    ja: "最短一意部分文字列の最大個数の厳密な上下界",
  },
  // Computing DAWGs and Minimal Absent Words in Linear Time for Integer Alphabets (2016)
  "DBLP:conf/mfcs/FujishigeTIBT16": {
    en: "First linear-time construction of DAWGs and affix trees for integer alphabets, and minimal absent words",
    ja: "整数アルファベット上で DAWG・接辞木を線形時間で構築する初のアルゴリズムと、極小欠損語の計算",
  },
  // Deterministic Sub-Linear Space LCE Data Structures With Efficient Construction (2016)
  "DBLP:conf/cpm/TanimuraIBIPT16": {
    en: "Deterministic sublinear-space LCE data structures that are also fast to build",
    ja: "高速に構築できる決定的な劣線形領域 LCE データ構造",
  },
  // Factorizing a String into Squares in Linear Time (2016)
  "DBLP:conf/cpm/MatsuokaIBTM16": {
    en: "Factorizing a string into squares in linear time, answering an open question",
    ja: "文字列を平方に分解する線形時間アルゴリズム、未解決問題に肯定的に答える",
  },
  // Fully Dynamic Data Structure for LCE Queries in Compressed Space (2016)
  "DBLP:conf/mfcs/NishimotoIIBT16": {
    en: "LCE queries on a dynamic text in compressed space, via signature encodings",
    ja: "シグネチャ符号化による、動的テキスト上の圧縮領域 LCE クエリ",
  },
  // Shortest Unique Substring Queries on Run-Length Encoded Strings (2016)
  "DBLP:conf/mfcs/MienoIBT16": {
    en: "Shortest unique substring queries answered on run-length encoded strings",
    ja: "連長圧縮文字列上での最短一意部分文字列クエリ",
  },
  // Tight bound on the maximum number of shortest unique substrings (2016)
  "DBLP:journals/corr/MienoIBT16": {
    en: "Tight bounds on how many shortest unique substrings a string can have",
    ja: "最短一意部分文字列の最大個数の厳密な上下界",
  },
  // A new characterization of maximal repetitions by Lyndon trees (2015)
  "DBLP:conf/soda/BannaiIINTT15": {
    en: "A characterization of runs by Lyndon trees, proving the Runs Conjecture",
    ja: "Lyndon 木による連の特徴付けと、それによる Runs 予想の証明",
  },
  // Constructing LZ78 tries and position heaps in linear time for large alphabets (2015)
  "DBLP:journals/ipl/NakashimaIIBT15": {
    en: "First worst-case linear-time LZ78 factorization for integer alphabets, and position heaps likewise",
    ja: "整数アルファベット上で LZ78 分解とポジションヒープを最悪線形時間で構築する初のアルゴリズム",
  },
  // Detecting regularities on grammar-compressed strings (2015)
  "DBLP:journals/iandc/IMSIBTNS15": {
    en: "Runs, squares, gapped palindromes, periods and covers found directly on an SLP",
    ja: "SLP 上で連・平方・ギャップ付き回文・周期・カバーを直接求める",
  },
  // Dynamic index, LZ factorization, and LCE queries in compressed space (2015)
  "DBLP:journals/corr/NishimotoIIBT15": {
    en: "A dynamic compressed index, LZ77 factorization and LCE queries, all in compressed space",
    ja: "圧縮領域での動的索引・LZ77 分解・LCE クエリ",
  },
  // Computing Abelian Covers and Abelian Runs (2014)
  "DBLP:conf/stringology/MatsudaIBT14": {
    en: "Abelian covers and Abelian runs, generalizing covers and runs, and computing them",
    ja: "カバーと連を一般化したアーベルカバー・アーベル連と、その計算",
  },
  // Faster Compact On-Line Lempel-Ziv Factorization (2014)
  "DBLP:conf/stacs/YamamotoIBIT14": {
    en: "Online LZ77 factorization in O(N log N) time and compact space, using DAWGs",
    ja: "DAWG を用いた省領域・O(N log N) 時間のオンライン LZ77 分解",
  },
  // On the existence of tight relative 2-designs on binary Hamming association schemes (2014)
  "DBLP:journals/dm/BannaiBB14": {
    en: "On which binary Hamming association schemes tight relative 2-designs can exist",
    ja: "2 元ハミング関係スキーム上のタイトな相対 2-デザインの存在について",
  },
  // Space Efficient Linear Time Lempel-Ziv Factorization for Small Alphabets (2014)
  "DBLP:conf/dcc/GotoB14": {
    en: "Linear-time LZ77 factorization in about one integer array of working space, for small alphabets",
    ja: "小さなアルファベットに対し、作業領域ほぼ整数配列 1 本で線形時間 LZ77 分解",
  },
  // Computing Convolution on Grammar-Compressed Text (2013)
  "DBLP:conf/dcc/TanakaIIBT13": {
    en: "Convolution of an SLP-compressed text with a pattern, without decompressing",
    ja: "SLP 圧縮テキストとパターンの畳み込みを展開せずに計算",
  },
  // Computing Reversed Lempel-Ziv Factorization Online (2013)
  "DBLP:conf/stringology/SugimotoIIBT13": {
    en: "Online computation of the reversed LZ factorization, and a new variant with self-references",
    ja: "逆向き LZ 分解のオンライン計算と、自己参照を許す新たな変種",
  },
  // Efficient Lyndon Factorization of Grammar Compressed Text (2013)
  "DBLP:conf/cpm/INIBT13": {
    en: "First polynomial-time Lyndon factorization of a string given as an SLP",
    ja: "SLP で与えられた文字列の Lyndon 分解を求める初の多項式時間アルゴリズム",
  },
  // Fast q-gram mining on SLP compressed strings (2013)
  "DBLP:journals/jda/GotoBIT13": {
    en: "q-gram frequencies computed on SLP-compressed strings, faster than on the uncompressed text",
    ja: "SLP 圧縮文字列上で q-gram 頻度を計算し、非圧縮のままより高速に",
  },
  // From Run Length Encoding to LZ78 and Back Again (2013)
  "DBLP:conf/dcc/TamakoshiIIBT13": {
    en: "Efficient conversion between run-length encoding and LZ78 in both directions",
    ja: "連長圧縮と LZ78 の相互変換を効率よく行う",
  },
  // Simpler and Faster Lempel Ziv Factorization (2013)
  "DBLP:conf/dcc/GotoB13": {
    en: "A simple linear-time LZ77 factorization from the suffix array, faster in practice",
    ja: "接尾辞配列からの簡潔な線形時間 LZ77 分解、実用上も高速",
  },
  // Space Efficient Linear Time Lempel-Ziv Factorization on Constant~Size~Alphabets (2013)
  "DBLP:journals/corr/GotoB13": {
    en: "Linear-time LZ77 factorization with a single integer array of working space",
    ja: "作業領域を整数配列 1 本に抑えた線形時間 LZ77 分解",
  },
  // Computing q-Gram Non-overlapping Frequencies on SLP Compressed Texts (2012)
  "DBLP:conf/sofsem/GotoBIT12": {
    en: "Non-overlapping q-gram frequencies computed directly on SLP-compressed texts",
    ja: "SLP 圧縮テキスト上での q-gram の非重複頻度の計算",
  },
  // Efficient LZ78 Factorization of Grammar Compressed Text (2012)
  "DBLP:conf/spire/BannaiIT12": {
    en: "LZ78 factorization computed directly from an SLP",
    ja: "SLP から直接 LZ78 分解を計算",
  },
  // Finding Characteristic Substrings from Compressed Texts (2012)
  "DBLP:journals/ijfcs/InenagaB12": {
    en: "Longest repeats, most frequent substrings and related problems solved on compressed strings",
    ja: "圧縮文字列上で最長反復や最頻部分文字列などを求める",
  },
  // Polyphonic Music Classification on Symbolic Data Using Dissimilarity Functions (2012)
  "DBLP:conf/ismir/AnanHBTS12": {
    en: "Classifying polyphonic music via chroma vector sequences and dissimilarity-based learning",
    ja: "クロマベクトル列と非類似度に基づく学習による多声音楽の分類",
  },
  // Speeding Up q-Gram Mining on Grammar-Based Compressed Texts (2012)
  "DBLP:conf/cpm/GotoBIT12": {
    en: "Faster q-gram frequencies on SLPs by exploiting the redundancy the grammar captures",
    ja: "文法が捉える冗長性を利用した SLP 上の q-gram 頻度計算の高速化",
  },
  // Time and Space Efficient Lempel-Ziv Factorization based on Run Length Encoding (2012)
  "DBLP:journals/corr/abs-1204-5524": {
    en: "LZ77 factorization in time and space depending on the size of the run-length encoding",
    ja: "連長圧縮の大きさに依存する時間・領域での LZ77 分解",
  },
  // Computing Longest Common Substring/Subsequence of Non-linear Texts (2011)
  "DBLP:conf/stringology/ShimohiraIBT11": {
    en: "Longest common substrings and subsequences of non-linear texts given as labeled graphs",
    ja: "ラベル付きグラフで表される非線形テキストの最長共通部分文字列・部分列",
  },
  // Computing q-gram Frequencies on Collage Systems (2011)
  "DBLP:journals/corr/abs-1107-3019": {
    en: "q-gram frequencies computed on strings compressed as collage systems",
    ja: "コラージュシステムで圧縮された文字列上での q-gram 頻度計算",
  },
  // Efficient Eager XPath Filtering over XML Streams (2011)
  "DBLP:conf/stringology/HagioOBT11": {
    en: "Efficient eager filtering of XML streams with conjunctive XPath queries",
    ja: "連言 XPath による XML ストリームの効率的な先行フィルタリング",
  },
  // Music Genre Classification using Similarity Functions (2011)
  "DBLP:conf/ismir/AnanHBT11": {
    en: "Music genre classification with a similarity-based learning framework instead of kernels",
    ja: "カーネルに代えて類似度に基づく学習枠組みを用いた音楽ジャンル分類",
  },
  // Restructuring Compressed Texts without Explicit Decompression (2011)
  "DBLP:journals/corr/abs-1107-2729": {
    en: "Converting grammar-compressed texts to LZ77, LZ78, RLE and other forms without decompressing",
    ja: "文法圧縮テキストを展開せずに LZ77・LZ78・連長圧縮などへ変換",
  },
  // The Number of Runs in a Ternary Word (2010)
  "DBLP:conf/stringology/BannaiGKMSS10": {
    en: "Observations on the number of runs in ternary words",
    ja: "3 文字アルファベット上の語に含まれる連の数についての観察",
  },
  // Bit-parallel Algorithms for Computing all the Runs in a String (2009)
  "DBLP:conf/stringology/HirashimaBMIS09": {
    en: "Bit-parallel algorithms computing all runs of every binary string up to length 47",
    ja: "ビット並列アルゴリズムで長さ 47 までの全 2 値文字列の連を計算",
  },
  // Linear-Time Text Compression by Longest-First Substitution (2009)
  "DBLP:journals/algorithms/NakamuraIBFTS09": {
    en: "First linear-time algorithms for longest-first-substitution compression, via sparse lazy suffix trees",
    ja: "疎な遅延接尾辞木による、最長優先置換圧縮の初の線形時間アルゴリズム",
  },
  // New Lower Bounds for the Maximum Number of Runs in a String (2008)
  "DBLP:conf/stringology/MatsubaraKIBS08": {
    en: "A new lower bound of 0.944542n on the maximum number of runs",
    ja: "連の最大個数の新たな下界 0.944542n",
  },
  // Parameterized Suffix Arrays for Binary Strings (2008)
  "DBLP:conf/stringology/DeguchiHBIT08": {
    en: "Direct linear-time construction of parameterized suffix and LCP arrays for binary strings",
    ja: "2 値のパラメタ化文字列の接尾辞配列と LCP 配列を直接線形時間で構築",
  },
  // Reachability on Suffix Tree Graphs (2008)
  "DBLP:journals/ijfcs/HigaBIT08": {
    en: "Reachability queries on the DAG of a suffix tree and its suffix links",
    ja: "接尾辞木と接尾辞リンクからなる DAG 上の到達可能性クエリ",
  },
  // Simple Linear-Time Off-Line Text Compression by Longest-First Substitution (2007)
  "DBLP:conf/dcc/NakamuraBIT07": {
    en: "A simpler linear-time longest-first-substitution compression, via sparse lazy suffix trees",
    ja: "疎な遅延接尾辞木による、より簡潔な線形時間の最長優先置換圧縮",
  },
  // Utilizing Evolutionary Information and Gene Expression Data for Estimating Gene Networks with Bayesian Network Models (2005)
  "DBLP:journals/jbcb/TamadaBIKKM05": {
    en: "Gene networks estimated with Bayesian networks, using evolutionary conservation alongside expression data",
    ja: "発現データに進化的保存の情報を加えたベイジアンネットワークによる遺伝子ネットワーク推定",
  },
  // An O(N²) Algorithm for Discovering Optimal Boolean Pattern Pairs (2004)
  "DBLP:journals/tcbb/BannaiHSTNM04": {
    en: "Finding the best Boolean combination of two substring patterns in O(N²) time",
    ja: "2 つの部分文字列パターンの最適なブール結合を O(N²) 時間で発見",
  },
  // Efficiently Finding Regulatory Elements Using Correlation with Gene Expression (2004)
  "DBLP:journals/jbcb/BannaiISTM04": {
    en: "Finding the motif most correlated with gene expression, in linear time with a suffix tree",
    ja: "遺伝子発現と最も相関するモチーフを、接尾辞木を用いて線形時間で発見",
  },
  // Estimating gene networks from gene expression data by combining Bayesian network model with promoter element detection (2003)
  "DBLP:conf/eccb/TamadaKBITKM03": {
    en: "Estimating gene networks and detecting promoter elements together, from expression data and DNA sequences",
    ja: "発現データと DNA 配列から遺伝子ネットワーク推定とプロモーター要素検出を同時に行う",
  },
  // Intrasplicing - Analysis of Long Intron Sequences (2003)
  "DBLP:conf/psb/OttTBNM03": {
    en: "Intrasplicing, a model in which long introns are spliced in parts, examined computationally",
    ja: "長いイントロンが内側から段階的にスプライスされるというモデル intrasplicing の計算機的検証",
  },
  // The Extension of ML with Hypothetical Views for Discovery Science: Formalization and Implementation (2003)
  "DBLP:journals/jflp/SumiiB03": {
    en: "VMλ, a formalization and implementation of VML, ML extended with hypothetical views",
    ja: "仮説ビューで ML を拡張した言語 VML の形式化と実装 VMλ",
  },
  // Extensive feature detection of N-terminal protein sorting signals (2002)
  "DBLP:journals/bioinformatics/BannaiTMNM02": {
    en: "Simple, interpretable rules for predicting N-terminal protein sorting signals",
    ja: "タンパク質の N 末端局在化シグナルを予測する、簡潔で解釈しやすい規則",
  },
  // HypothesisCreator: Concepts for Accelerating the Computational Knowledge Discovery Process (2001)
  "DBLP:journals/etai/BannaiTMM01": {
    en: "The HypothesisCreator project: modeling knowledge discovery as the design and use of views",
    ja: "知識発見をビューの設計・利用として捉える HypothesisCreator プロジェクトのまとめ",
  },
  // Views: Fundamental Building Blocks in the Process of Knowledge Discovery (2001)
  "DBLP:conf/flairs/BannaiTMNM01": {
    en: "Views as the fundamental building blocks of knowledge discovery, with experiments on biological data",
    ja: "ビューを知識発見の基本単位とみなす枠組みと、生物データでの実験",
  },
};
