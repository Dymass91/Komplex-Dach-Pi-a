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
Zdjęcie z lokalnej realizacji jest cenne, ale niewymagane. Obecnie wszystkie 7 stron ma `indexable: false`.

## SEO i indeksowanie

Zmienne środowiskowe (Cloudflare Pages → Settings → Environment variables):

| Zmienna | Opis |
| --- | --- |
| `SITE_URL` | Docelowa domena, np. `https://twojadomena.pl`. Gdy brak — używany jest adres wdrożenia Cloudflare. |
| `ALLOW_INDEXING` | `true` włącza indeksowanie. **Domyślnie wyłączone.** |

Dopóki `ALLOW_INDEXING` nie jest `true`, strona ma `noindex` w meta, nagłówek `X-Robots-Tag: noindex`
(plik `_headers`) i `Disallow: /` w robots.txt. Po podpięciu domeny: ustaw `SITE_URL` i `ALLOW_INDEXING=true`,
zrób ponowne wdrożenie, a potem zgłoś `sitemap-index.xml` w Google Search Console.

## Wdrożenie: GitHub → Cloudflare Pages

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Autoryzuj GitHub i wybierz repozytorium `Dymass91/Komplex-Dach-Pi-a`.
3. Ustawienia buildu:
   - Framework preset: **Astro**
   - Production branch: **main**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: (puste — katalog główny repozytorium)
4. Environment variables (Production): `ALLOW_INDEXING=false` (lub pomiń). `SITE_URL` ustaw dopiero, gdy domena będzie gotowa.
5. **Save and Deploy**. Każdy push do `main` automatycznie aktualizuje stronę.

Strona jest w pełni statyczna — adapter SSR Cloudflare nie jest potrzebny.

## Zasady treści

- Kontakt wyłącznie telefoniczny: `tel:+48601568841`. Bez formularzy i adresów e-mail.
- Bez wymyślonych opinii, liczby realizacji, certyfikatów, gwarancji, cen i dostępności 24/7.
- Kadry poprawione cyfrowo (ChatGPT) są używane tylko dekoracyjnie i zawsze podpisane.
- „Około 25 lat doświadczenia” — sformułowanie w `src/data/site.ts`, do potwierdzenia z właścicielem.
