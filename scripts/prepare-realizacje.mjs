// Przygotowuje zdjęcia i filmy realizacji do strony (kopie robocze; oryginały nie są zmieniane).
// Źródło: src/assets/images/nowe zdjecia i filmyu/  → src/assets/images/realizacje/ i public/video/
// Uruchom: node scripts/prepare-realizacje.mjs  (wymaga ffmpeg w PATH dla filmów)
import sharp from 'sharp';
import { mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const SRC = 'src/assets/images/nowe zdjecia i filmyu/';
const OUT = 'src/assets/images/realizacje/';
const VOUT = 'public/video/';
mkdirSync(OUT, { recursive: true });
mkdirSync(VOUT, { recursive: true });

// 40 zdjęć zaakceptowanych do galerii + 29156 (strona mycia dachów, grupa R18 potwierdzona)
const photos = [
  '28923', '28922', '28938', '28934', '28884', '28898', '28904', '28969', '28967', '28978',
  '29010', '29030', '28957', '28973', '29000', '29054', '29055', '29070', '29071', '29056',
  '29058', '29065', '29067', '29126', '29038', '29042', '29084', '29086', '29096', '29085',
  '29109', '29116', '29119', '29123', '29133', '29151', '28916', '28912', '29153', '28959',
  '29156',
];

// Obszary do zamazania (współrzędne w pikselach oryginału)
const blur = {
  // tablica rejestracyjna (lewy dół) i numer domu na elewacji
  '28923': [
    { left: 0, top: 1285, width: 100, height: 60 },
    { left: 1695, top: 985, width: 65, height: 65 },
  ],
};

for (const id of photos) {
  const src = `${SRC}${id}.jpg`;
  const dest = `${OUT}${id}.jpg`;
  let img = sharp(src).rotate();
  if (blur[id]) {
    const base = await sharp(src).rotate().toBuffer();
    const patches = await Promise.all(
      blur[id].map(async (r) => ({ input: await sharp(base).extract(r).blur(18).toBuffer(), left: r.left, top: r.top })),
    );
    img = sharp(base).composite(patches);
  }
  // Wersja robocza: maks. 2000 px, jakość wysoka — Astro i tak generuje lekkie warianty WebP/AVIF
  await img.resize(2000, 2000, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 88, mozjpeg: true }).toFile(dest);
}
console.log('zdjęcia:', photos.length);

// Filmy: H.264, bez dźwięku (szum podnośnika/myjki), faststart dla szybkiego startu, plakaty JPG
const videos = [
  ['VID-20261014-WA0204.mp4', 'mycie-dachu-rezydencja', 4],
  ['VID-20261014-WA0043.mp4', 'mycie-dachu-dom', 3],
];
for (const [src, name, posterAt] of videos) {
  const mp4 = `${VOUT}${name}.mp4`;
  if (!existsSync(mp4)) {
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', SRC + src, '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '30', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', mp4]);
  }
  const poster = `${VOUT}${name}.jpg`;
  if (!existsSync(poster)) {
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', String(posterAt), '-i', SRC + src, '-frames:v', '1', '-q:v', '4', poster]);
  }
}
console.log('filmy:', videos.length);
