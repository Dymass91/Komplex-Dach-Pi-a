// Zweryfikowane dane firmy — jedyne źródło prawdy dla treści kontaktowych i SEO.
export const business = {
  name: 'Komplex-Dach Piła',
  shortName: 'Komplex-Dach',
  phoneDisplay: '601 568 841',
  phoneHref: 'tel:+48601568841',
  phoneE164: '+48601568841',
  city: 'Piła',
  region: 'wielkopolskie',
  country: 'PL',
  // Środek Piły — współrzędne orientacyjne do obszaru działania
  geo: { lat: 53.1514, lon: 16.7378 },
  radiusKm: 100,
  // UWAGA: do potwierdzenia z właścicielem (brief: „około 25 lat”)
  experienceYears: 25,
  experienceLabel: 'około 25 lat',
} as const;

export const nav = [
  { label: 'Strona główna', href: '/' },
  { label: 'Usługi', href: '/uslugi/' },
  { label: 'Realizacje', href: '/realizacje/' },
  { label: 'Obszar działania', href: '/obszar-dzialania/' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;
