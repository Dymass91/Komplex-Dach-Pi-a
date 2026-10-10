import { business } from './site';

/**
 * Miejscowości w obszarze działania (ok. 100 km od Piły).
 * Poznań i Bydgoszcz są celowo pominięte.
 *
 * Strona lokalna powstaje tylko dla miejscowości z uzupełnionym polem `page` —
 * z unikalną treścią, a nie z podmienioną nazwą miasta. Aby dodać kolejną stronę,
 * dopisz `page` z własnym opisem i pytaniami.
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
  page?: {
    metaDescription: string;
    intro: string[];
    nearby: string[];
    faq: { q: string; a: string }[];
  };
};

export const locations: Location[] = [
  {
    name: 'Wałcz', slug: 'walcz', locative: 'Wałczu', lat: 53.274, lon: 16.471, county: 'wałecki', voivodeship: 'zachodniopomorskie', major: true,
    page: {
      metaDescription: 'Dekarz Wałcz: wykonanie dachów, naprawy przecieków, przeglądy i odśnieżanie. Komplex-Dach z Piły — zadzwoń: 601 568 841.',
      intro: [
        'Wałcz leży na północny zachód od Piły, już po stronie województwa zachodniopomorskiego — to jedno z miast, do których dojeżdżamy najczęściej poza Piłą.',
        'Do Wałcza i okolicznych miejscowości przyjeżdżamy zarówno do nowych dachów, jak i do napraw, przeglądów czy odśnieżania. Przy jednym wyjeździe często łączymy kilka zleceń z okolicy — dlatego warto zadzwonić z wyprzedzeniem i opisać, czego potrzebujesz.',
      ],
      nearby: ['Tuczno', 'Mirosławiec', 'Człopa'],
      faq: [
        { q: 'Czy Wałcz jest w waszym obszarze działania, mimo że to inne województwo?', a: 'Tak. Pracujemy w promieniu około 100 km od Piły, niezależnie od granic województw. Wałcz jest jednym z bliższych miast.' },
        { q: 'Czy dojeżdżacie też do miejscowości wokół Wałcza?', a: 'Tak, m.in. w kierunku Tuczna, Mirosławca i Człopy. Zadzwoń i podaj miejscowość — potwierdzimy dojazd.' },
      ],
    },
  },
  {
    name: 'Złotów', slug: 'zlotow', locative: 'Złotowie', lat: 53.363, lon: 17.041, county: 'złotowski', voivodeship: 'wielkopolskie', major: true,
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
    name: 'Chodzież', slug: 'chodziez', locative: 'Chodzieży', lat: 52.995, lon: 16.92, county: 'chodzieski', voivodeship: 'wielkopolskie', major: true,
    page: {
      metaDescription: 'Dekarz Chodzież: wykonanie i naprawa dachów, przeglądy, serwis, odśnieżanie. Komplex-Dach z Piły — zadzwoń: 601 568 841.',
      intro: [
        'Chodzież leży na południowy wschód od Piły. To miasto i okolice, do których mamy blisko.',
        'Pracujemy tu dla właścicieli domów, firm i wspólnot mieszkaniowych. Zajmujemy się zarówno kompleksowym wykonaniem dachów, jak i naprawami, serwisem oraz przeglądami — także przedzimowymi.',
      ],
      nearby: ['Ujście', 'Margonin', 'Szamocin', 'Budzyń'],
      faq: [
        { q: 'Czy w Chodzieży wykonujecie prace dla wspólnot mieszkaniowych?', a: 'Tak, pracujemy dla wspólnot mieszkaniowych i zarządców nieruchomości, a także dla klientów indywidualnych i firm.' },
        { q: 'Czy dojeżdżacie do Margonina i Szamocina?', a: 'Tak, to miejscowości w naszym obszarze działania.' },
      ],
    },
  },
  {
    name: 'Trzcianka', slug: 'trzcianka', locative: 'Trzciance', lat: 53.041, lon: 16.454, county: 'czarnkowsko-trzcianecki', voivodeship: 'wielkopolskie', major: true,
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
    name: 'Czarnków', slug: 'czarnkow', locative: 'Czarnkowie', lat: 52.902, lon: 16.563, county: 'czarnkowsko-trzcianecki', voivodeship: 'wielkopolskie', major: true,
    page: {
      metaDescription: 'Dekarz Czarnków: wykonanie dachów, naprawy, przeglądy, docieplenia poddaszy. Komplex-Dach z Piły — zadzwoń: 601 568 841.',
      intro: [
        'Czarnków, siedziba powiatu czarnkowsko-trzcianeckiego, leży nad Notecią, na południe od Piły.',
        'Obsługujemy Czarnków i okoliczne miejscowości: wykonujemy dachy, naprawiamy przecieki, ocieplamy poddasza i wykonujemy przeglądy. Przy dalszych wyjazdach terminy ustalamy z wyprzedzeniem — najlepiej zadzwonić i opisać zakres prac.',
      ],
      nearby: ['Wieleń', 'Lubasz', 'Trzcianka'],
      faq: [
        { q: 'Czy dojeżdżacie do Czarnkowa na przegląd dachu?', a: 'Tak. Przegląd możemy połączyć z innymi zleceniami w okolicy — zadzwoń, by ustalić termin.' },
        { q: 'Czy wykonujecie docieplenie poddasza w Czarnkowie?', a: 'Tak, docieplenie poddasza wykonujemy samodzielnie lub razem z pracami dachowymi.' },
      ],
    },
  },
  {
    name: 'Wągrowiec', slug: 'wagrowiec', locative: 'Wągrowcu', lat: 52.809, lon: 17.199, county: 'wągrowiecki', voivodeship: 'wielkopolskie', major: true,
    page: {
      metaDescription: 'Dekarz Wągrowiec: pokrycia dachowe, naprawy i serwis dachów, odśnieżanie. Komplex-Dach z Piły — tel. 601 568 841.',
      intro: [
        'Wągrowiec leży na południowy wschód od Piły. To dalszy kierunek w naszym obszarze działania, dlatego prace planujemy z wyprzedzeniem.',
        'W Wągrowcu i okolicach realizujemy przede wszystkim większe prace — wykonanie i wymianę dachów, serwis dachów obiektów firmowych i wspólnot — ale warto zadzwonić także z mniejszą sprawą. Powiemy, kiedy możemy przyjechać.',
      ],
      nearby: ['Gołańcz', 'Margonin', 'Mieścisko'],
      faq: [
        { q: 'Czy Wągrowiec jest w waszym zasięgu?', a: 'Tak, mieści się w promieniu około 100 km od Piły.' },
        { q: 'Czy wykonujecie serwis dachów obiektów firmowych w Wągrowcu?', a: 'Tak. Zakres serwisu ustalamy indywidualnie, zwykle po przeglądzie dachu.' },
      ],
    },
  },
  {
    name: 'Szczecinek', slug: 'szczecinek', locative: 'Szczecinku', lat: 53.708, lon: 16.699, county: 'szczecinecki', voivodeship: 'zachodniopomorskie', major: true,
    page: {
      metaDescription: 'Dekarz Szczecinek: wykonanie dachów, naprawy, przeglądy przed zimą, odśnieżanie. Komplex-Dach z Piły — zadzwoń: 601 568 841.',
      intro: [
        'Szczecinek leży na północ od Piły, na Pojezierzu Drawskim, w województwie zachodniopomorskim — to jeden z dalszych kierunków w naszym obszarze działania.',
        'Do Szczecinka i okolic przyjeżdżamy przede wszystkim do zaplanowanych prac: wykonania dachów, wymiany pokryć, przeglądów i serwisu. Zimą zajmujemy się też odśnieżaniem dachów. Zadzwoń i opisz zakres — ustalimy termin dojazdu.',
      ],
      nearby: ['Okonek', 'Borne Sulinowo', 'Barwice'],
      faq: [
        { q: 'Czy dojeżdżacie z Piły do Szczecinka?', a: 'Tak, Szczecinek mieści się w naszym obszarze działania. Prace w tym rejonie planujemy z wyprzedzeniem.' },
        { q: 'Czy odśnieżacie dachy w Szczecinku?', a: 'Tak. Zimą warto zadzwonić wcześniej, bo po intensywnych opadach zgłoszeń przybywa.' },
      ],
    },
  },
  { name: 'Wronki', slug: 'wronki', locative: 'Wronkach', lat: 52.71, lon: 16.38, county: 'szamotulski', voivodeship: 'wielkopolskie', major: true },
  { name: 'Rogoźno', slug: 'rogozno', locative: 'Rogoźnie', lat: 52.752, lon: 16.993, county: 'obornicki', voivodeship: 'wielkopolskie', major: true },
  { name: 'Oborniki', slug: 'oborniki', locative: 'Obornikach', lat: 52.648, lon: 16.814, county: 'obornicki', voivodeship: 'wielkopolskie', major: true },
  { name: 'Nakło nad Notecią', slug: 'naklo-nad-notecia', locative: 'Nakle nad Notecią', lat: 53.142, lon: 17.601, county: 'nakielski', voivodeship: 'kujawsko-pomorskie', major: true },
  { name: 'Ujście', slug: 'ujscie', locative: 'Ujściu', lat: 53.053, lon: 16.733, county: 'pilski', voivodeship: 'wielkopolskie' },
  { name: 'Kaczory', slug: 'kaczory', locative: 'Kaczorach', lat: 53.106, lon: 16.893, county: 'pilski', voivodeship: 'wielkopolskie' },
  { name: 'Krajenka', slug: 'krajenka', locative: 'Krajence', lat: 53.3, lon: 16.985, county: 'złotowski', voivodeship: 'wielkopolskie' },
  { name: 'Jastrowie', slug: 'jastrowie', locative: 'Jastrowiu', lat: 53.42, lon: 16.818, county: 'złotowski', voivodeship: 'wielkopolskie' },
  { name: 'Okonek', slug: 'okonek', locative: 'Okonku', lat: 53.54, lon: 16.84, county: 'złotowski', voivodeship: 'wielkopolskie' },
  { name: 'Wyrzysk', slug: 'wyrzysk', locative: 'Wyrzysku', lat: 53.153, lon: 17.268, county: 'pilski', voivodeship: 'wielkopolskie' },
  { name: 'Łobżenica', slug: 'lobzenica', locative: 'Łobżenicy', lat: 53.264, lon: 17.254, county: 'pilski', voivodeship: 'wielkopolskie' },
  { name: 'Szamocin', slug: 'szamocin', locative: 'Szamocinie', lat: 53.029, lon: 17.127, county: 'chodzieski', voivodeship: 'wielkopolskie' },
  { name: 'Margonin', slug: 'margonin', locative: 'Margoninie', lat: 52.973, lon: 17.093, county: 'chodzieski', voivodeship: 'wielkopolskie' },
  { name: 'Budzyń', slug: 'budzyn', locative: 'Budzyniu', lat: 52.89, lon: 16.99, county: 'chodzieski', voivodeship: 'wielkopolskie' },
  { name: 'Wieleń', slug: 'wielen', locative: 'Wieleniu', lat: 52.894, lon: 16.16, county: 'czarnkowsko-trzcianecki', voivodeship: 'wielkopolskie' },
  { name: 'Człopa', slug: 'czlopa', locative: 'Człopie', lat: 53.09, lon: 16.12, county: 'wałecki', voivodeship: 'zachodniopomorskie' },
  { name: 'Tuczno', slug: 'tuczno', locative: 'Tucznie', lat: 53.193, lon: 16.149, county: 'wałecki', voivodeship: 'zachodniopomorskie' },
  { name: 'Mirosławiec', slug: 'miroslawiec', locative: 'Mirosławcu', lat: 53.343, lon: 16.084, county: 'wałecki', voivodeship: 'zachodniopomorskie' },
  { name: 'Czaplinek', slug: 'czaplinek', locative: 'Czaplinku', lat: 53.558, lon: 16.233, county: 'drawski', voivodeship: 'zachodniopomorskie' },
  { name: 'Debrzno', slug: 'debrzno', locative: 'Debrznie', lat: 53.538, lon: 17.235, county: 'człuchowski', voivodeship: 'pomorskie' },
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
