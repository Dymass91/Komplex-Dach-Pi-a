// Kontrola po buildzie (npm run build → postbuild): sitemap.xml musi dokładnie odpowiadać
// zbudowanym stronom indeksowalnym. Przerywa build przy każdej niezgodności.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const errors = [];
const xml = readFileSync(join(dist, 'sitemap.xml'), 'utf8');

if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) errors.push('brak deklaracji XML');
if (!xml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) errors.push('brak urlset z poprawnym namespace');
if ((xml.match(/<url>/g) || []).length !== (xml.match(/<\/url>/g) || []).length) errors.push('niezbalansowane <url>');

const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const hosts = new Set(locs.map((l) => new URL(l).origin));
if (hosts.size !== 1) errors.push(`różne domeny w sitemapie: ${[...hosts]}`);
if (new Set(locs).size !== locs.length) errors.push('zduplikowane adresy w sitemapie');

// Każdy adres z sitemapy: istnieje, bez noindex, canonical = adres
for (const loc of locs) {
  const path = new URL(loc).pathname;
  const file = join(dist, path, 'index.html');
  if (!existsSync(file)) {
    errors.push(`brak strony dla ${path}`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) errors.push(`${path}: ma noindex, a jest w sitemapie`);
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (canonical !== loc) errors.push(`${path}: canonical ${canonical} ≠ ${loc}`);
}

// Każda zbudowana strona bez noindex musi być w sitemapie
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return f === '_astro' ? [] : walk(p);
    return f === 'index.html' ? [p] : [];
  });
const inSitemap = new Set(locs.map((l) => new URL(l).pathname));
for (const file of walk(dist)) {
  const html = readFileSync(file, 'utf8');
  const parts = file.slice(dist.length + 1).split(/[\\/]/).slice(0, -1);
  const path = parts.length ? `/${parts.join('/')}/` : '/';
  const indexable = !/<meta name="robots" content="[^"]*noindex/.test(html);
  // W wersji demo (ALLOW_INDEXING≠true) wszystkie strony mają noindex — wtedy sprawdzamy tylko spójność listy.
  const demo = /<meta name="robots" content="noindex, nofollow"/.test(html);
  if (indexable && !demo && !inSitemap.has(path)) errors.push(`${path}: indeksowalna, ale brak w sitemapie`);
}

if (existsSync(join(dist, 'sitemap-index.xml')) || existsSync(join(dist, 'sitemap-0.xml'))) errors.push('pozostały stare pliki sitemap-index.xml / sitemap-0.xml');

const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
const sitemapLines = robots.split('\n').filter((l) => l.startsWith('Sitemap:'));
if (robots.includes('Allow: /') && (sitemapLines.length !== 1 || !sitemapLines[0].endsWith('/sitemap.xml'))) errors.push('robots.txt nie wskazuje wyłącznie /sitemap.xml');

if (errors.length) {
  console.error(`\n✖ Kontrola sitemapy nie przeszła:\n- ${errors.join('\n- ')}\n`);
  process.exit(1);
}
console.log(`✔ sitemap.xml: ${locs.length} adresów, zgodnych ze zbudowanymi stronami (${[...hosts][0]})`);
