// Wdrożenie na Cloudflare Pages (Direct Upload): build lokalny + wrangler.
// Użycie (bash):        SITE_URL=https://komplex-dach-pila-cge.pages.dev npm run deploy
// Użycie (PowerShell):  $env:SITE_URL='https://komplex-dach-pila-cge.pages.dev'; npm run deploy
// Zmienne ustawiane w panelu Cloudflare NIE działają przy tym trybie — liczą się zmienne z lokalnej powłoki.
import { spawnSync } from 'node:child_process';
import { validateSiteUrl } from './site-url.mjs';

const PROJECT = 'komplex-dach-pila';
const allowIndexing = process.env.ALLOW_INDEXING === 'true';
const { url, errors } = validateSiteUrl(process.env.SITE_URL, { allowIndexing, requireSiteUrl: true });

if (errors.length) {
  console.error(`\n✖ Wdrożenie przerwane:\n- ${errors.join('\n- ')}\n`);
  process.exit(1);
}

console.log(`\n▶ Wdrożenie: ${url.origin}  |  indeksowanie: ${allowIndexing ? 'WŁĄCZONE' : 'wyłączone (noindex)'}\n`);

const run = (cmd) => {
  const r = spawnSync(cmd, { stdio: 'inherit', shell: true, env: process.env });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

run('npm run build'); // build + kontrola sitemapy (postbuild)
run(`npx wrangler pages deploy dist --project-name=${PROJECT} --branch=main`);
