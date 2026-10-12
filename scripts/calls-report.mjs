// Raport kliknięć w numer telefonu (zbierane przez functions/api/call.js w Cloudflare KV).
// Użycie:  npm run calls                 — ostatnie 30 dni
//          npm run calls -- 7            — ostatnie 7 dni
//          npm run calls -- 30 --local   — dane z lokalnego testu (wrangler pages dev)
//          npm run calls -- --testy      — pokaż wyłącznie zdarzenia testowe (źródło zaczyna się od „test”)
// Dane testowe (utm_source=test…) są domyślnie pomijane w raporcie.
// Wymaga: npx wrangler login oraz identyfikatora KV w wrangler.toml (binding "CALLS").
import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

const args = process.argv.slice(2);
const days = Number(args.find((a) => /^\d+$/.test(a)) || 30);
const local = args.includes('--local');
const onlyTests = args.includes('--testy');

let target = '--binding CALLS';
if (!local) {
  const id = process.env.CALLS_KV_ID || (existsSync('wrangler.toml') && (readFileSync('wrangler.toml', 'utf8').match(/binding\s*=\s*"CALLS"[\s\S]*?id\s*=\s*"([0-9a-f]+)"/) || [])[1]);
  if (!id) {
    console.error('Brak identyfikatora KV (wrangler.toml lub zmienna CALLS_KV_ID).');
    process.exit(1);
  }
  target = `--namespace-id ${id} --remote`;
} else {
  target = '--binding CALLS --local';
}

const raw = execSync(`npx wrangler kv key list ${target} --prefix call:`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
const keys = JSON.parse(raw.slice(raw.indexOf('[')));
const since = new Date(Date.now() - days * 864e5).toISOString().slice(0, 10);

const rows = keys
  .map((k) => {
    const [, day, device, path, place, source] = k.name.split(':');
    return { day, device, path, place, source, n: k.metadata?.n || 0 };
  })
  .filter((r) => r.day >= since)
  .filter((r) => (onlyTests ? r.source.startsWith('test') : !r.source.startsWith('test')));

const sum = (by) => {
  const m = new Map();
  for (const r of rows) m.set(by(r), (m.get(by(r)) || 0) + r.n);
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
};
const total = rows.reduce((a, r) => a + r.n, 0);
const print = (title, list) => {
  console.log(`\n${title}`);
  for (const [k, v] of list) console.log(`  ${String(v).padStart(5)}  ${k}`);
};

console.log(`${onlyTests ? '[DANE TESTOWE] ' : ''}Kliknięcia w numer 601 568 841 — ostatnie ${days} dni (od ${since}): ${total}`);
console.log('Uwaga: kliknięcie numeru nie oznacza wykonanej rozmowy.');
print('Według podstrony:', sum((r) => r.path));
print('Według miejsca przycisku:', sum((r) => r.place));
print('Według urządzenia (m = dotykowe/telefon, d = komputer):', sum((r) => r.device));
print('Według źródła wizyty:', sum((r) => r.source));
print('Według dnia:', sum((r) => r.day).sort((a, b) => a[0].localeCompare(b[0])));
