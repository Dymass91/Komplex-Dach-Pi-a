// Galeria realizacji — 40 zdjęć zaakceptowanych przez właściciela (analiza: analiza-realizacji/).
// Podpisy opisują wyłącznie to, co widać na zdjęciu: bez miejscowości, klientów i dat.
// Na 28923 zamazano tablicę rejestracyjną i numer domu (kopia robocza, oryginał bez zmian).
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/realizacje/*.jpg', { eager: true });
export const realizacjaImg = (id: string): ImageMetadata => {
  const m = files[`../assets/images/realizacje/${id}.jpg`];
  if (!m) throw new Error(`Brak zdjęcia realizacji ${id}`);
  return m.default;
};

export type Stage = 'przed' | 'w-trakcie' | 'po';
export type CategoryId = 'pokrycia' | 'kominy' | 'firmy' | 'inne' | 'mycie';

export const categories: { id: CategoryId; label: string }[] = [
  { id: 'pokrycia', label: 'Nowe dachy i wymiana pokrycia' },
  { id: 'kominy', label: 'Kominy i obróbki' },
  { id: 'firmy', label: 'Obiekty firmowe i gospodarcze' },
  { id: 'inne', label: 'Okna, dachy płaskie i inne' },
  { id: 'mycie', label: 'Mycie dachów' },
];

export const stageLabel: Record<Stage, string> = { przed: 'Przed', 'w-trakcie': 'W trakcie', po: 'Po' };

export type Realizacja = { id: string; group: string; cat: CategoryId; stage: Stage; caption: string; alt: string };

export const realizacje: Realizacja[] = [
  // Nowe dachy i wymiana pokrycia
  { id: '28923', group: 'R04', cat: 'pokrycia', stage: 'po', caption: 'Gotowy dach z grafitowej blachodachówki', alt: 'Parterowy dom z nowym dachem z grafitowej blachodachówki, widok od ulicy' },
  { id: '28922', group: 'R04', cat: 'pokrycia', stage: 'po', caption: 'Nowa połać z oknem dachowym', alt: 'Nowa połać z grafitowej blachodachówki z oknem dachowym, rusztowanie przy ścianie' },
  { id: '28938', group: 'R04', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Membrana i łaty pod nowe pokrycie', alt: 'Ekipa dekarska na dachu pokrytym membraną i łatami' },
  { id: '28934', group: 'R04', cat: 'pokrycia', stage: 'przed', caption: 'Stary dach przed wymianą pokrycia', alt: 'Dom ze starym pokryciem dachu i rusztowaniem przy elewacji' },
  { id: '28884', group: 'R01', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Układanie grafitowej blachodachówki', alt: 'Dom w trakcie krycia grafitową blachodachówką, rusztowanie i samochód firmowy Komplex-Dach' },
  { id: '28898', group: 'R01', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Łacenie połaci pod blachodachówkę', alt: 'Połać dachu z łatami i membraną, dekarze na dachu i rusztowanie' },
  { id: '28904', group: 'R01', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Rozbiórka starego pokrycia', alt: 'Dach po zdjęciu starego pokrycia z odsłoniętą więźbą' },
  { id: '28969', group: 'R05', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Dachówka ceramiczna i okna dachowe', alt: 'Dekarze kładący czerwoną dachówkę ceramiczną na kamienicy w siatce ochronnej' },
  { id: '28967', group: 'R05', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Prace przy kalenicy — dachówka ceramiczna', alt: 'Dekarze przy kalenicy dachu z czerwonej dachówki ceramicznej' },
  { id: '28978', group: 'R05', cat: 'pokrycia', stage: 'po', caption: 'Nowy dach z dachówki ceramicznej', alt: 'Kamienica z nowym dachem z czerwonej dachówki, elewacja w siatce ochronnej' },
  { id: '29010', group: 'R05', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Membrana i łaty przy ścianie szczytowej', alt: 'Membrana dachowa i łaty wzdłuż ściany szczytowej z kominem' },
  { id: '29030', group: 'R05', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Membrana dachowa i łacenie', alt: 'Połać pokryta zieloną membraną z łatami, rusztowanie przy budynku' },
  { id: '28957', group: 'R06', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Prace przy kalenicy', alt: 'Dekarze przy kalenicy piętrowego domu z rusztowaniem' },
  { id: '28973', group: 'R06', cat: 'pokrycia', stage: 'po', caption: 'Gotowe pokrycie z dachówki ceramicznej', alt: 'Piętrowy dom z nowym dachem z pomarańczowej dachówki ceramicznej' },
  { id: '29000', group: 'R06', cat: 'pokrycia', stage: 'po', caption: 'Nowy dach — widok frontowy', alt: 'Front domu z nowym dachem z dachówki ceramicznej i rusztowaniem' },
  { id: '29054', group: 'R09', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Łacenie i przygotowanie dachówek', alt: 'Dach nad garażem z łatami i ułożonymi dachówkami przygotowanymi do krycia' },
  { id: '29055', group: 'R09', cat: 'pokrycia', stage: 'po', caption: 'Gotowe pokrycie z ciemnej dachówki', alt: 'Dach nad garażem kryty ciemną dachówką' },
  { id: '29070', group: 'R12', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Wymiana pokrycia na blachodachówkę', alt: 'Dom w trakcie wymiany pokrycia: część dachu w łatach, część w czerwonej blachodachówce' },
  { id: '29071', group: 'R12', cat: 'pokrycia', stage: 'w-trakcie', caption: 'Stare i nowe pokrycie obok siebie', alt: 'Ściana szczytowa domu z częściowo nową czerwoną blachodachówką' },
  { id: '29133', group: 'R17', cat: 'pokrycia', stage: 'po', caption: 'Dach z czarnej dachówki i zadaszenie', alt: 'Dach z czarnej dachówki z dwoma kominami, oknami dachowymi i drewnianym zadaszeniem' },
  // Kominy i obróbki
  { id: '29056', group: 'R10', cat: 'kominy', stage: 'po', caption: 'Komin obłożony blachą na rąbek', alt: 'Komin obłożony grafitową blachą na dachu z grafitowej dachówki' },
  { id: '29058', group: 'R10', cat: 'kominy', stage: 'po', caption: 'Obróbka komina z rurą spalinową', alt: 'Komin obłożony blachą ze stalową rurą spalinową, okno dachowe poniżej' },
  { id: '29065', group: 'R11', cat: 'kominy', stage: 'po', caption: 'Obróbka ceglanego komina', alt: 'Ceglany komin z czerwoną obróbką blacharską na blachodachówce' },
  { id: '29067', group: 'R11', cat: 'kominy', stage: 'po', caption: 'Obróbka komina — widok z góry', alt: 'Obróbka blacharska u podstawy ceglanego komina, widok z połaci' },
  { id: '29126', group: 'R16', cat: 'kominy', stage: 'po', caption: 'Komin obłożony blachą przy oknie dachowym', alt: 'Komin obłożony blachą na dachu z brązowej dachówki, obok okno dachowe' },
  { id: '29038', group: 'R07', cat: 'kominy', stage: 'po', caption: 'Komin obłożony brązową blachą', alt: 'Komin obłożony brązową blachą z czapą, w tle panele fotowoltaiczne' },
  { id: '29042', group: 'R07', cat: 'kominy', stage: 'w-trakcie', caption: 'Obróbka komina przed montażem czapy', alt: 'Komin obłożony brązową blachą bez czapy na dachu z blachy trapezowej' },
  // Obiekty firmowe i gospodarcze
  { id: '29084', group: 'R13', cat: 'firmy', stage: 'po', caption: 'Dach hali z blachy trapezowej', alt: 'Dach hali przemysłowej z blachy trapezowej przy ścianie z szarych paneli' },
  { id: '29086', group: 'R13', cat: 'firmy', stage: 'po', caption: 'Gotowe obróbki attyki hali', alt: 'Gotowe obróbki blacharskie attyki na dachu hali przemysłowej' },
  { id: '29096', group: 'R13', cat: 'firmy', stage: 'w-trakcie', caption: 'Przygotowanie attyki pod obróbkę', alt: 'Płyty OSB na attyce hali przed montażem obróbek blacharskich' },
  { id: '29085', group: 'R13', cat: 'firmy', stage: 'po', caption: 'Attyka hali po montażu obróbek', alt: 'Ściana hali przemysłowej z gotową obróbką attyki i drabiną techniczną' },
  { id: '29109', group: 'R14', cat: 'firmy', stage: 'w-trakcie', caption: 'Wymiana płyt falistych', alt: 'Budynek gospodarczy z częściowo wymienionymi płytami falistymi na dachu' },
  { id: '29116', group: 'R14', cat: 'firmy', stage: 'w-trakcie', caption: 'Nowe i stare płyty faliste', alt: 'Dach budynku gospodarczego z nowymi i starymi płytami falistymi oraz wywietrznikami' },
  { id: '29119', group: 'INNE', cat: 'firmy', stage: 'po', caption: 'Obróbka kalenicy z wywietrznikami', alt: 'Zielona blacha trapezowa z obróbką kalenicy i białymi wywietrznikami' },
  { id: '29123', group: 'INNE', cat: 'firmy', stage: 'po', caption: 'Dach z zielonej blachy trapezowej', alt: 'Kalenica i połać z zielonej blachy trapezowej na budynku gospodarczym' },
  { id: '28912', group: 'R02', cat: 'firmy', stage: 'w-trakcie', caption: 'Wiata obijana blachą trapezową', alt: 'Dekarze przy wiacie obijanej blachą trapezową' },
  // Okna, dachy płaskie i inne
  { id: '28959', group: 'INNE', cat: 'inne', stage: 'w-trakcie', caption: 'Montaż okna dachowego', alt: 'Dekarz montujący okno dachowe w dachu z czerwonej dachówki ceramicznej' },
  { id: '28916', group: 'R03', cat: 'inne', stage: 'po', caption: 'Dach płaski — obróbka krawędzi', alt: 'Dach płaski kryty papą z nową obróbką blacharską krawędzi' },
  { id: '29151', group: 'INNE', cat: 'inne', stage: 'po', caption: 'Pokrycie z blachy na rąbek', alt: 'Dach z blachy na rąbek stojący z widokiem na ogród' },
  // Mycie dachów
  { id: '29153', group: 'R18', cat: 'mycie', stage: 'w-trakcie', caption: 'Mycie dachu z podnośnika koszowego', alt: 'Mycie dachu rezydencji z kosza podnośnika' },
];

/**
 * Realizacje w kolejności wyświetlania — grupy zatwierdzone przez właściciela w katalogu analizy.
 * 'INNE' = pojedyncze ujęcia oraz zdjęcia bez potwierdzonego przypisania (29119, 29123) — bez numeru realizacji.
 */
export const grupy: { id: string; title: string; text: string }[] = [
  { id: 'R04', title: 'Wymiana pokrycia na grafitową dachówkę', text: 'Dom z poddaszem: od starego pokrycia, przez membranę i łaty, do gotowego dachu z oknem dachowym.' },
  { id: 'R06', title: 'Nowy dach z dachówki ceramicznej', text: 'Dom piętrowy: prace przy kalenicy i gotowe pokrycie z dachówki ceramicznej.' },
  { id: 'R05', title: 'Dachówka ceramiczna na kamienicy', text: 'Membrana i łacenie, układanie dachówki ceramicznej i montaż okien dachowych.' },
  { id: 'R01', title: 'Nowe pokrycie z grafitowej blachodachówki', text: 'Dom parterowy: rozbiórka starego pokrycia, łacenie i krycie blachodachówką.' },
  { id: 'R09', title: 'Nowe pokrycie dachu nad garażem', text: 'Łacenie i przygotowanie dachówek, a potem gotowe pokrycie z ciemnej dachówki.' },
  { id: 'R12', title: 'Wymiana pokrycia na czerwoną blachodachówkę', text: 'Stare i nowe pokrycie w trakcie wymiany.' },
  { id: 'R13', title: 'Hala przemysłowa — dach i obróbki attyki', text: 'Przygotowanie attyki z płyt OSB, montaż obróbek blacharskich i gotowy dach z blachy trapezowej.' },
  { id: 'R14', title: 'Budynek gospodarczy — wymiana płyt falistych', text: 'Nowe płyty faliste układane w miejsce starych.' },
  { id: 'R02', title: 'Wiata obita blachą trapezową', text: 'Obudowa wiaty z blachy trapezowej.' },
  { id: 'R17', title: 'Dach z czarnej dachówki i nowe zadaszenie', text: 'Dach z dwoma kominami i oknami dachowymi oraz drewniane zadaszenie.' },
  { id: 'R07', title: 'Obróbka komina brązową blachą', text: 'Komin przed montażem czapy i po zakończeniu obróbki.' },
  { id: 'R10', title: 'Kominy obłożone grafitową blachą', text: 'Kominy obłożone blachą na dachu z grafitowej dachówki.' },
  { id: 'R11', title: 'Obróbka ceglanego komina', text: 'Obróbka blacharska u podstawy komina na blachodachówce.' },
  { id: 'R16', title: 'Komin obłożony blachą przy oknie dachowym', text: 'Komin na dachu z brązowej dachówki.' },
  { id: 'R03', title: 'Dach płaski — obróbka krawędzi', text: 'Nowa obróbka blacharska krawędzi dachu krytego papą.' },
  { id: 'R18', title: 'Mycie dachu z podnośnika koszowego', text: 'Mycie dachu rezydencji z kosza podnośnika.' },
  { id: 'INNE', title: 'Pozostałe zdjęcia z pracy', text: 'Pojedyncze ujęcia z różnych prac.' },
];

/** Sprawdzone zestawy z tej samej realizacji (pewność wysoka w analizie) */
export const pary: { from: string; to: string; title: string; text: string }[] = [
  { from: '29054', to: '29055', title: 'Nowe pokrycie z ciemnej dachówki', text: 'Łacenie i przygotowanie dachówek, a potem gotowy dach — ten sam kadr.' },
  { from: '28938', to: '28922', title: 'Wymiana pokrycia na grafitową dachówkę', text: 'Membrana i łaty, a potem gotowa połać z oknem dachowym.' },
  { from: '28957', to: '29000', title: 'Dach z dachówki ceramicznej', text: 'Prace przy kalenicy, a potem gotowe pokrycie.' },
  { from: '29096', to: '29086', title: 'Obróbki attyki na hali', text: 'Płyty OSB na attyce, a potem gotowa obróbka blacharska.' },
];
