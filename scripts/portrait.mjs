// Cuts the square portrait for the sidebar out of a photo, once:
//
//   node scripts/portrait.mjs <photo> [left top size]
//
// left, top and size are in the photo's own pixels. The result is
// src/assets/portrait.jpg, without the photo's metadata (a phone's photo
// carries where it was taken), so only the result belongs in the repository.
import sharp from 'sharp';

const [photo, left = '202', top = '948', size = '806'] = process.argv.slice(2);
if (!photo) {
  console.error('usage: node scripts/portrait.mjs <photo> [left top size]');
  process.exit(1);
}

const region = { left: Number(left), top: Number(top), width: Number(size), height: Number(size) };
await sharp(photo)
  .rotate() // by the camera's orientation tag, before it is dropped
  .extract(region)
  .resize(640, 640)
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(new URL('../src/assets/portrait.jpg', import.meta.url).pathname);
console.log('src/assets/portrait.jpg', region);
