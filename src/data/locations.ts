import { business } from './site';

/**
 * Miejscowości w obszarze działania (ok. 100 km od Piły).
 * Poznań i Bydgoszcz są celowo pominięte.
 *
 * Strona lokalna powstaje tylko dla miejscowości z uzupełnionym polem `page` —
 * z unikalną treścią, a nie z podmienioną nazwą miasta. Aby dodać kolejną stronę,
 * dopisz `page` z własnym opisem i pytaniami.
 *
 * INDEKSOWANIE: każda miejscowość ma jawne `indexable`. Strony z `indexable: false`
 * działają normalnie, ale mają `noindex, follow` (także po włączeniu indeksowania
 * całej witryny), nie trafiają do sitemapy ani nie mają danych FAQPage.
 * `indexable: true` ustawiaj ręcznie i tylko wtedy, gdy strona zawiera zweryfikowane,
 * pomocne informacje odróżniające ją od innych stron lokalnych (np. potwierdzone
 * przez właściciela prace w okolicy, sprawdzone lokalne uwarunkowania dachowe).
 * Zdjęcie z lokalnej realizacji jest cenne, ale nie jest wymagane.
 */
export type Location = {
  name: string;
  slug: string;
  /** Forma „w …” (miejscownik) */
  locative: string;
  lat: number;
  lon: number;
  county: string;
  voivodeship: 'wielkopolskie' | 'zachodniopomorskie' | 'kujawsko-pomorskie' | 'pomorskie';
  /** Etykieta na mapie */
  major?: boolean;
  /** Czy strona lokalna może być indeksowana — zawsze jawnie, domyślnie false */
  indexable: boolean;
  page?: {
    metaDescription: string;
    intro: string[];
    nearby: string[];
    faq: { q: string; a: string }[];
  };
};

export const locations: Location[] = [
  {
    name: 'Wałcz', slug: 'walcz', locative: 'Wałczu', lat: 53.274, lon: 16.471, county: 'wałecki', voivodeship: 'zachodniopomorskie', major: true, indexable: false,
    page: {
      metaDescription: 'Dekarz Wałcz: wykonanie dachów, naprawy przecieków, przeglądy i odśnieżanie. Komplex-Dach z Piły — zadzwoń: 601 568 841.',
      intro: [
        'Wałcz leży na północny zachód od Piły, już po stronie województwa zachodniopomorskiego.',
        'Wałcz i okoliczne miejscowości mieszczą się w naszym obszarze działania — zarówno przy nowych dachach, jak i przy naprawach, przeglądach czy odśnieżaniu. Zakres prac i termin ustalamy telefonicznie: zadzwoń i opisz, czego potrzebujesz.',
      ],
      nearby: ['Tuczno', 'Mirosławiec', 'Człopa'],
      faq: [
        { q: 'Czy Wałcz jest w waszym obszarze działania, mimo że to inne województwo?', a: 'Tak. Pracujemy w promieniu około 100 km od Piły, niezależnie od granic województw. Wałcz jest jednym z bliższych miast.' },
        { q: 'Czy dojeżdżacie też do miejscowości wokół Wałcza?', a: 'Tak, m.in. w kierunku Tuczna, Mirosławca i Człopy. Zadzwoń i podaj miejscowość — potwierdzimy dojazd.' },
      ],
    },
  },
  {
    name: 'Złotów', slug: 'zlotow', locative: 'Złotowie', lat: 53.363, lon: 17.041, county: 'złotowski', voivodeship: 'wielkopolskie', major: true, indexable: false,
    page: {
      metaDescription: 'Dekarz Złotów: pokrycia dachowe, naprawy dachów, przeglądy, okna dachowe. Komplex-Dach z Piły — tel. 601 568 841.',
      intro: [
        'Złotów leży na północny wschód od Piły, w północnej Wielkopolsce. Obsługujemy samo miasto oraz miejscowości powiatu złotowskiego.',
        'W tym rejonie wykonujemy pełen zakres prac dachowych — od nowych pokryć, przez naprawy przecieków i obróbki kominów, po montaż okien dachowych i docieplenia poddaszy. Pierwszy krok to zawsze rozmowa telefoniczna.',
      ],
      nearby: ['Krajenka', 'Jastrowie', 'Okonek', 'Łobżenica'],
      faq: [
        { q: 'Czy obsługujecie miejscowości w powiecie złotowskim?', a: 'Tak, m.in. Krajenkę, Jastrowie i Okonek oraz wsie w okolicy. Zadzwoń, żeby potwierdzić dojazd do konkretnego adresu.' },
        { q: 'Jak umówić przegląd dachu w Złotowie?', a: 'Telefonicznie pod numerem 601 568 841. Ustalimy termin i zakres przeglądu.' },
      ],
    },
  },
  {
    name: 'Chodzież', slug: 'chodziez', locative: 'Chodzieży', lat: 52.995, lon: 16.92, county: 'chodzieski', voivodeship: 'wielkopolskie', major: true, indexable: false,
    page: {
      metaDescription: 'Dekarz Chodzież: wykonanie i naprawa dachów, przeglądy, serwis, odśnieżanie. Komplex-Dach z Piły — zadzwoń: 601 568 841.',
      intro: [
        'Chodzież leży na południowy wschód od Piły. To miasto i okolice, do których mamy blisko.',
        'W Chodzieży i okolicach oferujemy usługi dla właścicieli domów, firm i wspólnot mieszkaniowych: kompleksowe wykonanie dachów, naprawy, serwis oraz przeglądy — także przedzimowe.',
      ],
      nearby: ['Ujście', 'Margonin', 'Szamocin', 'Budzyń'],
      faq: [
        { q: 'Czy w Chodzieży wykonujecie prace dla wspólnot mieszkaniowych?', a: 'Tak, pracujemy dla wspólnot mieszkaniowych i zarządców nieruchomości, a także dla klientów indywidualnych i firm.' },
        { q: 'Czy dojeżdżacie do Margonina i Szamocina?', a: 'Tak, to miejscowości w naszym obszarze działania.' },
      ],
    },
  },
  {
    name: 'Trzcianka', slug: 'trzcianka', locative: 'Trzciance', lat: 53.041, lon: 16.454, county: 'czarnkowsko-trzcianecki', voivodeship: 'wielkopolskie', major: true, indexable: false,
    page: {
      metaDescription: 'Dekarz Trzcianka: dachy, naprawy przecieków, obróbki kominów, przeglądy. Komplex-Dach z Piły — tel. 601 568 841.',
      intro: [
        'Trzcianka leży na południowy zachód od Piły i należy do najbliższych miast w naszym obszarze działania.',
        'W Trzciance i okolicach wykonujemy nowe dachy i wymiany pokryć, usuwamy przecieki, wykonujemy obróbki blacharskie oraz przeglądy dachów. Jeśli masz problem z dachem, zadzwoń i opisz go — doradzimy, od czego zacząć.',
      ],
      nearby: ['Wieleń', 'Ujście', 'Czarnków'],
      faq: [
        { q: 'Czy przyjeżdżacie do drobnych napraw w Trzciance?', a: 'Tak, zajmujemy się także drobnymi naprawami. Termin ustalamy telefonicznie, w zależności od bieżących zleceń.' },
        { q: 'Czy montujecie okna dachowe w Trzciance?', a: 'Tak, montujemy i wymieniamy okna dachowe wraz z obróbką w pokryciu.' },
      ],
    },
  },
  {
    name: 'Czarnków', slug: 'czarnkow', locative: 'Czarnkowie', lat: 52.902, lon: 16.563, county: 'czarnkowsko-trzcianecki', voivodeship: 'wielkopolskie', major: true, indexable: false,
    page: {
      metaDescription: 'Dekarz Czarnków: wykonanie dachów, naprawy, przeglądy, docieplenia poddaszy. Komplex-Dach z Piły — zadzwoń: 601 568 841.',
      intro: [
        'Czarnków, siedziba powiatu czarnkowsko-trzcianeckiego, leży nad Notecią, na południe od Piły.',
        'Obsługujemy Czarnków i okoliczne miejscowości: wykonujemy dachy, naprawiamy przecieki, ocieplamy poddasza i wykonujemy przeglądy. Termin i zakres prac ustalamy telefonicznie — najlepiej zadzwonić i opisać, czego potrzebujesz.',
      ],
      nearby: ['Wieleń', 'Lubasz', 'Trzcianka'],
      faq: [
        { q: 'Czy dojeżdżacie do Czarnkowa na przegląd dachu?', a: 'Tak. Zadzwoń pod numer 601 568 841, aby ustalić termin i zakres przeglądu.' },
        { q: 'Czy wykonujecie docieplenie poddasza w Czarnkowie?', a: 'Tak, docieplenie poddasza wykonujemy samodzielnie lub razem z pracami dachowymi.' },
      ],
    },
  },
  {
    name: 'Wągrowiec', slug: 'wagrowiec', locative: 'Wągrowcu', lat: 52.809, lon: 17.199, county: 'wągrowiecki', voivodeship: 'wielkopolskie', major: true, indexable: false,
    page: {
      metaDescription: 'Dekarz Wągrowiec: pokrycia dachowe, naprawy i serwis dachów, odśnieżanie. Komplex-Dach z Piły — tel. 601 568 841.',
      intro: [
        'Wągrowiec leży na południowy wschód od Piły — to jeden z dalszych kierunków w naszym obszarze działania.',
        'W Wągrowcu i okolicach oferujemy pełen zakres usług dachowych: wykonanie i wymianę dachów, serwis i przeglądy, a także naprawy. Zadzwoń i opisz zakres prac — powiemy, kiedy możemy przyjechać.',
      ],
      nearby: ['Gołańcz', 'Margonin', 'Mieścisko'],
      faq: [
        { q: 'Czy Wągrowiec jest w waszym zasięgu?', a: 'Tak, mieści się w promieniu około 100 km od Piły.' },
        { q: 'Czy wykonujecie serwis dachów obiektów firmowych w Wągrowcu?', a: 'Tak. Zakres serwisu ustalamy indywidualnie, zwykle po przeglądzie dachu.' },
      ],
    },
  },
  {
    name: 'Szczecinek', slug: 'szczecinek', locative: 'Szczecinku', lat: 53.708, lon: 16.699, county: 'szczecinecki', voivodeship: 'zachodniopomorskie', major: true, indexable: false,
    page: {
      metaDescription: 'Dekarz Szczecinek: wykonanie dachów, naprawy, przeglądy przed zimą, odśnieżanie. Komplex-Dach z Piły — zadzwoń: 601 568 841.',
      intro: [
        'Szczecinek leży na północ od Piły, w województwie zachodniopomorskim — to jeden z dalszych kierunków w naszym obszarze działania.',
        'W Szczecinku i okolicach oferujemy wykonanie dachów, wymianę pokryć, przeglądy i serwis, a zimą także odśnieżanie dachów. Zadzwoń i opisz zakres — ustalimy termin dojazdu.',
      ],
      nearby: ['Okonek', 'Borne Sulinowo', 'Barwice'],
      faq: [
        { q: 'Czy dojeżdżacie z Piły do Szczecinka?', a: 'Tak, Szczecinek mieści się w naszym obszarze działania, w promieniu około 100 km od Piły.' },
        { q: 'Czy odśnieżacie dachy w Szczecinku?', a: 'Tak, odśnieżamy dachy domów, wspólnot mieszkaniowych i obiektów firmowych. Zadzwoń pod numer 601 568 841.' },
      ],
    },
  },
  { name: 'Wronki', slug: 'wronki', locative: 'Wronkach', lat: 52.71, lon: 16.38, county: 'szamotulski', voivodeship: 'wielkopolskie', major: true, indexable: false },
  { name: 'Rogoźno', slug: 'rogozno', locative: 'Rogoźnie', lat: 52.752, lon: 16.993, county: 'obornicki', voivodeship: 'wielkopolskie', major: true, indexable: false },
  { name: 'Oborniki', slug: 'oborniki', locative: 'Obornikach', lat: 52.648, lon: 16.814, county: 'obornicki', voivodeship: 'wielkopolskie', major: true, indexable: false },
  { name: 'Nakło nad Notecią', slug: 'naklo-nad-notecia', locative: 'Nakle nad Notecią', lat: 53.142, lon: 17.601, county: 'nakielski', voivodeship: 'kujawsko-pomorskie', major: true, indexable: false },
  { name: 'Ujście', slug: 'ujscie', locative: 'Ujściu', lat: 53.053, lon: 16.733, county: 'pilski', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Kaczory', slug: 'kaczory', locative: 'Kaczorach', lat: 53.106, lon: 16.893, county: 'pilski', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Krajenka', slug: 'krajenka', locative: 'Krajence', lat: 53.3, lon: 16.985, county: 'złotowski', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Jastrowie', slug: 'jastrowie', locative: 'Jastrowiu', lat: 53.42, lon: 16.818, county: 'złotowski', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Okonek', slug: 'okonek', locative: 'Okonku', lat: 53.54, lon: 16.84, county: 'złotowski', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Wyrzysk', slug: 'wyrzysk', locative: 'Wyrzysku', lat: 53.153, lon: 17.268, county: 'pilski', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Łobżenica', slug: 'lobzenica', locative: 'Łobżenicy', lat: 53.264, lon: 17.254, county: 'pilski', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Szamocin', slug: 'szamocin', locative: 'Szamocinie', lat: 53.029, lon: 17.127, county: 'chodzieski', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Margonin', slug: 'margonin', locative: 'Margoninie', lat: 52.973, lon: 17.093, county: 'chodzieski', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Budzyń', slug: 'budzyn', locative: 'Budzyniu', lat: 52.89, lon: 16.99, county: 'chodzieski', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Wieleń', slug: 'wielen', locative: 'Wieleniu', lat: 52.894, lon: 16.16, county: 'czarnkowsko-trzcianecki', voivodeship: 'wielkopolskie', indexable: false },
  { name: 'Człopa', slug: 'czlopa', locative: 'Człopie', lat: 53.09, lon: 16.12, county: 'wałecki', voivodeship: 'zachodniopomorskie', indexable: false },
  { name: 'Tuczno', slug: 'tuczno', locative: 'Tucznie', lat: 53.193, lon: 16.149, county: 'wałecki', voivodeship: 'zachodniopomorskie', indexable: false },
  { name: 'Mirosławiec', slug: 'miroslawiec', locative: 'Mirosławcu', lat: 53.343, lon: 16.084, county: 'wałecki', voivodeship: 'zachodniopomorskie', indexable: false },
  { name: 'Czaplinek', slug: 'czaplinek', locative: 'Czaplinku', lat: 53.558, lon: 16.233, county: 'drawski', voivodeship: 'zachodniopomorskie', indexable: false },
  { name: 'Debrzno', slug: 'debrzno', locative: 'Debrznie', lat: 53.538, lon: 17.235, county: 'człuchowski', voivodeship: 'pomorskie', indexable: false },
];

const toRad = (d: number) => (d * Math.PI) / 180;

/** Odległość w linii prostej od centrum Piły (km, zaokrąglona do 5) */
export function distanceKm(l: { lat: number; lon: number }) {
  const { lat, lon } = business.geo;
  const dLat = toRad(l.lat - lat);
  const dLon = toRad(l.lon - lon);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat)) * Math.cos(toRad(l.lat)) * Math.sin(dLon / 2) ** 2;
  const km = 6371 * 2 * Math.asin(Math.sqrt(a));
  return Math.max(5, Math.round(km / 5) * 5);
}

/** Kierunek od Piły w języku polskim */
export function direction(l: { lat: number; lon: number }) {
  const dx = (l.lon - business.geo.lon) * Math.cos(toRad(business.geo.lat));
  const dy = l.lat - business.geo.lat;
  const deg = (Math.atan2(dx, dy) * 180) / Math.PI;
  const names = ['północ', 'północny wschód', 'wschód', 'południowy wschód', 'południe', 'południowy zachód', 'zachód', 'północny zachód'];
  return names[(Math.round(deg / 45) + 8) % 8];
}

/** Pozycja na mapie w km względem Piły (x na wschód, y na północ) */
export function offsetKm(l: { lat: number; lon: number }) {
  return {
    x: (l.lon - business.geo.lon) * 111.32 * Math.cos(toRad(business.geo.lat)),
    y: (l.lat - business.geo.lat) * 110.57,
  };
}

export const locationPages = locations.filter((l) => l.page);

/** Ścieżki stron lokalnych wyłączonych z indeksowania (noindex, follow; poza sitemapą) */
export const noindexLocationPaths = locationPages.filter((l) => !l.indexable).map((l) => `/obszar-dzialania/${l.slug}/`);
