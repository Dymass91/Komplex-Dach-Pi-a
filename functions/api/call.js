// Pomiar kliknięć w numer telefonu (tel:+48601568841) — bez cookies i bez danych osobowych.
// Zapisywane są wyłącznie zagregowane liczniki dzienne w Cloudflare KV (binding CALLS):
//   klucz: call:<RRRR-MM-DD>:<urządzenie m|d>:<ścieżka>:<miejsce przycisku>:<źródło>
//   metadane: { n: liczba kliknięć }
// Nie zapisujemy adresu IP, user-agenta, pełnego referrera ani żadnego identyfikatora użytkownika.
// Kliknięcie numeru ≠ wykonana rozmowa.

const ALLOWED_HOSTS = new Set(['xn--komplex-dach-pia-xyc.pl', 'localhost', '127.0.0.1']);
const clean = (v, max, re) => {
  const s = String(v ?? '').toLowerCase().slice(0, max);
  return re.test(s) ? s : '';
};

export async function onRequestPost({ request, env }) {
  // Przyjmujemy wyłącznie zdarzenia z własnej strony (domena produkcyjna lub test lokalny)
  const origin = request.headers.get('Origin');
  let originHost = '';
  try {
    originHost = origin ? new URL(origin).hostname : '';
  } catch {}
  if (!ALLOWED_HOSTS.has(originHost) && !originHost.endsWith('.komplex-dach-pila-cge.pages.dev')) {
    return new Response(null, { status: 204 });
  }

  let body = {};
  try {
    const text = await request.text();
    if (text.length > 600) return new Response(null, { status: 204 });
    body = JSON.parse(text);
  } catch {
    return new Response(null, { status: 204 });
  }

  const path = clean(body.p, 80, /^\/[a-z0-9\-\/]*$/) || '/inne';
  const place = clean(body.c, 30, /^[a-z0-9\-]+$/) || 'inne';
  const device = body.d === 'm' ? 'm' : 'd';
  const source = clean(body.s, 40, /^[a-z0-9.\-_]+$/) || 'nieznane';
  const day = new Date().toISOString().slice(0, 10);
  const key = `call:${day}:${device}:${path}:${place}:${source}`;

  if (env.CALLS) {
    const { metadata } = await env.CALLS.getWithMetadata(key);
    const n = (metadata && typeof metadata.n === 'number' ? metadata.n : 0) + 1;
    await env.CALLS.put(key, '', { metadata: { n } });
  }
  return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
}
