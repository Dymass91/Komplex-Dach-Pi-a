import type { APIRoute } from 'astro';

// Dopóki ALLOW_INDEXING !== 'true', wersja demonstracyjna jest wyłączona z indeksowania.
export const GET: APIRoute = ({ site }) => {
  const allow = process.env.ALLOW_INDEXING === 'true';
  const body = allow
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`
    : `# Wersja demonstracyjna — indeksowanie wyłączone\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
