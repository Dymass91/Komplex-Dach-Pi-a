// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { writeFile } from 'node:fs/promises';
import { noindexLocationPaths } from './src/data/locations.ts';
import { validateSiteUrl } from './scripts/site-url.mjs';

/**
 * SITE_URL — adres, pod którym strona jest publikowana (canonical, Open Graph, sitemapa).
 * ALLOW_INDEXING=true — włącza indeksowanie; wymaga SITE_URL z docelową domeną (https, bez localhost i *.pages.dev).
 * Bez ALLOW_INDEXING strona jest wersją demonstracyjną: noindex, nofollow na każdej podstronie.
 * Strony lokalne z `indexable: false` pozostają noindex, follow także po włączeniu indeksowania.
 * Szczegóły wdrożenia: README.md.
 */
const allowIndexing = process.env.ALLOW_INDEXING === 'true';
const { url: siteUrl, errors: siteErrors } = validateSiteUrl(process.env.SITE_URL, { allowIndexing });
if (siteErrors.length) {
  throw new Error(`Nieprawidłowa konfiguracja SITE_URL / ALLOW_INDEXING:\n- ${siteErrors.join('\n- ')}`);
}
// Bez SITE_URL (praca lokalna, wersja demo) używany jest localhost — nigdy przy włączonym indeksowaniu.
const site = siteUrl ? siteUrl.origin : 'http://localhost:4321';

/** Nagłówki Cloudflare Pages (_headers): noindex dla wersji demo, a w produkcji dla stron lokalnych wyłączonych z indeksowania. */
/** @returns {import('astro').AstroIntegration} */
const robotsHeaders = () => ({
  name: 'robots-headers',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const lines = ['/*'];
      if (!allowIndexing) lines.push('  X-Robots-Tag: noindex, nofollow');
      lines.push('  X-Content-Type-Options: nosniff', '  Referrer-Policy: strict-origin-when-cross-origin', '');
      if (allowIndexing) {
        for (const path of noindexLocationPaths) lines.push(path, '  X-Robots-Tag: noindex, follow', '');
      }
      lines.push('/_astro/*', '  Cache-Control: public, max-age=31536000, immutable', '');
      await writeFile(new URL('_headers', dir), lines.join('\n'));
    },
  },
});

export default defineConfig({
  site,
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    // Strony noindex nie trafiają do sitemapy
    sitemap({
      lastmod: new Date(),
      filter: (page) => ![...noindexLocationPaths, '/polityka-prywatnosci/'].includes(new URL(page).pathname),
    }),
    robotsHeaders(),
  ],
  vite: { plugins: [tailwindcss()] },
});
