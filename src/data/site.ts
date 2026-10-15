// Zweryfikowane dane firmy — jedyne źródło prawdy dla treści kontaktowych i SEO.

// Potwierdzone przez właściciela: firma działa od 2001 r. Lata doświadczenia liczone przy buildzie.
const FOUNDING_YEAR = 2001;
const years = new Date().getFullYear() - FOUNDING_YEAR;
/** Polska odmiana: 1 rok, 2–4 lata (bez 12–14), 5+ lat */
const yearsUnit = years === 1 ? 'rok' : years % 10 >= 2 && years % 10 <= 4 && (years % 100 < 12 || years % 100 > 14) ? 'lata' : 'lat';

export const business = {
  name: 'Komplex-Dach Piła',
  shortName: 'Komplex-Dach',
  phoneDisplay: '601 568 841',
  phoneHref: 'tel:+48601568841',
  phoneE164: '+48601568841',
  city: 'Piła',
  region: 'wielkopolskie',
  country: 'PL',
  // Środek Piły — wyłącznie środek obszaru działania (mapa, GeoCircle). To NIE jest lokalizacja firmy.
  geo: { lat: 53.1514, lon: 16.7378 },
  radiusKm: 100,
  foundingYear: FOUNDING_YEAR,
  experienceYears: years,
  /** „25 lat” */
  experienceLabel: `${years} ${yearsUnit}`,
  /** „lat” / „lata” — do etykiet typu „lat doświadczenia” */
  experienceUnit: yearsUnit,
} as const;

export const nav = [
  { label: 'Strona główna', href: '/' },
  { label: 'Usługi', href: '/uslugi/' },
  { label: 'Mycie dachów', href: '/mycie-dachow/' },
  { label: 'Realizacje', href: '/realizacje/' },
  { label: 'Obszar działania', href: '/obszar-dzialania/' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;
