# Komplex-Dach Piła — strona internetowa

Statyczna strona firmy dekarskiej Komplex-Dach Piła.
Stos: **Astro 7 (TypeScript) · Tailwind CSS 4 · GSAP + ScrollTrigger** · hosting **Cloudflare Pages**.

## Uruchomienie lokalne

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # wynik w dist/
npm run preview  # podgląd wersji produkcyjnej
npm run check    # sprawdzenie typów
```

Wymagany Node.js ≥ 22.12 (plik `.node-version`).

## Struktura

| Ścieżka | Zawartość |
| --- | --- |
| `src/data/site.ts` | Zweryfikowane dane firmy (telefon, obszar, doświadczenie) |
| `src/data/services.ts` | Treść 10 stron usług (nagłówki, sekcje, FAQ, linkowanie) |
| `src/data/locations.ts` | Miejscowości w obszarze działania + treść stron lokalnych |
| `src/data/images.ts` | Zdjęcia z opisami alt; oznaczenie kadrów retuszowanych |
| `src/pages/` | Strona główna, `/uslugi/`, `/realizacje/`, `/obszar-dzialania/`, 404, robots.txt |
| `src/scripts/motion.ts` | Animacje GSAP (ładowane leniwie, z obsługą `prefers-reduced-motion`) |
| `scripts/prepare-images.mjs` | Tworzy kopie zdjęć o opisowych nazwach w `src/assets/images/` |
| `design-reference/` | Zatwierdzona panorama referencyjna strony głównej |

Oryginalne zdjęcia (katalog główny i `Zdjecia obrobione przez chatgpt/`) **nie są modyfikowane**.
`npm run images` odtwarza kopie robocze (z rozmytymi tablicami rejestracyjnymi i logo na przezroczystym tle).

### Dodanie strony lokalnej

W `src/data/locations.ts` uzupełnij pole `page` danej miejscowości **unikalną** treścią
(opis, okoliczne miejscowości, pytania). Strona `/obszar-dzialania/<slug>/` wygeneruje się automatycznie.
Nie kopiuj tekstów z podmienioną nazwą miasta.

Każda miejscowość ma jawne pole `indexable` (domyślnie `false`). Strona z `indexable: false`:
- działa normalnie i jest podlinkowana z huba `/obszar-dzialania/`,
- ma `noindex, follow` — **także po włączeniu `ALLOW_INDEXING`** (meta + nagłówek `X-Robots-Tag`),
- nie trafia do `sitemap-index.xml` i nie ma danych FAQPage,
- zachowuje własny canonical (bez przekierowania na hub).

Ustaw `indexable: true` ręcznie, dopiero gdy strona ma zweryfikowane, pomocne informacje odróżniające ją od innych
stron lokalnych (np. potwierdzone przez właściciela prace w okolicy, sprawdzone lokalne uwarunkowania dachowe).
Zdjęcie z lokalnej realizacji jest cenne, ale niewymagane. Obecnie wszystkie 7 stron miast ma `indexable: true` (treść: oferta, kontakt, odległość, okoliczne miejscowości, właściwe starostwo i konserwator zabytków).

## SEO i indeksowanie

Dwie zmienne środowiskowe sterują adresami i indeksowaniem:

| Zmienna | Opis |
| --- | --- |
| `SITE_URL` | Adres, pod którym publikujesz stronę — trafia do canonical, Open Graph i sitemapy. Sama domena z `https://`, bez ścieżki. |
| `ALLOW_INDEXING` | `true` włącza indeksowanie. **Domyślnie wyłączone.** |

**Wersja demonstracyjna (domyślnie):** każda podstrona ma `noindex, nofollow` (meta + nagłówek `X-Robots-Tag`
w `_headers`), a robots.txt zawiera `Disallow: /`.

**Wersja produkcyjna (`ALLOW_INDEXING=true`):** build **odmówi działania**, jeśli `SITE_URL`:
- nie jest ustawiony,
- nie używa `https://` albo zawiera ścieżkę,
- wskazuje na `localhost` lub tymczasową domenę `*.pages.dev`.

Dzięki temu localhost ani adres Cloudflare nie mogą przypadkiem trafić do canonical indeksowanej strony.
Strony lokalne z `indexable: false` zachowują `noindex, follow` także w wersji produkcyjnej.

## Wdrożenie (stan obecny): Cloudflare Pages — Direct Upload z tego komputera

Projekt Cloudflare Pages `komplex-dach-pila` jest typu **Direct Upload**: strona jest budowana **lokalnie**,
a gotowy katalog `dist/` wysyłany przez Wranglera. Adres demo: https://komplex-dach-pila-cge.pages.dev/

> ⚠️ Zmienne ustawione w panelu Cloudflare (Settings → Environment variables) **nie mają wpływu** na ten tryb.
> Liczą się wyłącznie zmienne ustawione w lokalnej powłoce przed uruchomieniem `npm run deploy`.

Jednorazowo: `npx wrangler login` (logowanie do konta Cloudflare).

**Wersja demonstracyjna (bez indeksowania):**

```bash
# bash / Git Bash
SITE_URL=https://komplex-dach-pila-cge.pages.dev npm run deploy
```

```powershell
# PowerShell
$env:SITE_URL='https://komplex-dach-pila-cge.pages.dev'; npm run deploy
```

**Start produkcyjny (po podpięciu własnej domeny w Cloudflare → Custom domains):**

```bash
SITE_URL=https://docelowa-domena.pl ALLOW_INDEXING=true npm run deploy
```

`npm run deploy` (`scripts/deploy.mjs`) sprawdza `SITE_URL` przed buildem i przerywa wdrożenie, jeśli adresu brak,
jest niepoprawny, wskazuje na localhost albo — przy włączonym indeksowaniu — na `*.pages.dev`.
Wdrożenie trafia na gałąź produkcyjną `main` projektu.

Push do GitHuba **nie** aktualizuje strony automatycznie — po zmianach uruchom `npm run deploy`.

### Lista kontrolna startu produkcyjnego

1. Ustal i zabezpiecz domenę docelową (stara domena `komplex-dach.pila.pl` obecnie nie istnieje w DNS).
2. Podłącz domenę w Cloudflare Pages → projekt → **Custom domains**.
3. Wdróż z `SITE_URL=https://docelowa-domena.pl ALLOW_INDEXING=true`.
4. Sprawdź na żywo: canonical, robots.txt (`Allow: /`), `sitemap-index.xml`, brak `X-Robots-Tag` na stronach głównych,
   `noindex, follow` na 7 stronach lokalnych.
5. Przekieruj `komplex-dach-pila-cge.pages.dev` na domenę (Cloudflare → Bulk Redirects).
6. Zgłoś sitemapę w Google Search Console i zaktualizuj adres strony w profilu Google Business Profile.

### Opcjonalnie: automatyczne wdrożenia

Każdy push do `main` może aktualizować stronę na dwa sposoby:

- **GitHub Actions** z tokenem API Cloudflare (uprawnienie *Cloudflare Pages: Edit*) zapisanym jako sekret repozytorium;
  zmienne `SITE_URL` / `ALLOW_INDEXING` ustawia się wtedy w pliku workflow lub w zmiennych GitHuba.
- **Nowy projekt Cloudflare Pages połączony z Gitem** (Workers & Pages → Create → Pages → Connect to Git; preset Astro,
  build `npm run build`, katalog `dist`). Projektu Direct Upload nie da się później podłączyć do Gita, więc zmieni się
  adres `*.pages.dev`. W tym trybie zmienne ustawia się w panelu Cloudflare — `ALLOW_INDEXING=true` i `SITE_URL`
  **tylko w środowisku Production**, nigdy w Preview.

Strona jest w pełni statyczna — adapter SSR Cloudflare nie jest potrzebny.

## Zasady treści

- Kontakt wyłącznie telefoniczny: `tel:+48601568841`. Bez formularzy i adresów e-mail.
- Bez wymyślonych opinii, liczby realizacji, certyfikatów, gwarancji, cen i dostępności 24/7.
- Kadr przetworzony cyfrowo przez AI (zdjęcie w hero) jest używany wyłącznie jako ilustracja, zawsze z widoczną
  adnotacją; nigdy jako obraz udostępnień (Open Graph) ani w danych strukturalnych.
- Doświadczenie: firma działa od **2001 r.** (potwierdzone). Liczba lat jest wyliczana przy buildzie w `src/data/site.ts`.
- Ulica, kod pocztowy i współrzędne firmy — dopiero po weryfikacji z właścicielem.
