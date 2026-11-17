/**
 * Committees served on, shown on the CV page: one entry per
 * event and year, in any order. The page groups them by role and, within a
 * role, writes each event once with its years: "CPM 2025, 2022 (co-chair)".
 *
 *   { role: "pc", event: "SPIRE", year: 2024 },
 *   { role: "pc", event: "CPM", year: 2022, chair: "co-chair", url: "https://…" },
 *   { role: "steering", event: "SPIRE", year: 2022, to: 2026 },  // to omitted: still serving
 */
export interface Service {
  /** Steering committee, organizing committee, or program committee. */
  role: "steering" | "organizing" | "pc";
  /** The event's short name, as it is known: "SPIRE", "CPM", "ESA Track B". */
  event: string;
  year: number;
  /** For a standing committee: the last year, or omitted while still serving. */
  to?: number;
  /** That year's conference site, where one is still up. */
  url?: string;
  /** Chaired the program committee that year, alone or with others. */
  chair?: "chair" | "co-chair";
}

// From EasyChair's list of roles, the author's own records, REINS (reins.tmd.ac.jp) and the front
// matter of the proceedings (DS 2010, SPIRE 2016). No url where no site was
// found; DS's are the joint ALT/DS pages where DS has none of its own, and
// PAKDD's are pakdd.org's archived copies.
export const SERVICE: Service[] = [
  { role: "steering", event: "CPM", year: 2024 },
  { role: "organizing", event: "CPM", year: 2024, url: "https://cpm2024.github.io/" },
  { role: "organizing", event: "ISAAC", year: 2021, url: "https://tcs.inf.kyushu-u.ac.jp/isaac2021/" },
  { role: "organizing", event: "SPIRE", year: 2016, url: "https://sites.google.com/site/spire2016jp/home" },
  { role: "pc", event: "SPIRE", year: 2026, url: "https://sites.google.com/view/spire-2026/" },
  { role: "pc", event: "ESA Track S", year: 2026, url: "https://algo-conference.org/2026/esa/" },
  { role: "pc", event: "ESA Track A", year: 2025, url: "https://algo-conference.org/2025/esa/" },
  { role: "pc", event: "CPM", year: 2025, url: "https://cpm2025.pangenome.eu/" },
  { role: "pc", event: "SEA", year: 2023, url: "https://sea2023.cs.upc.edu/" },
  { role: "pc", event: "CPM", year: 2023 },
  { role: "pc", event: "CPM", year: 2022, url: "https://www.stringology.org/event/CPM2022/", chair: "co-chair" },
  { role: "pc", event: "SPIRE", year: 2022, url: "http://spire2022.inf.udec.cl/" },
  { role: "pc", event: "ISAAC", year: 2022, url: "http://isa.hanyang.ac.kr/isaac2022/" },
  { role: "pc", event: "WORDS", year: 2021, url: "https://words2021.sciencesconf.org/" },
  { role: "pc", event: "SPIRE", year: 2020 },
  { role: "pc", event: "CPM", year: 2020, url: "https://cpm2020.compute.dtu.dk/" },
  { role: "pc", event: "SPIRE", year: 2019 },
  { role: "pc", event: "IWOCA", year: 2019 },
  { role: "pc", event: "SPIRE", year: 2018 },
  { role: "pc", event: "CPM", year: 2017, url: "https://cpm2017.mimuw.edu.pl/" },
  { role: "pc", event: "IWOCA", year: 2017, url: "https://carmamaths.org/meetings/iwoca/" },
  { role: "pc", event: "DS", year: 2017, url: "https://www.comp.nus.edu.sg/~fstephan/alt/alt2017/" },
  { role: "pc", event: "IWOCA", year: 2016, url: "http://iwoca2016.cs.helsinki.fi/" },
  { role: "pc", event: "SPIRE", year: 2015 },
  { role: "pc", event: "IWOCA", year: 2015 },
  { role: "pc", event: "SPIRE", year: 2014, url: "http://www.decom.ufop.br/Spire-La-Web2014/" },
  { role: "pc", event: "IWOCA", year: 2014 },
  { role: "pc", event: "GIW", year: 2014, url: "https://www.jsbi.org/giw2014/" },
  { role: "pc", event: "IWOCA", year: 2013, url: "https://iwoca2013.univ-rouen.fr/" },
  { role: "pc", event: "DS", year: 2013, url: "https://www-alg.ist.hokudai.ac.jp/~thomas/ALT13/" },
  { role: "pc", event: "CPM", year: 2012, url: "https://www.cs.helsinki.fi/group/cpm2012/" },
  { role: "pc", event: "IWOCA", year: 2012 },
  { role: "pc", event: "DS", year: 2012, url: "https://eric.univ-lyon2.fr/ds-2012/" },
  { role: "pc", event: "PRIB", year: 2012 },
  { role: "pc", event: "IWOCA", year: 2011, url: "https://webhome.cs.uvic.ca/~wendym/IWOCA/IWOCA_2011.html" },
  { role: "pc", event: "DS", year: 2011, url: "https://www-alg.ist.hokudai.ac.jp/~thomas/ALT11/alt11.html" },
  { role: "pc", event: "PAKDD", year: 2014, url: "https://pakdd.org/archive/pakdd2014/" },
  { role: "pc", event: "PAKDD", year: 2013, url: "https://pakdd.org/archive/pakdd2013/" },
  { role: "pc", event: "PAKDD", year: 2012, url: "https://pakdd.org/archive/pakdd2012/" },
  { role: "pc", event: "PAKDD", year: 2011, url: "https://pakdd.org/archive/pakdd2011/" },
  { role: "pc", event: "IWOCA", year: 2010 },
  { role: "pc", event: "DS", year: 2010, url: "https://www-alg.ist.hokudai.ac.jp/~thomas/ALT10/alt10.html" },
  { role: "pc", event: "PAKDD", year: 2010, url: "https://pakdd.org/archive/pakdd2010/" },
  { role: "pc", event: "PAKDD", year: 2008, url: "https://pakdd.org/archive/pakdd2008/" },
];
