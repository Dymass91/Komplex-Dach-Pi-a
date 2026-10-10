import type { PhotoKey } from './images';

export type Drawing = 'window' | 'insulation' | 'snow' | 'estimate' | 'inspection' | 'service' | 'flashing';

export type Service = {
  slug: string;
  /** Nazwa w menu i listach */
  name: string;
  /** Dwuwierszowy tytuł karty: [pogrubiona część, dopisek] */
  card: [string, string];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** Autentyczne zdjęcie; gdy brak — rysunek techniczny */
  photo?: PhotoKey;
  drawing: Drawing;
  sections: { h2: string; body: string[]; list?: string[] }[];
  faq: { q: string; a: string }[];
  related: string[];
  /** Usługa opisana zachowawczo — zakres do potwierdzenia z właścicielem */
  conservative?: boolean;
};

export const services: Service[] = [
  {
    slug: 'wykonanie-dachow',
    name: 'Kompleksowe wykonanie dachów',
    card: ['Wykonanie', 'dachów'],
    metaTitle: 'Wykonanie dachów Piła — kompleksowe pokrycia dachowe | Komplex-Dach',
    metaDescription:
      'Kompleksowe wykonanie dachów w Pile i w promieniu ok. 100 km: pokrycia dachowe na nowych domach i przy wymianie starego dachu. Zadzwoń: 601 568 841.',
    h1: 'Kompleksowe wykonanie dachów w Pile i okolicach',
    lead:
      'Nowy dach to nie tylko pokrycie. To łaty, membrana, obróbki, rynny i dziesiątki detali, które decydują o tym, czy dach będzie szczelny. Wykonujemy dachy kompleksowo — na nowych budynkach i przy wymianie starego pokrycia.',
    photo: 'domZLukarna',
    drawing: 'service',
    sections: [
      {
        h2: 'Dach od konstrukcji po ostatnią obróbkę',
        body: [
          'Przy kompleksowym wykonaniu dachu bierzemy na siebie całość prac dekarskich: przygotowanie połaci, ułożenie warstw pod pokryciem, montaż pokrycia oraz obróbki wokół kominów, lukarn, okien dachowych i krawędzi dachu.',
          'Dzięki temu jedna ekipa odpowiada za to, jak poszczególne elementy dachu ze sobą współpracują. To ważne szczególnie w miejscach styku — przy kominach, koszach i lukarnach, gdzie najczęściej pojawiają się przecieki.',
        ],
      },
      {
        h2: 'Nowy dach i wymiana starego pokrycia',
        body: [
          'Pracujemy zarówno na budowach nowych domów, jak i przy wymianie pokryć na budynkach użytkowanych od lat. Przy wymianie starego dachu zawsze najpierw oceniamy stan konstrukcji i obróbek — od tego zależy zakres prac.',
        ],
        list: [
          'domy jednorodzinne w budowie i po latach użytkowania',
          'budynki firmowe i usługowe',
          'budynki wspólnot mieszkaniowych',
          'obiekty, przy których potrzebna jest wymiana lub uzupełnienie pokrycia',
        ],
      },
      {
        h2: 'Jak zacząć',
        body: [
          'Najprościej zadzwonić pod numer 601 568 841. Krótko opisz budynek i to, co chcesz zrobić z dachem — ustalimy, czy potrzebne są oględziny na miejscu i jak przygotować wycenę.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy wykonujecie dachy na nowych domach i przy wymianie starego pokrycia?',
        a: 'Tak. Wykonujemy dachy na nowych budynkach oraz wymieniamy pokrycia na budynkach użytkowanych. Przy wymianie najpierw oceniamy stan dachu, bo od niego zależy zakres prac.',
      },
      {
        q: 'Ile kosztuje wykonanie dachu?',
        a: 'Koszt zależy od powierzchni i kształtu dachu, rodzaju pokrycia, liczby kominów, okien i lukarn oraz stanu konstrukcji. Dlatego nie podajemy cen „z cennika” — wycenę przygotowujemy indywidualnie po rozmowie telefonicznej i, jeśli trzeba, oględzinach.',
      },
      {
        q: 'Czy dojeżdżacie poza Piłę?',
        a: 'Tak, pracujemy w Pile i w promieniu około 100 km od miasta.',
      },
    ],
    related: ['wycena-dachu', 'obrobki-blacharskie-kominow', 'montaz-okien-dachowych'],
  },
  {
    slug: 'naprawa-dachu',
    name: 'Naprawy dachów i usuwanie przecieków',
    card: ['Naprawy', 'i usuwanie przecieków'],
    metaTitle: 'Naprawa dachu Piła — usuwanie przecieków | Komplex-Dach',
    metaDescription:
      'Cieknie dach? Naprawy dachów i usuwanie przecieków w Pile i okolicach (ok. 100 km). Szukamy przyczyny, nie tylko śladu wody. Zadzwoń: 601 568 841.',
    h1: 'Naprawa dachu i usuwanie przecieków — Piła i okolice',
    lead:
      'Zaciek na suficie rzadko pojawia się dokładnie pod miejscem przecieku. Woda potrafi przejść po łatach i membranie kilka metrów. Dlatego przy naprawie zaczynamy od znalezienia przyczyny — dopiero potem naprawiamy.',
    photo: 'lukarnaStaryDach',
    drawing: 'flashing',
    sections: [
      {
        h2: 'Gdzie najczęściej przecieka dach',
        body: [
          'Większość przecieków nie bierze się z samego pokrycia, ale z miejsc, gdzie pokrycie styka się z innymi elementami budynku.',
        ],
        list: [
          'obróbki kominów i ścian wystających ponad dach',
          'kosze dachowe i połączenia połaci',
          'lukarny i okna dachowe',
          'uszkodzone, przesunięte lub pęknięte dachówki',
          'rynny i okapy, z których woda nie odpływa prawidłowo',
        ],
      },
      {
        h2: 'Co możesz zrobić od razu',
        body: [
          'Jeśli widzisz zaciek, zabezpiecz rzeczy pod nim i — jeśli to bezpieczne — zrób zdjęcie miejsca od środka. Nie wchodź na mokry lub oblodzony dach. Zadzwoń i opisz, gdzie pojawia się woda i przy jakiej pogodzie: przy każdym deszczu, przy wietrze z jednej strony, czy przy topnieniu śniegu. To bardzo pomaga w znalezieniu przyczyny.',
        ],
      },
      {
        h2: 'Naprawa zamiast wymiany — kiedy ma sens',
        body: [
          'Nie każdy przeciek oznacza konieczność wymiany dachu. Często wystarczy wymiana fragmentu pokrycia lub poprawienie obróbki. Po oględzinach powiemy wprost, czy naprawa wystarczy, czy stan dachu wymaga szerszych prac.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy naprawiacie także drobne usterki?',
        a: 'Tak. Zajmujemy się zarówno pojedynczymi przeciekami i uszkodzonymi elementami, jak i większymi naprawami.',
      },
      {
        q: 'Jak szybko możecie przyjechać do przecieku?',
        a: 'To zależy od bieżących zleceń i pogody. Zadzwoń pod 601 568 841 — powiemy uczciwie, kiedy możemy przyjechać.',
      },
      {
        q: 'Czy trzeba wymieniać cały dach, jeśli przecieka?',
        a: 'Niekoniecznie. Często wystarczy naprawa lokalna — wymiana fragmentu pokrycia albo poprawienie obróbki. Decyzję podejmujemy po ocenie stanu dachu.',
      },
    ],
    related: ['przeglad-dachu', 'obrobki-blacharskie-kominow', 'serwis-dachu'],
  },
  {
    slug: 'przeglad-dachu',
    name: 'Przeglądy dachów',
    card: ['Przeglądy', 'dachów'],
    metaTitle: 'Przegląd dachu Piła — ocena stanu pokrycia | Komplex-Dach',
    metaDescription:
      'Przeglądy dachów w Pile i okolicach: ocena pokrycia, obróbek, kominów i rynien. Dla domów, firm i wspólnot mieszkaniowych. Zadzwoń: 601 568 841.',
    h1: 'Przegląd dachu w Pile i okolicach',
    lead:
      'Przegląd dachu pozwala wychwycić drobne usterki, zanim staną się przeciekiem. To dobry pomysł przed zakupem domu, po silnym wietrze lub gdy dach ma już swoje lata.',
    photo: 'dachRusztowanie',
    drawing: 'inspection',
    sections: [
      {
        h2: 'Na co zwracamy uwagę',
        body: ['Podczas przeglądu oceniamy elementy, które najczęściej odpowiadają za problemy z dachem:'],
        list: [
          'stan pokrycia — pęknięcia, przesunięcia, ubytki',
          'obróbki kominów, ścian, lukarn i okien dachowych',
          'kosze, kalenice i krawędzie dachu',
          'rynny i odprowadzenie wody',
          'widoczne ślady zawilgocenia od strony poddasza, jeśli jest dostęp',
        ],
      },
      {
        h2: 'Kiedy warto zrobić przegląd',
        body: [
          'Przegląd ma sens po zimie i przed nią, po wichurze lub gradobiciu, przed zakupem używanego domu, a także wtedy, gdy na poddaszu pojawia się wilgoć lub zapach stęchlizny.',
          'Dla wspólnot mieszkaniowych i zarządców nieruchomości przegląd jest dobrym punktem wyjścia do zaplanowania prac na kolejne sezony.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy wykonujecie przeglądy dachów dla wspólnot i firm?',
        a: 'Tak. Pracujemy dla właścicieli domów, firm, wspólnot mieszkaniowych oraz zarządców obiektów komercyjnych i przemysłowych.',
      },
      {
        q: 'Co dostaję po przeglądzie?',
        a: 'Informację o stanie dachu i o tym, co wymaga naprawy teraz, a co można zaplanować później. Szczegóły ustalamy przy zamawianiu przeglądu.',
      },
    ],
    related: ['przeglad-dachu-przed-zima', 'serwis-dachu', 'naprawa-dachu'],
  },
  {
    slug: 'serwis-dachu',
    name: 'Serwis dachów',
    card: ['Serwis', 'dachów'],
    metaTitle: 'Serwis dachu Piła — bieżące utrzymanie dachów | Komplex-Dach',
    metaDescription:
      'Serwis dachów w Pile i okolicach: bieżące utrzymanie, drobne naprawy i kontrola obróbek. Dla domów, wspólnot i obiektów firmowych. Tel. 601 568 841.',
    h1: 'Serwis dachów — Piła i okolice',
    lead:
      'Dach, o który ktoś regularnie dba, rzadziej sprawia niespodzianki. Serwis to bieżące utrzymanie: drobne naprawy, poprawki obróbek i reagowanie na usterki, zanim urosną.',
    photo: 'dachLukarnaSzczyt',
    drawing: 'service',
    sections: [
      {
        h2: 'Co obejmuje serwis dachu',
        body: ['Zakres serwisu dobieramy do budynku. Najczęściej są to:'],
        list: [
          'wymiana pojedynczych uszkodzonych elementów pokrycia',
          'poprawki i uszczelnienia obróbek blacharskich',
          'kontrola miejsc narażonych na przecieki',
          'drobne prace przy rynnach i okapach',
        ],
      },
      {
        h2: 'Dla kogo',
        body: [
          'Serwis szczególnie przydaje się przy budynkach o dużej powierzchni dachu: obiektach firmowych, halach, budynkach wspólnot mieszkaniowych. Ale też przy domach, w których dach ma już kilkanaście lub kilkadziesiąt lat.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy serwisujecie dachy, których nie wykonywaliście?',
        a: 'Tak. Zajmujemy się dachami niezależnie od tego, kto je wykonał. Najpierw oceniamy stan dachu.',
      },
      {
        q: 'Jak ustalić zakres serwisu?',
        a: 'Zadzwoń pod 601 568 841 i opisz budynek. Zakres ustalamy indywidualnie, często po przeglądzie dachu.',
      },
    ],
    related: ['przeglad-dachu', 'naprawa-dachu', 'odsniezanie-dachow'],
  },
  {
    slug: 'wycena-dachu',
    name: 'Wycena prac dachowych',
    card: ['Wycena', 'prac dachowych'],
    metaTitle: 'Wycena dachu Piła — kosztorys prac dekarskich | Komplex-Dach',
    metaDescription:
      'Wycena prac dachowych w Pile i okolicach: nowy dach, wymiana pokrycia, naprawy, docieplenie poddasza. Umów wycenę telefonicznie: 601 568 841.',
    h1: 'Wycena prac dachowych w Pile i okolicach',
    lead:
      'Rzetelna wycena dachu wymaga wiedzy o budynku. Zaczynamy od rozmowy telefonicznej, a gdy trzeba — przyjeżdżamy obejrzeć dach na miejscu.',
    drawing: 'estimate',
    sections: [
      {
        h2: 'Od czego zależy cena dachu',
        body: ['Nie publikujemy cennika, bo każdy dach jest inny. Na koszt wpływają m.in.:'],
        list: [
          'powierzchnia i kształt dachu — liczba połaci, koszy, lukarn',
          'rodzaj pokrycia i materiałów',
          'liczba kominów, okien dachowych i innych przejść przez dach',
          'stan konstrukcji i istniejącego pokrycia przy wymianie',
          'dostęp do budynku',
        ],
      },
      {
        h2: 'Jak przygotować się do rozmowy',
        body: [
          'Pomoże nam, jeśli przy telefonie będziesz wiedzieć, jaki to budynek, mniej więcej jaka jest powierzchnia dachu i co chcesz zrobić. Jeśli masz projekt domu — świetnie, to ułatwia wycenę nowego dachu.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy wycena jest bezpłatna?',
        a: 'Zasady wyceny ustalamy w rozmowie telefonicznej — zależą od rodzaju prac i odległości. Zadzwoń pod 601 568 841.',
      },
      {
        q: 'Czy można wycenić dach na podstawie projektu?',
        a: 'Przy nowym budynku projekt bardzo pomaga w przygotowaniu wyceny. Przy wymianie pokrycia zwykle potrzebne są oględziny na miejscu.',
      },
    ],
    related: ['wykonanie-dachow', 'docieplenie-poddasza', 'naprawa-dachu'],
  },
  {
    slug: 'docieplenie-poddasza',
    name: 'Docieplenie poddasza',
    card: ['Ocieplanie', 'poddaszy'],
    metaTitle: 'Docieplenie poddasza Piła — ocieplenie dachu | Komplex-Dach',
    metaDescription:
      'Docieplenie poddasza w Pile i okolicach. Ocieplenie wykonane razem z pracami dachowymi lub jako osobna usługa. Zadzwoń: 601 568 841.',
    h1: 'Docieplenie poddasza — Piła i okolice',
    lead:
      'Przez źle ocieplone poddasze ucieka sporo ciepła, a latem robi się pod dachem gorąco. Docieplenie najlepiej zaplanować razem z pracami przy dachu — wtedy łatwiej o szczelne wykonanie.',
    drawing: 'insulation',
    sections: [
      {
        h2: 'Ocieplenie, które współpracuje z dachem',
        body: [
          'Docieplenie poddasza to nie tylko materiał izolacyjny. Ważne jest, jak izolacja współpracuje z warstwami dachu i czy jest prawidłowo zabezpieczona przed wilgocią. Dlatego dobrze, gdy dekarz zna cały układ dachu.',
        ],
      },
      {
        h2: 'Kiedy warto docieplić poddasze',
        list: [
          'przy wymianie pokrycia dachowego',
          'przy adaptacji poddasza na cele mieszkalne',
          'gdy poddasze jest zimne zimą i bardzo gorące latem',
          'gdy na dachu szybko topnieje śnieg nad częścią mieszkalną — to sygnał ucieczki ciepła',
        ],
        body: [],
      },
    ],
    faq: [
      {
        q: 'Czy docieplenie poddasza można wykonać bez wymiany dachu?',
        a: 'Często tak, ale zależy to od stanu dachu i rodzaju poddasza. Najlepiej opisać sytuację przez telefon — doradzimy, od czego zacząć.',
      },
      {
        q: 'Czy wykonujecie ocieplenie razem z nowym dachem?',
        a: 'Tak, docieplenie poddasza możemy zaplanować razem z pracami dachowymi.',
      },
    ],
    related: ['wykonanie-dachow', 'montaz-okien-dachowych', 'wycena-dachu'],
  },
  {
    slug: 'montaz-okien-dachowych',
    name: 'Montaż okien dachowych',
    card: ['Montaż', 'okien dachowych'],
    metaTitle: 'Montaż okien dachowych Piła — wymiana okien | Komplex-Dach',
    metaDescription:
      'Montaż i wymiana okien dachowych w Pile i okolicach, z prawidłowym obrobieniem w pokryciu. Zadzwoń i umów się: 601 568 841.',
    h1: 'Montaż okien dachowych w Pile i okolicach',
    lead:
      'Okno dachowe musi być szczelne w dwóch miejscach: w samym oknie i w pokryciu wokół niego. To drugie zależy od dekarza — dlatego montaż okien traktujemy jako pracę dekarską, a nie tylko stolarską.',
    drawing: 'window',
    sections: [
      {
        h2: 'Nowe okno i wymiana starego',
        body: [
          'Montujemy okna dachowe w nowych dachach, przy wymianie pokrycia oraz w istniejących dachach — także jako wymianę starego, nieszczelnego okna. Każdy montaż wymaga dopasowania kołnierza i obróbki do rodzaju pokrycia.',
        ],
      },
      {
        h2: 'Dlaczego obróbka ma znaczenie',
        body: [
          'Wiele przecieków wokół okien dachowych nie wynika z wady okna, tylko ze źle wykonanego połączenia z pokryciem. Przy montażu zwracamy uwagę na kołnierz, odprowadzenie wody i szczelność warstw pod pokryciem.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy można dodać okno dachowe w istniejącym dachu?',
        a: 'Zwykle tak — wymaga to rozebrania fragmentu pokrycia, przygotowania otworu i obrobienia okna. Możliwości oceniamy na miejscu.',
      },
      {
        q: 'Czy wymieniacie stare okna dachowe?',
        a: 'Tak, wymieniamy stare okna dachowe wraz z obróbką w pokryciu.',
      },
    ],
    related: ['docieplenie-poddasza', 'naprawa-dachu', 'wykonanie-dachow'],
  },
  {
    slug: 'odsniezanie-dachow',
    name: 'Odśnieżanie dachów',
    card: ['Odśnieżanie', 'dachów'],
    metaTitle: 'Odśnieżanie dachów Piła — domy, hale, budynki firmowe | Komplex-Dach',
    metaDescription:
      'Odśnieżanie dachów w Pile i okolicach: domy, budynki wspólnot, hale i obiekty firmowe. Zadzwoń: 601 568 841.',
    h1: 'Odśnieżanie dachów — Piła i okolice',
    lead:
      'Mokry, ciężki śnieg i nawisy przy okapach to obciążenie dla konstrukcji i zagrożenie dla przechodniów. Odśnieżanie dachu wymaga sprzętu, doświadczenia i wyczucia — łatwo przy nim uszkodzić pokrycie.',
    drawing: 'snow',
    sections: [
      {
        h2: 'Dachy, które odśnieżamy',
        list: [
          'dachy domów jednorodzinnych',
          'dachy budynków wspólnot mieszkaniowych',
          'dachy płaskie i o niewielkim spadku na obiektach firmowych',
          'dachy hal i budynków magazynowych',
        ],
        body: [],
      },
      {
        h2: 'Bezpiecznie dla dachu i ludzi',
        body: [
          'Przy odśnieżaniu dbamy o to, by nie uszkodzić pokrycia, obróbek i rynien. Zrzucanie śniegu wymaga też zabezpieczenia terenu przy budynku. Nie wchodź samodzielnie na zaśnieżony lub oblodzony dach — to bardzo niebezpieczne.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy odśnieżacie dachy hal i budynków firmowych?',
        a: 'Tak, odśnieżamy dachy domów, wspólnot mieszkaniowych oraz obiektów firmowych i magazynowych.',
      },
      {
        q: 'Jak umówić odśnieżanie?',
        a: 'Zadzwoń pod 601 568 841. Zimą zgłoszeń przybywa po intensywnych opadach — warto zadzwonić wcześniej.',
      },
    ],
    related: ['przeglad-dachu-przed-zima', 'serwis-dachu', 'naprawa-dachu'],
  },
  {
    slug: 'przeglad-dachu-przed-zima',
    name: 'Przeglądy przedzimowe',
    card: ['Przegląd', 'przed zimą'],
    metaTitle: 'Przegląd dachu przed zimą Piła | Komplex-Dach',
    metaDescription:
      'Przedzimowy przegląd dachu w Pile i okolicach: pokrycie, obróbki, kominy, rynny. Przygotuj dach na śnieg i mróz. Zadzwoń: 601 568 841.',
    h1: 'Przegląd dachu przed zimą — Piła i okolice',
    lead:
      'Zimą każda nieszczelność daje o sobie znać — woda zamarza, rozsadza szczeliny, a topniejący śnieg wnika tam, gdzie deszcz nie dociera. Jesienny przegląd to najprostszy sposób, by tego uniknąć.',
    photo: 'dachLukarnaSzczyt',
    drawing: 'inspection',
    sections: [
      {
        h2: 'Co sprawdzamy przed zimą',
        list: [
          'szczelność pokrycia i obróbek przy kominach',
          'kosze i miejsca, w których zalega śnieg',
          'rynny i rury spustowe — czy woda ma którędy odpłynąć',
          'mocowania elementów, które może obciążyć śnieg',
        ],
        body: [],
      },
      {
        h2: 'Najlepszy moment',
        body: [
          'Przegląd najlepiej wykonać jesienią, przy suchej pogodzie i przed pierwszymi mrozami. Jeśli wykryjemy usterkę, jest jeszcze czas na naprawę przed sezonem.',
        ],
      },
    ],
    faq: [
      {
        q: 'Kiedy umówić przegląd przed zimą?',
        a: 'Najlepiej we wrześniu lub październiku. Im bliżej mrozów, tym trudniej o dobrą pogodę do ewentualnej naprawy.',
      },
      {
        q: 'Czy przegląd przedzimowy jest dla wspólnot i firm?',
        a: 'Tak, wykonujemy go dla domów, wspólnot mieszkaniowych i obiektów firmowych.',
      },
    ],
    related: ['przeglad-dachu', 'odsniezanie-dachow', 'naprawa-dachu'],
  },
  {
    slug: 'obrobki-blacharskie-kominow',
    name: 'Obróbki blacharskie i kominy',
    card: ['Obróbki', 'blacharskie i kominy'],
    metaTitle: 'Obróbki blacharskie kominów Piła | Komplex-Dach',
    metaDescription:
      'Obróbki blacharskie dachu i obróbki kominów w Pile i okolicach — szczelne połączenia pokrycia z kominem, ścianą i lukarną. Tel. 601 568 841.',
    h1: 'Obróbki blacharskie i obróbki kominów',
    lead:
      'Obróbki blacharskie to miejsca, w których dach najczęściej przecieka — i jednocześnie detale, które widać z ulicy. Starannie dopasowana blacha przy kominie to znak dobrej roboty dekarskiej.',
    photo: 'kominGrafitowy',
    drawing: 'flashing',
    conservative: true,
    sections: [
      {
        h2: 'Gdzie potrzebne są obróbki',
        body: ['Obróbki blacharskie zabezpieczają miejsca styku pokrycia z innymi elementami budynku:'],
        list: ['kominy', 'ściany i attyki wystające ponad dach', 'lukarny i okna dachowe', 'krawędzie dachu i okapy'],
      },
      {
        h2: 'Kominy obłożone blachą',
        body: [
          'Na zdjęciach z naszej pracy widać kominy obłożone blachą — w kolorze czerwonym i grafitowym. Zakres takich prac i dobór materiału ustalamy indywidualnie. Zadzwoń i opisz, czego potrzebujesz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy wykonujecie obróbki kominów przy istniejącym dachu?',
        a: 'Zakres prac przy istniejącym dachu ustalamy po rozmowie i ocenie stanu komina oraz pokrycia. Zadzwoń pod 601 568 841.',
      },
    ],
    related: ['naprawa-dachu', 'wykonanie-dachow', 'przeglad-dachu'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
