import type { ImageMetadata } from 'astro';

import budynekWieczor from '../assets/images/budynek-elewacja-metalowa-wieczor.webp';
import kominCzerwony from '../assets/images/obrobka-komina-blacha-czerwona.webp';
import kominGrafitowy from '../assets/images/obrobka-komina-blacha-grafitowa.webp';
import warsztatElement from '../assets/images/warsztat-element-blacharski.webp';
import widokZAuta from '../assets/images/dachy-okolice-pily-widok-z-auta.webp';
import autoOsiedle from '../assets/images/samochod-firmowy-osiedle.webp';
import autoBaza from '../assets/images/samochod-firmowy-baza.webp';
import gwozdziarkaWalizka from '../assets/images/gwozdziarka-milwaukee-walizka.webp';
import dachRusztowanie from '../assets/images/realizacja-dach-grafitowy-rusztowanie.webp';
import dachLukarnaSzczyt from '../assets/images/realizacja-dach-grafitowy-lukarna-szczyt.webp';
import domZLukarna from '../assets/images/realizacja-dach-dom-z-lukarna.webp';
import domWBudowie from '../assets/images/realizacja-dach-dom-w-budowie.webp';
import budowaWielorodzinny from '../assets/images/budowa-budynek-wielorodzinny.webp';
import narzedziaWalizka from '../assets/images/narzedzia-blacharskie-walizka.jpg';
import warsztatStol from '../assets/images/warsztat-stol-narzedzia.jpg';
import gwozdziarkaWarsztat from '../assets/images/gwozdziarka-milwaukee-warsztat.jpg';
import gwozdziarkiDwie from '../assets/images/gwozdziarki-milwaukee-dwie-walizki.jpg';
import lukarnaStaryDach from '../assets/images/lukarna-obrobka-stary-dach.jpg';
import retuszBudynek from '../assets/images/retusz-budynek-elewacja-metalowa.png';
import retuszKominy from '../assets/images/retusz-obrobki-kominow.png';

export type Photo = {
  src: ImageMetadata;
  alt: string;
  /** true = obraz poprawiony cyfrowo (ChatGPT) — tylko dekoracyjnie, zawsze z adnotacją */
  retouched?: boolean;
};

export const photos = {
  budynekWieczor: { src: budynekWieczor, alt: 'Nowoczesny budynek z ciemną elewacją z blachy na tle wieczornego, niebieskiego nieba' },
  kominCzerwony: { src: kominCzerwony, alt: 'Komin obłożony czerwoną blachą płaską z obróbką przy grafitowej blachodachówce' },
  kominGrafitowy: { src: kominGrafitowy, alt: 'Komin obłożony grafitową blachą na rąbek z obróbką u podstawy na dachu' },
  warsztatElement: { src: warsztatElement, alt: 'Element blacharski z blachy ocynkowanej przygotowany w warsztacie' },
  widokZAuta: { src: widokZAuta, alt: 'Domy z ciemnymi dachami widziane z samochodu w drodze do klienta w okolicach Piły' },
  autoOsiedle: { src: autoOsiedle, alt: 'Oznakowany samochód firmowy Komplex-Dach z drabiną na dachu, zaparkowany na osiedlu' },
  autoBaza: { src: autoBaza, alt: 'Samochód firmowy Komplex-Dach z numerem telefonu 601 568 841 na burcie' },
  gwozdziarkaWalizka: { src: gwozdziarkaWalizka, alt: 'Akumulatorowa gwoździarka Milwaukee w walizce transportowej' },
  dachRusztowanie: { src: dachRusztowanie, alt: 'Dach z grafitowym pokryciem i rusztowaniem przy budynku w trakcie prac dekarskich' },
  dachLukarnaSzczyt: { src: dachLukarnaSzczyt, alt: 'Dom z grafitowym pokryciem dachowym, lukarną i obitym szczytem' },
  domZLukarna: { src: domZLukarna, alt: 'Dom jednorodzinny z nowym grafitowym pokryciem dachu i lukarną' },
  domWBudowie: { src: domWBudowie, alt: 'Dom w trakcie budowy z grafitowym dachem i obrobionym kominem' },
  budowaWielorodzinny: { src: budowaWielorodzinny, alt: 'Plac budowy budynku wielorodzinnego z rusztowaniami i dachem w trakcie prac' },
  narzedziaWalizka: { src: narzedziaWalizka, alt: 'Walizka z profesjonalnymi narzędziami blacharskimi na stole warsztatowym' },
  warsztatStol: { src: warsztatStol, alt: 'Stół w warsztacie blacharskim z narzędziami i zaginarką w tle' },
  gwozdziarkaWarsztat: { src: gwozdziarkaWarsztat, alt: 'Gwoździarka Milwaukee M18 FUEL na stole w warsztacie' },
  gwozdziarkiDwie: { src: gwozdziarkiDwie, alt: 'Dwie gwoździarki Milwaukee FUEL w walizkach na stole warsztatowym' },
  lukarnaStaryDach: { src: lukarnaStaryDach, alt: 'Lukarna z obróbką blacharską na starym dachu z dachówki ceramicznej' },
  retuszBudynek: { src: retuszBudynek, alt: 'Budynek z ciemną elewacją z blachy o zmierzchu — kadr poprawiony cyfrowo', retouched: true },
  retuszKominy: { src: retuszKominy, alt: 'Dwie obróbki kominów z blachy: czerwona i grafitowa — kadr poprawiony cyfrowo', retouched: true },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Galeria realizacji — wyłącznie autentyczne, nieretuszowane zdjęcia */
export const portfolio: { key: PhotoKey; caption: string }[] = [
  { key: 'domZLukarna', caption: 'Pokrycie dachu domu jednorodzinnego z lukarną' },
  { key: 'dachLukarnaSzczyt', caption: 'Dach z lukarną i obitym szczytem' },
  { key: 'domWBudowie', caption: 'Dach nowego domu z obróbką komina' },
  { key: 'dachRusztowanie', caption: 'Prace dekarskie przy okapie' },
  { key: 'kominCzerwony', caption: 'Obróbka komina — blacha czerwona' },
  { key: 'kominGrafitowy', caption: 'Obróbka komina — blacha grafitowa' },
  { key: 'lukarnaStaryDach', caption: 'Lukarna z obróbką na starym pokryciu' },
  { key: 'budynekWieczor', caption: 'Elewacja z blachy — wieczorem' },
  { key: 'budowaWielorodzinny', caption: 'Plac budowy budynku wielorodzinnego' },
];
