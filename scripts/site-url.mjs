// Walidacja adresu witryny — wspólna dla astro.config.mjs i scripts/deploy.mjs.
// Chroni przed sytuacją, w której localhost lub tymczasowa domena Cloudflare (*.pages.dev)
// trafia do canonical, Open Graph i sitemapy indeksowanej wersji strony.

const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '0.0.0.0', '[::1]']);

/**
 * @param {string | undefined} raw  wartość SITE_URL
 * @param {{ allowIndexing: boolean, requireSiteUrl?: boolean }} opts
 * @returns {{ url: URL | null, errors: string[] }}
 */
export function validateSiteUrl(raw, { allowIndexing, requireSiteUrl = false }) {
  const errors = [];
  const value = (raw || '').trim();

  if (!value) {
    if (allowIndexing) errors.push('ALLOW_INDEXING=true wymaga ustawienia SITE_URL (docelowej domeny produkcyjnej).');
    else if (requireSiteUrl) errors.push('Brak SITE_URL. Podaj adres, pod którym wdrażasz stronę (np. https://komplex-dach-pila-cge.pages.dev).');
    return { url: null, errors };
  }

  let url;
  try {
    url = new URL(value);
  } catch {
    return { url: null, errors: [`SITE_URL „${value}” nie jest poprawnym adresem URL.`] };
  }

  const host = url.hostname.toLowerCase();
  const isLocal = LOCAL_HOSTS.has(host);
  if (url.pathname !== '/' || url.search || url.hash) errors.push('SITE_URL musi być samą domeną, bez ścieżki, parametrów i #.');
  if (isLocal && (allowIndexing || requireSiteUrl)) errors.push('SITE_URL nie może wskazywać na localhost przy wdrożeniu ani przy włączonym indeksowaniu.');
  if (!isLocal && url.protocol !== 'https:') errors.push('SITE_URL musi używać https://.');
  if (allowIndexing && host.endsWith('.pages.dev')) {
    errors.push('Domena *.pages.dev jest tymczasowa i nie może być kanoniczna przy ALLOW_INDEXING=true. Ustaw docelową domenę produkcyjną.');
  }
  return { url, errors };
}
