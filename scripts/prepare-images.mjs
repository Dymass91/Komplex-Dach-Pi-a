// Przygotowuje zdjęcia źródłowe do użycia na stronie.
// Oryginały w katalogu głównym i w "Zdjecia obrobione przez chatgpt" NIE są modyfikowane —
// skrypt tworzy kopie o opisowych nazwach w src/assets/images/.
// Uruchom: npm run images
import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = 'src/assets/images';
const AI = 'Zdjecia obrobione przez chatgpt';

// Kopie 1:1 (autentyczne zdjęcia bez ingerencji)
const copies = {
  'unnamed.webp': 'budynek-elewacja-metalowa-wieczor.webp',
  'unnamed (1).webp': 'obrobka-komina-blacha-czerwona.webp',
  'unnamed (2).webp': 'obrobka-komina-blacha-grafitowa.webp',
  'unnamed (3).webp': 'warsztat-element-blacharski.webp',
  'unnamed (4).webp': 'dachy-okolice-pily-widok-z-auta.webp',
  'unnamed (6).webp': 'gwozdziarka-milwaukee-walizka.webp',
  'unnamed (7).webp': 'realizacja-dach-grafitowy-rusztowanie.webp',
  'unnamed (8).webp': 'realizacja-dach-grafitowy-lukarna-szczyt.webp',
  'unnamed (9).webp': 'realizacja-dach-dom-z-lukarna.webp',
  'unnamed (10).webp': 'realizacja-dach-dom-w-budowie.webp',
  'unnamed (11).webp': 'budowa-budynek-wielorodzinny.webp',
  '118403650_158141612594734_4124851839865180510_n.jpg': 'narzedzia-blacharskie-walizka.jpg',
  '118589189_158141559261406_5015234938826007396_n.jpg': 'warsztat-stol-narzedzia.jpg',
  '118616962_158141572594738_5500498269368300168_n.jpg': 'gwozdziarka-milwaukee-warsztat.jpg',
  '118620173_158141532594742_634336267952205510_n.jpg': 'gwozdziarki-milwaukee-dwie-walizki.jpg',
  '144626271_237054611370100_5024746167014828797_n.jpg': 'lukarna-obrobka-stary-dach.jpg',
  // Obrazy poprawione cyfrowo (ChatGPT) — wyłącznie jako dekoracyjne, zawsze z podpisem
  [`${AI}/7f8b7c05-bbab-481d-911e-9213afed9b18.png`]: 'retusz-budynek-elewacja-metalowa.png',
  [`${AI}/bf817a21-b079-4a84-9b18-ead086ac69d3.png`]: 'retusz-obrobki-kominow.png',
};

// Zdjęcia samochodu z rozmytą tablicą rejestracyjną [x, y, w, h]
const blurred = {
  'unnamed (5).webp': ['samochod-firmowy-osiedle.webp', [404, 292, 60, 26]],
  'unnamed (12).webp': ['samochod-firmowy-baza.webp', [42, 258, 40, 25]],
};

await mkdir(OUT, { recursive: true });

for (const [src, dest] of Object.entries(copies)) {
  await copyFile(src, join(OUT, dest));
}

for (const [src, [dest, [left, top, width, height]]] of Object.entries(blurred)) {
  const patch = await sharp(src).extract({ left, top, width, height }).blur(6).toBuffer();
  await sharp(src).composite([{ input: patch, left, top }]).webp({ quality: 92 }).toFile(join(OUT, dest));
}

// Logo: oryginał na czarnym tle → przezroczyste tło (alfa = jasność piksela)
const { data, info } = await sharp('277570930_479925830319118_2692282441778798973_n.png')
  .extract({ left: 0, top: 700, width: 2048, height: 600 })
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const rgba = Buffer.alloc(info.width * info.height * 4);
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  const a = Math.max(r, g, b);
  const k = a ? 255 / a : 0;
  rgba[j] = Math.min(255, r * k);
  rgba[j + 1] = Math.min(255, g * k);
  rgba[j + 2] = Math.min(255, b * k);
  rgba[j + 3] = a;
}
await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim()
  .resize({ width: 900 })
  .png({ compressionLevel: 9 })
  .toFile(join(OUT, 'logo-komplex-dach.png'));

// Favicon / ikona (sam dach z logo)
console.log('Obrazy przygotowane w', OUT);
