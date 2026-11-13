// Prints the bijective BWT of a mail address, the form in which
// src/data/profile.ts keeps it, so the address is never whole anywhere in
// this public repository:
//
//   node scripts/encode-email.mjs someone@example.org
import { bbwt, inverseBbwt } from '../src/lib/bbwt.ts';

const [address] = process.argv.slice(2);
if (!address) {
  console.error('usage: node scripts/encode-email.mjs <address>');
  process.exit(1);
}

const encoded = bbwt(address);
if (inverseBbwt(encoded) !== address) throw new Error('the inverse did not give the address back');
console.log(encoded);
