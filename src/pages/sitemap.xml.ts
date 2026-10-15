import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { locationPages } from '../data/locations';

// Jedna mapa witryny: tylko kanoniczne, indeksowalne adresy (bez indeksu map i bez lastmod).
// Zgodność z zbudowanymi stronami sprawdza po buildzie scripts/check-sitemap.mjs.
const indexablePaths = [
  '/',
  '/uslugi/',
  ...services.map((s) => `/uslugi/${s.slug}/`),
  '/realizacje/',
  '/mycie-dachow/',
  '/obszar-dzialania/',
  ...locationPages.filter((l) => l.indexable).map((l) => `/obszar-dzialania/${l.slug}/`),
];

export const GET: APIRoute = ({ site }) => {
  const urls = indexablePaths.map((p) => `  <url>\n    <loc>${new URL(p, site).href}</loc>\n  </url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
