// The bijective Burrows-Wheeler transform and its inverse. The mail address
// is kept as its BBWT (scripts/encode-email.mjs) and inverted in the
// reader's browser, so it is never whole in the repository or the HTML.

/** The Lyndon factorization of `s` (Duval's algorithm): non-increasing Lyndon words. */
function lyndonFactors(s: string): string[] {
  const factors: string[] = [];
  let i = 0;
  while (i < s.length) {
    let j = i + 1;
    let k = i;
    while (j < s.length && s[k] <= s[j]) {
      k = s[k] < s[j] ? i : k + 1;
      j++;
    }
    while (i <= k) {
      factors.push(s.slice(i, i + j - k));
      i += j - k;
    }
  }
  return factors;
}

/** Compares u^ω with v^ω; the first |u| + |v| characters decide it. */
function compareOmega(u: string, v: string): number {
  for (let i = 0; i < u.length + v.length; i++) {
    const a = u[i % u.length];
    const b = v[i % v.length];
    if (a !== b) return a < b ? -1 : 1;
  }
  return 0;
}

/**
 * Every rotation of every Lyndon factor, sorted in ω-order, and the last
 * character of each. Quadratic, which is nothing at the length of an address.
 */
export function bbwt(s: string): string {
  const rotations = lyndonFactors(s).flatMap((w) => [...w].map((_, k) => w.slice(k) + w.slice(0, k)));
  return rotations
    .sort(compareOmega)
    .map((r) => r[r.length - 1])
    .join('');
}

/**
 * The inverse: the stable sort of `b` is a permutation whose cycles, each
 * read from its smallest position, are the Lyndon factors, smallest first.
 */
export function inverseBbwt(b: string): string {
  const order = Array.from({ length: b.length }, (_, i) => i).sort((i, j) => (b[i] < b[j] ? -1 : b[i] > b[j] ? 1 : i - j));
  const seen: boolean[] = new Array(b.length).fill(false);
  const factors: string[] = [];
  for (let i = 0; i < b.length; i++) {
    let factor = '';
    for (let j = i; !seen[j]; ) {
      seen[j] = true;
      j = order[j];
      factor += b[j];
    }
    if (factor) factors.push(factor);
  }
  return factors.reverse().join('');
}
