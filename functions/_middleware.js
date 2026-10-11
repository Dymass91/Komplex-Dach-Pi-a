// Cloudflare Pages Functions — jedna kanoniczna domena.
// Stałe przekierowanie 301 z www i z publicznego adresu projektu (*.pages.dev) na domenę produkcyjną,
// z zachowaniem ścieżki i parametrów URL. Wykonywane na serwerach Cloudflare, przed zwróceniem strony.
// Adresy podglądów i pojedynczych wdrożeń (np. abc123.komplex-dach-pila-cge.pages.dev) NIE są przekierowywane.
// Domena w zapisie Punycode: komplex-dach-piła.pl = xn--komplex-dach-pia-xyc.pl

const CANONICAL_HOST = 'xn--komplex-dach-pia-xyc.pl';
const REDIRECT_HOSTS = new Set(['www.xn--komplex-dach-pia-xyc.pl', 'komplex-dach-pila-cge.pages.dev']);

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (REDIRECT_HOSTS.has(url.hostname.toLowerCase())) {
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    url.port = '';
    return new Response(null, {
      status: 301,
      headers: { Location: url.toString(), 'Cache-Control': 'public, max-age=3600' },
    });
  }
  return next();
}
