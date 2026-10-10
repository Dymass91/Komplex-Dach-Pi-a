// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { writeFile } from 'node:fs/promises';
import { noindexLocationPaths } from './src/data/locations.ts';

/**
 * SITE_URL — docelowa domena produkcyjna (np. https://twojadomena.pl).
 * Dopóki nie jest ustawiona, używany jest adres wdrożenia Cloudflare (CF_PAGES_URL)
 * lub localhost — a strona pozostaje wyłączona z indeksowania.
 * ALLOW_INDEXING=true — włącza indeksowanie (ustaw dopiero na domenie produkcyjnej).
 * Strony lokalne z `indexable: false` pozostają noindex, follow także po włączeniu indeksowania.
 */
const site = (process.env.SITE_URL || process.env.CF_PAGES_URL || 'http://localhost:4321').replace(/\/$/, '');
const allowIndexing = process.env.ALLOW_INDEXING === 'true';

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
    sitemap({ filter: (page) => !noindexLocationPaths.some((path) => new URL(page).pathname === path) }),
    robotsHeaders(),
  ],
  vite: { plugins: [tailwindcss()] },
});
