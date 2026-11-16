import type { Locale } from "../lib/i18n";

/**
 * Research topics, in the order the publication list offers them as filters.
 * Each paper has one to three, in PAPER_TAGS below. Compression takes in
 * computing on compressed strings; indexing, pattern matching; dynamic,
 * strings that change as well as strings read as they come (online).
 */
export const TAGS = {
  compression: { en: "Compression", ja: "圧縮・反復度指標" },
  indexing: { en: "Indexing & pattern matching", ja: "索引・パターン照合" },
  combinatorics: { en: "Combinatorics on words", ja: "文字列の組合せ論" },
  dynamic: { en: "Dynamic & online", ja: "動的・オンライン" },
  bioinformatics: { en: "Bioinformatics & discovery", ja: "バイオインフォマティクス・知識発見" },
} as const satisfies Record<string, Record<Locale, string>>;

export type Tag = keyof typeof TAGS;

/**
 * Each paper's topics, by BibTeX key. As in summaries.ts, one of a paper's
 * keys is enough: lib/bibtex.ts gives the tags to every version with the same
 * title.
 */
export const PAPER_TAGS: Record<string, Tag[]> = {
  // Bijective BWT Based Compression Schemes (2026)
  "DBLP:journals/mst/BadkobehBIK26": ["compression", "combinatorics"],
  // Computing NP-hard Repetitiveness Measures via MAX-SAT (2026)
  "DBLP:journals/talg/BannaiGIKKNS26": ["compression"],
  // Grammar index by induced suffix sorting (2026)
  "DBLP:journals/tcs/AkagiKNIBT26": ["compression", "indexing"],
  // NP-Completeness on the Length of Double-Arrays and the Sparse Matrix Problem with at Least Logarithmic Alphabets/Widths (2026)
  "DBLP:journals/mst/BannaiGKK26": ["indexing"],
  // On Occurrence-Preserving Morphisms (2026)
  "DBLP:conf/cpm/KishiGUB26": ["combinatorics"],
  // Online Computation of Palindromes and Suffix Trees on Tries (2026)
  "DBLP:journals/corr/abs-2601-16485": ["indexing", "combinatorics", "dynamic"],
  // Optimal Dictionary-Based Compression with Answer Set Programming: Encodings and Empirical Analysis (2026)
  "DBLP:conf/kr/BanbaraBHKMN26": ["compression"],
  // Sensitivity of Repetitiveness Measures to String Reversal (2026)
  "DBLP:conf/cpm/BannaiFGINPU26": ["compression", "combinatorics"],
  // String Representation in Suffixient Set Size Space (2026)
  "DBLP:journals/corr/abs-2604-04377": ["compression", "indexing"],
  // The Smallest String Attractors of Fibonacci and Period-Doubling Words (2026)
  "DBLP:conf/cpm/BanbaraBGKMO26": ["compression", "combinatorics"],
  // A Survey of the Bijective Burrows-Wheeler Transform (2025)
  "DBLP:conf/birthday/BannaiKL25": ["compression", "combinatorics"],
  // Computing maximal palindromes in non-standard matching models (2025)
  "DBLP:journals/iandc/MienoFNIBT25": ["indexing", "combinatorics"],
  // Counting Distinct (Non-)crossing Substrings (2025)
  "DBLP:conf/spire/UmezakiSKNIB25": ["combinatorics"],
  // Nyldon Factorization of Thue-Morse Words and Fibonacci Words (2025)
  "DBLP:conf/spire/KishiKNIB25": ["combinatorics"],
  // On the Compressiveness of the Burrows-Wheeler Transform (2025)
  "DBLP:conf/cpm/BannaiI025": ["compression", "combinatorics"],
  // Text Indexing for Simple Regular Expressions (2025)
  "DBLP:conf/cpm/BannaiBGL0PST25": ["indexing"],
  // Computing Longest Lyndon Subsequences and Longest Common Lyndon Subsequences (2024)
  "DBLP:journals/algorithmica/BannaiIKKP24": ["combinatorics"],
  // Constructing and indexing the bijective and extended Burrows-Wheeler transform (2024)
  "DBLP:journals/iandc/BannaiKKP24": ["compression", "indexing"],
  // Edit and Alphabet-Ordering Sensitivity of Lex-Parse (2024)
  "DBLP:conf/mfcs/0001KFIB24": ["compression", "combinatorics"],
  // Faster space-efficient STR-IC-LCS computation (2024)
  "DBLP:journals/tcs/YonemotoNIB24": ["indexing"],
  // Height-Bounded Lempel-Ziv Encodings (2024)
  "DBLP:conf/esa/BannaiFHMP24": ["compression"],
  // Maintaining the Size of LZ77 on Semi-Dynamic Strings (2024)
  "DBLP:conf/cpm/BannaiCR24": ["compression", "dynamic"],
  // NP-Completeness for the Space-Optimality of Double-Array Tries (2024)
  "DBLP:journals/corr/abs-2403-04951": ["indexing"],
  // On the Hardness of Smallest RLSLPs and Collage Systems (2024)
  "DBLP:conf/dcc/KawamotoIKB24": ["compression"],
  // On the Number of Non-equivalent Parameterized Squares in a String (2024)
  "DBLP:conf/spire/HamaiTNIB24": ["combinatorics"],
  // Pfp-fm: an accelerated FM-index (2024)
  "DBLP:journals/almob/HongOKBBG24": ["indexing", "bioinformatics"],
  // Acceleration of FM-Index Queries Through Prefix-Free Parsing (2023)
  "DBLP:conf/wabi/HongOKBBG23": ["indexing", "bioinformatics"],
  // Linear-time computation of DAWGs, symmetric indexing structures, and MAWs for integer alphabets (2023)
  "DBLP:journals/tcs/FujishigeTIBT23": ["indexing"],
  // Linear-Time Computation of Generalized Minimal Absent Words for Multiple Strings (2023)
  "DBLP:conf/spire/OkabeMNIB23": ["combinatorics"],
  // Longest bordered and periodic subsequences (2023)
  "DBLP:journals/ipl/BannaiIK23": ["combinatorics"],
  // Lyndon Arrays in Sublinear Time (2023)
  "DBLP:conf/esa/BannaiE23": ["combinatorics"],
  // Optimal LZ-End Parsing Is Hard (2023)
  "DBLP:conf/cpm/BannaiFKNSU23": ["compression"],
  // Sliding suffix trees simplified (2023)
  "DBLP:journals/corr/abs-2307-01412": ["indexing", "dynamic"],
  // Space-Efficient STR-IC-LCS Computation (2023)
  "DBLP:conf/sofsem/YonemotoNIB23": ["indexing"],
  // c-trie++: A dynamic trie tailored for fast prefix searches (2022)
  "DBLP:journals/iandc/TsurutaKKNIBT22": ["indexing", "dynamic"],
  // Combinatorics of minimal absent words for a sliding window (2022)
  "DBLP:journals/tcs/AkagiKMNIBT22": ["combinatorics", "dynamic"],
  // Computing Longest (Common) Lyndon Subsequences (2022)
  "DBLP:conf/iwoca/BannaiIKKP22": ["combinatorics"],
  // Computing maximal generalized palindromes (2022)
  "DBLP:journals/corr/abs-2210-02067": ["indexing", "combinatorics"],
  // Computing Minimal Unique Substrings for a Sliding Window (2022)
  "DBLP:journals/algorithmica/MienoFNIBT22": ["combinatorics", "dynamic"],
  // Factorizing Strings into Repetitions (2022)
  "DBLP:journals/mst/InoueMNIBT22": ["combinatorics"],
  // Longest (Sub-)Periodic Subsequence (2022)
  "DBLP:journals/corr/abs-2202-07189": ["combinatorics"],
  // Online Algorithms for Finding Distinct Substrings with Length and Multiple Prefix and Suffix Conditions (2022)
  "DBLP:conf/spire/LeonardIBM22": ["indexing", "dynamic"],
  // Order-preserving pattern matching indeterminate strings (2022)
  "DBLP:journals/iandc/RussoCHBF22": ["indexing"],
  // Palindromic trees for a sliding window and its applications (2022)
  "DBLP:journals/ipl/MienoWNIBT22": ["indexing", "dynamic"],
  // Parameterized DAWGs: Efficient constructions and bidirectional pattern searches (2022)
  "DBLP:journals/tcs/NakashimaFHNYIB22": ["indexing"],
  // A Separation of γ and b via Thue-Morse Words (2021)
  "DBLP:conf/spire/BannaiFIKMN21": ["compression", "combinatorics"],
  // Compressed Communication Complexity of Hamming Distance (2021)
  "DBLP:journals/algorithms/MitsuyaNIBT21": ["compression"],
  // Computing longest palindromic substring after single-character or block-wise edits (2021)
  "DBLP:journals/tcs/FunakoshiNIBT21": ["combinatorics", "dynamic"],
  // Constructing the Bijective and the Extended Burrows-Wheeler Transform in Linear Time (2021)
  "DBLP:conf/cpm/BannaiKKP21": ["compression", "indexing"],
  // Efficiently computing runs on a trie (2021)
  "DBLP:journals/tcs/SugaharaNIBT21": ["combinatorics"],
  // Longest Common Rollercoasters (2021)
  "DBLP:conf/spire/FujitaNIBT21": ["combinatorics"],
  // Longest previous overlapping factor array (2021)
  "DBLP:journals/ipl/BannaiIM21": ["combinatorics"],
  // Repetitions in Strings: A "Constant" Problem (Invited Talk) (2021)
  "DBLP:conf/cpm/Bannai21": ["combinatorics"],
  // The Parameterized Suffix Tray (2021)
  "DBLP:conf/ciac/FujisatoNIBT21": ["indexing"],
  // The Smallest Grammar Problem Revisited (2021)
  "DBLP:journals/tit/BannaiHHIJLR21": ["compression"],
  // Computing Palindromic Trees for a Sliding Window and Its Applications (2020)
  "DBLP:journals/corr/abs-2006-02134": ["indexing", "dynamic"],
  // DAWGs for Parameterized Matching: Online Construction and Related Indexing Structures (2020)
  "DBLP:conf/cpm/NakashimaFHNYIB20": ["indexing", "dynamic"],
  // Detecting k-(Sub-)Cadences and Equidistant Subsequence Occurrences (2020)
  "DBLP:conf/cpm/FunakoshiNIBTS20": ["indexing"],
  // Dynamic index and LZ factorization in compressed space (2020)
  "DBLP:journals/dam/NishimotoIIBT20": ["compression", "indexing", "dynamic"],
  // Fast Algorithms for the Shortest Unique Palindromic Substring Problem on Run-Length Encoded Strings (2020)
  "DBLP:journals/mst/WatanabeNIBT20": ["compression"],
  // Faster STR-EC-LCS Computation (2020)
  "DBLP:conf/sofsem/YamadaNIBT20": ["indexing"],
  // Finding all maximal perfect haplotype blocks in linear time (2020)
  "DBLP:journals/almob/AlankoBCPS20": ["bioinformatics"],
  // Grammar-compressed Self-index with Lyndon Words (2020)
  "DBLP:journals/corr/abs-2004-05309": ["compression", "indexing"],
  // Longest Square Subsequence Problem Revisited (2020)
  "DBLP:conf/spire/InoueIB20": ["combinatorics"],
  // Lyndon Words, the Three Squares Lemma, and Primitive Squares (2020)
  "DBLP:conf/spire/BannaiMN20": ["combinatorics"],
  // Minimal Unique Substrings and Minimal Absent Words in a Sliding Window (2020)
  "DBLP:conf/sofsem/MienoKAFNIBT20": ["combinatorics", "dynamic"],
  // More Time-Space Tradeoffs for Finding a Shortest Unique Substring (2020)
  "DBLP:journals/algorithms/BannaiGHPR20": ["indexing"],
  // On Repetitiveness Measures of Thue-Morse Words (2020)
  "DBLP:conf/spire/KutsukakeMNIBT20": ["compression", "combinatorics"],
  // Practical Grammar Compression Based on Maximal Repeats (2020)
  "DBLP:journals/algorithms/FuruyaTNIBK20": ["compression"],
  // Refining the r-index (2020)
  "DBLP:journals/tcs/BannaiGI20": ["compression", "indexing"],
  // Space-efficient algorithms for computing minimal/shortest unique substrings (2020)
  "DBLP:journals/tcs/MienoKNIBT20": ["indexing"],
  // Towards Efficient Interactive Computation of Dynamic Time Warping Distance (2020)
  "DBLP:conf/spire/NishiNIBT20": ["indexing", "dynamic"],
  // k-Abelian Pattern Matching: Revisited, Corrected, and Extended (2019)
  "DBLP:conf/stringology/BadkobehBCIIS19": ["indexing"],
  // An Improved Data Structure for Left-Right Maximal Generic Words Problem (2019)
  "DBLP:conf/isaac/FujishigeNIBT19": ["indexing"],
  // Compact Data Structures for Shortest Unique Substring Queries (2019)
  "DBLP:conf/spire/MienoKNIBT19": ["indexing"],
  // Computing Maximal Palindromes and Distinct Palindromes in a Trie (2019)
  "DBLP:conf/stringology/FunakoshiNIBT19": ["combinatorics"],
  // Computing Runs on a Trie (2019)
  "DBLP:conf/cpm/SugaharaNIBT19": ["combinatorics"],
  // Constructing the Bijective BWT (2019)
  "DBLP:journals/corr/abs-1911-06985": ["compression", "indexing"],
  // Direct Linear Time Construction of Parameterized Suffix and LCP Arrays for Constant Alphabets (2019)
  "DBLP:conf/spire/FujisatoNIBT19": ["indexing"],
  // Dynamic Packed Compact Tries Revisited (2019)
  "DBLP:journals/corr/abs-1904-07467": ["indexing", "dynamic"],
  // Faster Queries for Longest Substring Palindrome After Block Edit (2019)
  "DBLP:conf/cpm/FunakoshiNIBT19": ["combinatorics", "dynamic"],
  // Indexing the Bijective BWT (2019)
  "DBLP:conf/cpm/BannaiKKP19": ["compression", "indexing"],
  // MR-RePair: Grammar Compression Based on Maximal Repeats (2019)
  "DBLP:conf/dcc/FuruyaTNIBK19": ["compression"],
  // On Longest Common Property Preserved Substring Queries (2019)
  "DBLP:conf/spire/KaiNIBTK19": ["indexing"],
  // On the Size of Overlapping Lempel-Ziv and Lyndon Factorizations (2019)
  "DBLP:conf/cpm/UrabeNIBT19": ["compression", "combinatorics"],
  // On the size of the smallest alphabet for Lyndon trees (2019)
  "DBLP:journals/tcs/NakashimaTIBT19": ["combinatorics"],
  // Shortest Unique Palindromic Substring Queries on Run-Length Encoded Strings (2019)
  "DBLP:conf/iwoca/WatanabeNIBT19": ["compression"],
  // The Parameterized Position Heap of a Trie (2019)
  "DBLP:conf/ciac/FujisatoNIBT19": ["indexing"],
  // Algorithms and combinatorial properties on shortest unique palindromic substrings (2018)
  "DBLP:journals/jda/InoueNMIBT18": ["indexing", "combinatorics"],
  // Block Palindromes: A New Generalization of Palindromes (2018)
  "DBLP:conf/spire/GotoIBI18": ["combinatorics"],
  // Computing longest common square subsequences (2018)
  "DBLP:conf/cpm/InoueIHBT18": ["combinatorics"],
  // Diverse Palindromic Factorization is NP-Complete (2018)
  "DBLP:journals/ijfcs/BannaiGIKKPS18": ["combinatorics"],
  // Faster Online Elastic Degenerate String Matching (2018)
  "DBLP:conf/cpm/AoyamaNIIBT18": ["indexing", "dynamic"],
  // Longest Lyndon Substring After Edit (2018)
  "DBLP:conf/cpm/UrabeNIBT18": ["combinatorics", "dynamic"],
  // Longest substring palindrome after edit (2018)
  "DBLP:conf/cpm/FunakoshiNIBT18": ["combinatorics", "dynamic"],
  // Lyndon Factorization of Grammar Compressed Texts Revisited (2018)
  "DBLP:conf/cpm/FuruyaNIIBT18": ["compression", "combinatorics"],
  // O(n log n)-time Text Compression by LZ-style Longest First Substitution (2018)
  "DBLP:conf/stringology/NishiNIBT18": ["compression"],
  // Online LZ77 Parsing and Matching Statistics with RLBWTs (2018)
  "DBLP:conf/cpm/BannaiGI18": ["compression", "indexing", "dynamic"],
  // Recovering, Counting and Enumerating Strings from Forward and Backward Suffix Arrays (2018)
  "DBLP:conf/spire/KuharaNIBT18": ["combinatorics"],
  // Right-to-left Online Construction of Parameterized Position Heaps (2018)
  "DBLP:conf/stringology/FujisatoNIBT18": ["indexing", "dynamic"],
  // Almost Linear Time Computation of Maximal Repetitions in Run Length Encoded Strings (2017)
  "DBLP:conf/isaac/FujishigeNIBT17": ["compression", "combinatorics"],
  // Computing Abelian regularities on RLE strings (2017)
  "DBLP:journals/corr/SugimotoNIBT17": ["compression", "combinatorics"],
  // Computing Abelian String Regularities Based on RLE (2017)
  "DBLP:conf/iwoca/SugimotoNIBT17": ["compression", "combinatorics"],
  // Computing All Distinct Squares in Linear Time for Integer Alphabets (2017)
  "DBLP:conf/cpm/BannaiIK17": ["combinatorics"],
  // Efficient Computation of Substring Equivalence Classes with Suffix Arrays (2017)
  "DBLP:journals/algorithmica/NarisawaHIBT17": ["indexing"],
  // Faster STR-IC-LCS Computation via RLE (2017)
  "DBLP:conf/cpm/KuboiFIBT17": ["compression", "indexing"],
  // Inferring strings from Lyndon factorization (2017)
  "DBLP:journals/tcs/NakashimaOIIBT17": ["combinatorics"],
  // Longest Common Subsequence in at Least k Length Order-Isomorphic Substrings (2017)
  "DBLP:conf/sofsem/UekiDKMNYBIS17": ["indexing"],
  // On Reverse Engineering the Lyndon Tree (2017)
  "DBLP:conf/stringology/NakashimaTIBT17": ["combinatorics"],
  // Order Preserving Pattern Matching on Trees and DAGs (2017)
  "DBLP:conf/spire/NakamuraIBT17": ["indexing"],
  // Shortest Unique Palindromic Substring Queries in Optimal Time (2017)
  "DBLP:conf/iwoca/NakashimaIMIBT17": ["indexing", "combinatorics"],
  // Small-space encoding LCE data structure with constant-time queries (2017)
  "DBLP:journals/corr/TanimuraNBIT17": ["indexing"],
  // Small-Space LCE Data Structure with Constant-Time Queries (2017)
  "DBLP:conf/mfcs/TanimuraNBIT17": ["indexing"],
  // The "Runs" Theorem (2017)
  "DBLP:journals/siamcomp/BannaiIINTT17": ["combinatorics"],
  // Tight Bounds on the Maximum Number of Shortest Unique Substrings (2017)
  "DBLP:conf/cpm/MienoIBT17": ["combinatorics"],
  // Closed factorization (2016)
  "DBLP:journals/dam/BadkobehBGIIIPS16": ["combinatorics"],
  // Computing DAWGs and Minimal Absent Words in Linear Time for Integer Alphabets (2016)
  "DBLP:conf/mfcs/FujishigeTIBT16": ["indexing"],
  // Computing Smallest and Largest Repetition Factorizations in O(n log n) Time (2016)
  "DBLP:conf/stringology/InoueMNIBT16": ["combinatorics"],
  // Deterministic Sub-Linear Space LCE Data Structures With Efficient Construction (2016)
  "DBLP:conf/cpm/TanimuraIBIPT16": ["indexing"],
  // Factorizing a String into Squares in Linear Time (2016)
  "DBLP:conf/cpm/MatsuokaIBTM16": ["combinatorics"],
  // Faster Lyndon factorization algorithms for SLP and LZ78 compressed text (2016)
  "DBLP:journals/tcs/INIBT16": ["compression", "combinatorics"],
  // Finding Gapped Palindromes Online (2016)
  "DBLP:conf/iwoca/FujishigeNIBT16": ["combinatorics", "dynamic"],
  // Fully Dynamic Data Structure for LCE Queries in Compressed Space (2016)
  "DBLP:conf/mfcs/NishimotoIIBT16": ["compression", "indexing", "dynamic"],
  // Generalized pattern matching and periodicity under substring consistent equivalence relations (2016)
  "DBLP:journals/tcs/MatsuokaAIBT16": ["indexing", "combinatorics"],
  // Grammar Compression (2016)
  "DBLP:reference/algo/Bannai16": ["compression"],
  // Shortest Unique Substring Queries on Run-Length Encoded Strings (2016)
  "DBLP:conf/mfcs/MienoIBT16": ["compression"],
  // Tight bound on the maximum number of shortest unique substrings (2016)
  "DBLP:journals/corr/MienoIBT16": ["combinatorics"],
  // A Faster Algorithm for Computing Maximal \alpha -gapped Repeats in a String (2015)
  "DBLP:conf/spire/TanimuraFIIBT15": ["combinatorics"],
  // A new characterization of maximal repetitions by Lyndon trees (2015)
  "DBLP:conf/soda/BannaiIINTT15": ["combinatorics"],
  // An Opportunistic Text Indexing Structure Based on Run Length Encoding (2015)
  "DBLP:conf/ciac/TamakoshiGIBT15": ["compression", "indexing"],
  // Compressed automata for dictionary matching (2015)
  "DBLP:journals/tcs/INIBT15": ["compression", "indexing"],
  // Computing Left-Right Maximal Generic Words (2015)
  "DBLP:conf/stringology/NishimotoNIBT15": ["indexing"],
  // Constructing LZ78 tries and position heaps in linear time for large alphabets (2015)
  "DBLP:journals/ipl/NakashimaIIBT15": ["compression", "indexing"],
  // Detecting regularities on grammar-compressed strings (2015)
  "DBLP:journals/iandc/IMSIBTNS15": ["compression", "combinatorics"],
  // Dynamic index, LZ factorization, and LCE queries in compressed space (2015)
  "DBLP:journals/corr/NishimotoIIBT15": ["compression", "indexing", "dynamic"],
  // Efficient Algorithms for Longest Closed Factor Array (2015)
  "DBLP:conf/spire/BannaiIKLRRSW15": ["combinatorics"],
  // Inferring Strings from Full Abelian Periods (2015)
  "DBLP:conf/isaac/NishidaIIBT15": ["combinatorics"],
  // LZD Factorization: Simple and Practical Online Grammar Compression with Variable-to-Fixed Encoding (2015)
  "DBLP:conf/cpm/GotoBIT15": ["compression", "dynamic"],
  // Semi-dynamic Compact Index for Short Patterns and Succinct van Emde Boas Tree (2015)
  "DBLP:conf/cpm/MatsuokaIIBT15": ["indexing", "dynamic"],
  // Computing Abelian Covers and Abelian Runs (2014)
  "DBLP:conf/stringology/MatsudaIBT14": ["combinatorics"],
  // Computing Palindromic Factorizations and Palindromic Covers On-line (2014)
  "DBLP:conf/cpm/ISIBT14": ["combinatorics", "dynamic"],
  // Faster Compact On-Line Lempel-Ziv Factorization (2014)
  "DBLP:conf/stacs/YamamotoIBIT14": ["compression", "dynamic"],
  // Inferring strings from suffix trees and links on a binary alphabet (2014)
  "DBLP:journals/dam/IIBT14": ["combinatorics"],
  // Shortest Unique Substrings Queries in Optimal Time (2014)
  "DBLP:conf/sofsem/TsurutaIBT14": ["indexing"],
  // Space Efficient Linear Time Lempel-Ziv Factorization for Small Alphabets (2014)
  "DBLP:conf/dcc/GotoB14": ["compression"],
  // Computing Convolution on Grammar-Compressed Text (2013)
  "DBLP:conf/dcc/TanakaIIBT13": ["compression"],
  // Computing Reversed Lempel-Ziv Factorization Online (2013)
  "DBLP:conf/stringology/SugimotoIIBT13": ["compression", "dynamic"],
  // Converting SLP to LZ78 in almost Linear Time (2013)
  "DBLP:conf/cpm/BannaiGIT13": ["compression"],
  // Efficient Lyndon Factorization of Grammar Compressed Text (2013)
  "DBLP:conf/cpm/INIBT13": ["compression", "combinatorics"],
  // Fast q-gram mining on SLP compressed strings (2013)
  "DBLP:journals/jda/GotoBIT13": ["compression"],
  // From Run Length Encoding to LZ78 and Back Again (2013)
  "DBLP:conf/dcc/TamakoshiIIBT13": ["compression"],
  // Permuted Pattern Matching on Multi-track Strings (2013)
  "DBLP:conf/sofsem/KatsuraNSBI13": ["indexing"],
  // Simpler and Faster Lempel Ziv Factorization (2013)
  "DBLP:conf/dcc/GotoB13": ["compression"],
  // Space Efficient Linear Time Lempel-Ziv Factorization on Constant~Size~Alphabets (2013)
  "DBLP:journals/corr/GotoB13": ["compression"],
  // An efficient algorithm to test square-freeness of strings compressed by straight-line programs (2012)
  "DBLP:journals/ipl/BannaiGIILL12": ["compression", "combinatorics"],
  // Computing q-Gram Non-overlapping Frequencies on SLP Compressed Texts (2012)
  "DBLP:conf/sofsem/GotoBIT12": ["compression"],
  // Eager XPath Evaluation over XML Streams (2012)
  "DBLP:conf/spire/HagioOBT12": ["indexing", "dynamic"],
  // Efficient LZ78 Factorization of Grammar Compressed Text (2012)
  "DBLP:conf/spire/BannaiIT12": ["compression"],
  // Finding Characteristic Substrings from Compressed Texts (2012)
  "DBLP:journals/ijfcs/InenagaB12": ["compression", "bioinformatics"],
  // General Algorithms for Mining Closed Flexible Patterns under Various Equivalence Relations (2012)
  "DBLP:conf/pkdd/IEBT12": ["bioinformatics"],
  // Polyphonic Music Classification on Symbolic Data Using Dissimilarity Functions (2012)
  "DBLP:conf/ismir/AnanHBTS12": ["bioinformatics"],
  // Speeding Up q-Gram Mining on Grammar-Based Compressed Texts (2012)
  "DBLP:conf/cpm/GotoBIT12": ["compression"],
  // The Position Heap of a Trie (2012)
  "DBLP:conf/spire/NakashimaIIBT12": ["indexing"],
  // Time and Space Efficient Lempel-Ziv Factorization based on Run Length Encoding (2012)
  "DBLP:journals/corr/abs-1204-5524": ["compression"],
  // Computing Longest Common Substring/Subsequence of Non-linear Texts (2011)
  "DBLP:conf/stringology/ShimohiraIBT11": ["indexing"],
  // Computing q-gram Frequencies on Collage Systems (2011)
  "DBLP:journals/corr/abs-1107-3019": ["compression"],
  // Efficient Eager XPath Filtering over XML Streams (2011)
  "DBLP:conf/stringology/HagioOBT11": ["indexing", "dynamic"],
  // Faster Subsequence and Don't-Care Pattern Matching on Compressed Texts (2011)
  "DBLP:conf/cpm/YamamotoBIT11": ["compression", "indexing"],
  // Music Genre Classification using Similarity Functions (2011)
  "DBLP:conf/ismir/AnanHBT11": ["bioinformatics"],
  // Restructuring Compressed Texts without Explicit Decompression (2011)
  "DBLP:journals/corr/abs-1107-2729": ["compression"],
  // Verifying and enumerating parameterized border arrays (2011)
  "DBLP:journals/tcs/IIBT11": ["combinatorics"],
  // Counting and Verifying Maximal Palindromes (2010)
  "DBLP:conf/spire/IIBT10": ["combinatorics"],
  // Sparse Substring Pattern Set Discovery Using Linear Programming Boosting (2010)
  "DBLP:conf/dis/KashiharaHBT10": ["bioinformatics"],
  // The Number of Runs in a Ternary Word (2010)
  "DBLP:conf/stringology/BannaiGKMSS10": ["combinatorics"],
  // Verifying a Parameterized Border Array in O(n^1.5) Time (2010)
  "DBLP:conf/cpm/IIBT10": ["combinatorics"],
  // A Series of Run-Rich Strings (2009)
  "DBLP:conf/lata/MatsubaraKBS09": ["combinatorics"],
  // Better Decomposition Heuristics for the Maximum-Weight Connected Graph Problem Using Betweenness Centrality (2009)
  "DBLP:conf/dis/YamamotoBNM09": ["bioinformatics"],
  // Bit-parallel Algorithms for Computing all the Runs in a String (2009)
  "DBLP:conf/stringology/HirashimaBMIS09": ["combinatorics"],
  // Counting Parameterized Border Arrays for a Binary Alphabet (2009)
  "DBLP:conf/lata/IIBT09": ["combinatorics"],
  // Lightweight Parameterized Suffix Array Construction (2009)
  "DBLP:conf/iwoca/TomohiroDBIT09": ["indexing"],
  // Linear-Time Text Compression by Longest-First Substitution (2009)
  "DBLP:journals/algorithms/NakamuraIBFTS09": ["compression"],
  // New Lower Bounds for the Maximum Number of Runs in a String (2008)
  "DBLP:conf/stringology/MatsubaraKIBS08": ["combinatorics"],
  // Parameterized Suffix Arrays for Binary Strings (2008)
  "DBLP:conf/stringology/DeguchiHBIT08": ["indexing"],
  // Reachability on Suffix Tree Graphs (2008)
  "DBLP:journals/ijfcs/HigaBIT08": ["indexing"],
  // String Kernels Based on Variable-Length-Don't-Care Patterns (2008)
  "DBLP:conf/dis/NarisawaBHIT08": ["bioinformatics"],
  // Algorithms for String Pattern Discovery (2007)
  "DBLP:conf/mdai/Bannai07": ["bioinformatics"],
  // On the complexity of deriving position specific score matrices from positive and negative sequences (2007)
  "DBLP:journals/dam/AkutsuBMO07": ["bioinformatics"],
  // Simple Linear-Time Off-Line Text Compression by Longest-First Substitution (2007)
  "DBLP:conf/dcc/NakamuraBIT07": ["compression"],
  // Unsupervised Spam Detection Based on String Alienness Measures (2007)
  "DBLP:conf/dis/NarisawaBHT07": ["bioinformatics"],
  // A New Family of String Classifiers Based on Local Relatedness (2006)
  "DBLP:conf/dis/HigaIBT06": ["bioinformatics"],
  // Estimating Gene Networks from Expression Data and Binding Location Data via Boolean Networks (2005)
  "DBLP:conf/iccsa/HiroseNTBIM05": ["bioinformatics"],
  // Practical Algorithms for Pattern Based Linear Regression (2005)
  "DBLP:conf/dis/BannaiHIT05": ["bioinformatics"],
  // Utilizing Evolutionary Information and Gene Expression Data for Estimating Gene Networks with Bayesian Network Models (2005)
  "DBLP:journals/jbcb/TamadaBIKKM05": ["bioinformatics"],
  // An O(N²) Algorithm for Discovering Optimal Boolean Pattern Pairs (2004)
  "DBLP:journals/tcbb/BannaiHSTNM04": ["bioinformatics"],
  // Efficiently Finding Regulatory Elements Using Correlation with Gene Expression (2004)
  "DBLP:journals/jbcb/BannaiISTM04": ["bioinformatics"],
  // Finding Optimal Pairs of Cooperative and Competing Patterns with Bounded Distance (2004)
  "DBLP:conf/dis/InenagaBHSTNM04": ["bioinformatics"],
  // Finding Optimal Pairs of Patterns (2004)
  "DBLP:conf/wabi/BannaiHSTNM04": ["bioinformatics"],
  // Discovering Most Classificatory Patterns for Very Expressive Pattern Classes (2003)
  "DBLP:conf/dis/TakedaIBSA03": ["bioinformatics"],
  // Estimating gene networks from gene expression data by combining Bayesian network model with promoter element detection (2003)
  "DBLP:conf/eccb/TamadaKBITKM03": ["bioinformatics"],
  // Inferring Strings from Graphs and Arrays (2003)
  "DBLP:conf/mfcs/BannaiIST03": ["combinatorics"],
  // Intrasplicing - Analysis of Long Intron Sequences (2003)
  "DBLP:conf/psb/OttTBNM03": ["bioinformatics"],
  // The Extension of ML with Hypothetical Views for Discovery Science: Formalization and Implementation (2003)
  "DBLP:journals/jflp/SumiiB03": ["bioinformatics"],
  // Discovering Best Variable-Length-Don't-Care Patterns (2002)
  "DBLP:conf/dis/InenagaBSTA02": ["bioinformatics"],
  // Extensive feature detection of N-terminal protein sorting signals (2002)
  "DBLP:journals/bioinformatics/BannaiTMNM02": ["bioinformatics"],
  // Fast algorithm for extracting multiple unordered short motifs using bit operations (2002)
  "DBLP:journals/isci/MaruyamaBTKM02": ["bioinformatics"],
  // Foundations of Designing Computational Knowledge Discovery Processes (2002)
  "DBLP:conf/dsp/TamadaBMM02": ["bioinformatics"],
  // On the Complexity of Deriving Position Specific Score Matrices from Examples (2002)
  "DBLP:conf/cpm/AkutsuBMO02": ["bioinformatics"],
  // Space-Economical Construction of Index Structures for All Suffixes of a String (2002)
  "DBLP:conf/mfcs/InenagaSTBA02": ["indexing"],
  // VM lambda: A Functional Calculusfor Scientific Discovery (2002)
  "DBLP:conf/flops/SumiiB02": ["bioinformatics"],
  // HypothesisCreator: Concepts for Accelerating the Computational Knowledge Discovery Process (2001)
  "DBLP:journals/etai/BannaiTMM01": ["bioinformatics"],
  // Views: Fundamental Building Blocks in the Process of Knowledge Discovery (2001)
  "DBLP:conf/flairs/BannaiTMNM01": ["bioinformatics"],
  // VML: A View Modeling Language for Computational Knowledge Discovery (2001)
  "DBLP:conf/dis/BannaiTMM01": ["bioinformatics"],
  // A Definition of Discovery in Terms of Generalized Descriptional Complexity (1999)
  "DBLP:conf/dis/BannaiM98": ["bioinformatics"],
};
