// Frensh, brasserie à Cannes : tout le contenu du site (FR + EN).
// Règles : aucun prix inventé (price: null), aucun avis inventé (extraits réels, sourcés),
// distances approximatives, happy hour à confirmer (toVerify).
// Sources : research/recherche-frensh.md (relevés du 06/11/2026) + infos du propriétaire.

export type MomentId = 'matin' | 'midi' | 'apero' | 'soir';
export type Tag = 'maison' | 'végé' | 'vegan' | 'signature';

export interface Moment {
  id: MomentId;
  from: string;
  to: string;
  title: string;
  titleEn: string;
  line: string;
  lineEn: string;
  text: string;
  textEn: string;
  items: string[];
  itemsEn: string[];
  photo: string;
  photoAlt: string;
  photoAltEn: string;
}

export interface MenuItem {
  name: string;
  nameEn: string;
  desc: string;
  descEn: string;
  tags: Tag[];
  price: null;
  attested: true;
}

export interface MenuSection {
  id: string;
  title: string;
  titleEn: string;
  when?: string;
  whenEn?: string;
  note?: string;
  noteEn?: string;
  items: MenuItem[];
}

export interface Rating {
  source: string;
  score: number;
  outOf: 5;
  count: number;
  url: string;
  date: string;
}

export interface Review {
  quote: string;
  source: string;
  url: string;
  lang: 'fr' | 'en';
  author?: string;
  date?: string;
}

export interface Around {
  place: string;
  placeEn: string;
  minutes: number;
  approx: true;
}

export interface GalleryImage {
  src: string;
  alt: string;
  altEn: string;
  kind: 'frensh' | 'quartier';
  credit?: string;
}

/* ------------------------------------------------------------------ */
/* Infos pratiques                                                     */
/* ------------------------------------------------------------------ */

export const site = {
  name: 'Frensh',
  baseline: 'Fresh & French Food',
  baselineFr: 'Frais et français',
  logoTagline: 'Great coffee & juices',
  category: 'Bar · brasserie',
  categoryEn: 'Bar · brasserie',
  address: {
    street: '43 bis rue Félix Faure',
    zip: '06400',
    city: 'Cannes',
    lat: 43.552113,
    lng: 7.013918,
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Frensh%2C%2043%20bis%20rue%20F%C3%A9lix%20Faure%2C%2006400%20Cannes',
    mapsViewUrl:
      'https://www.google.com/maps/search/?api=1&query=Frensh%2C%2043%20bis%20rue%20F%C3%A9lix%20Faure%2C%2006400%20Cannes',
    landmark: 'face aux Allées de la Liberté, à deux pas du Vieux-Port',
    landmarkEn: 'across from the Allées de la Liberté, a short walk from the Old Port',
    access: 'Rue piétonne. L’entrée est entre La Perle et Le Caveau 30.',
    accessEn: 'Pedestrian street. The entrance is between La Perle and Le Caveau 30.',
  },
  phone: '04 93 30 20 54',
  phoneIntl: '+33 4 93 30 20 54',
  phoneHref: 'tel:+33493302054',
  hours: {
    open: '09:00',
    close: '22:30',
    days: 'Tous les jours',
    daysEn: 'Every day',
    text: 'Tous les jours, de 9h à 22h30, en continu.',
    textEn: 'Every day, 9 am to 10:30 pm, no break.',
  },
  happyHour: {
    from: '17:00',
    to: '20:00',
    toVerify: true,
    text: 'Happy hour de 17h à 20h sur les boissons.',
    textEn: 'Happy hour on drinks, 5 to 8 pm.',
  },
  delivery: {
    name: 'Deliveroo',
    url: 'https://deliveroo.fr/fr/',
    text: 'Pas envie de bouger ? On livre avec Deliveroo.',
    textEn: 'Staying in? We deliver with Deliveroo.',
  },
  booking: {
    text: 'On réserve par téléphone, au 04 93 30 20 54. Pour un groupe ou un soir de Festival, appelez avant.',
    textEn: 'Bookings by phone on +33 4 93 30 20 54. Coming as a group or during the Festival? Call ahead.',
  },
  social: {
    instagram: 'https://www.instagram.com/frenshcannes/',
    facebook: 'https://www.facebook.com/FrenshCannes',
  },
  practical: [
    'Terrasse au soleil sur la rue piétonne',
    'Service continu de 9h à 22h30, 7 jours sur 7',
    'Chiens acceptés',
    'Titres-restaurant et Pluxee acceptés',
    'Options végétariennes, vegan et sans gluten',
    'Lieu LGBTQ+ friendly',
    'Réservation par téléphone',
    'Livraison Deliveroo',
  ],
  practicalEn: [
    'Sunny terrace on a pedestrian street',
    'Open non-stop, 9 am to 10:30 pm, 7 days a week',
    'Dogs welcome',
    'Meal vouchers accepted (titres-restaurant, Pluxee)',
    'Vegetarian, vegan and gluten-free options',
    'LGBTQ+ friendly',
    'Bookings by phone',
    'Delivery with Deliveroo',
  ],
};

/* ------------------------------------------------------------------ */
/* Accroche                                                            */
/* ------------------------------------------------------------------ */

export const pitch = {
  headline: 'Du croissant au dernier verre, en face des Allées.',
  headlineEn: 'From the morning croissant to the last glass, across from the Allées.',
  short:
    'Brasserie française rue Félix Faure, à Cannes. On cuisine sur place avec des produits frais, la terrasse prend le soleil, et c’est ouvert tous les jours de 9h à 22h30.',
  shortEn:
    'A French brasserie on rue Félix Faure, Cannes. Everything is cooked here with fresh produce, the terrace gets the sun, and we’re open every day from 9 am to 10:30 pm.',
  long: [
    'Frensh, c’est fresh et french dans le même mot. Le nom dit l’essentiel : des classiques de brasserie préparés sur place avec des produits frais. Club sandwich, burger, fish & chips, salade César, plat du jour. Et des frites maison que les clients citent encore dans leurs avis.',
    'On est au 43 bis rue Félix Faure, dans la partie piétonne, en face des Allées de la Liberté. Le Vieux-Port est à trois minutes à pied, le Palais à quatre. Depuis la terrasse, on voit les boulistes, le kiosque et les gens qui filent au bureau.',
    'On ouvre à 9h avec le café Lavazza et les jus pressés. On ferme à 22h30. Entre les deux, la cuisine ne s’arrête pas : vous mangez quand vous avez faim.',
  ],
  longEn: [
    'Frensh is fresh and French squeezed into one word. That’s the whole idea: brasserie classics made here, from fresh produce. Club sandwich, burger, fish & chips, Caesar salad, a dish of the day. And homemade fries that people still mention in their reviews.',
    'You’ll find us at 43 bis rue Félix Faure, on the pedestrian stretch, right across from the Allées de la Liberté. The Old Port is a three-minute walk, the Palais des Festivals four. From the terrace you can watch the pétanque players, the bandstand and the office crowd going by.',
    'We open at 9 am with Lavazza coffee and fresh-pressed juice. We close at 10:30 pm. In between, the kitchen keeps going, so you can eat whenever you’re hungry.',
  ],
};

/* ------------------------------------------------------------------ */
/* Les moments de la journée                                           */
/* ------------------------------------------------------------------ */

export const moments: Moment[] = [
  {
    id: 'matin',
    from: '09:00',
    to: '11:30',
    title: 'Le matin',
    titleEn: 'Morning',
    line: 'Café, croissant, jus pressé. Le soleil est déjà sur la terrasse.',
    lineEn: 'Coffee, croissant, fresh juice. The sun’s already on the terrace.',
    text: 'La terrasse prend le soleil dès l’ouverture. Un café Lavazza, un croissant, un jus pressé, et la journée peut commencer. Avant le bureau, après le marché Forville, ou juste parce qu’il fait beau.',
    textEn: 'The terrace catches the sun as soon as we open. A Lavazza coffee, a croissant, a fresh juice, and the day can start. Before work, after the Forville market, or just because it’s nice out.',
    items: ['Café Lavazza', 'Croissant et viennoiseries', 'Jus pressés'],
    itemsEn: ['Lavazza coffee', 'Croissant and pastries', 'Fresh-pressed juices'],
    photo: '/images/petit-dej-terrasse.jpg',
    photoAlt: 'Croissant, pain, confiture, café et jus d’orange sur une table de la terrasse, au soleil.',
    photoAltEn: 'Croissant, bread, jam, coffee and orange juice on a terrace table in the sun.',
  },
  {
    id: 'midi',
    from: '11:30',
    to: '17:00',
    title: 'Le midi',
    titleEn: 'Lunch',
    line: 'Sur le pouce ou attablé, avec des produits frais.',
    lineEn: 'Quick bite or proper lunch, made with fresh produce.',
    text: 'Salade César, burger, club sandwich, fish & chips ou le plat du jour. La cuisine tourne en continu, donc un déjeuner à 15h, ça se fait. Pour la pause des bureaux du centre, on accepte les titres-restaurant.',
    textEn: 'Caesar salad, burger, club sandwich, fish & chips or the dish of the day. The kitchen runs all afternoon, so lunch at 3 pm is fine. Meal vouchers are accepted.',
    items: ['Plat du jour', 'Salades', 'Burgers et club sandwich', 'Frites maison'],
    itemsEn: ['Dish of the day', 'Salads', 'Burgers and club sandwich', 'Homemade fries'],
    photo: '/images/salade-cesar.jpg',
    photoAlt: 'Salade César : romaine, poulet, croûtons, tomates cerises et sauce, dans une assiette blanche.',
    photoAltEn: 'Caesar salad: romaine, chicken, croutons, cherry tomatoes and dressing on a white plate.',
  },
  {
    id: 'apero',
    from: '17:00',
    to: '20:00',
    title: 'L’apéro',
    titleEn: 'Aperitivo',
    line: 'Une planche, un verre, et la lumière qui baisse sur les Allées.',
    lineEn: 'A sharing board, a drink, and the light going gold over the Allées.',
    text: 'Planche charcuterie-fromage, pinsa à partager, bière de Nice Blue Coast Brewing, rosé AOP Provence au verre, Spritz ou Mojito. Les boulistes finissent leur partie en face, vous finissez votre verre.',
    textEn: 'Charcuterie and cheese boards, pinsa to share, Blue Coast Brewing beer from Nice, Provence rosé by the glass, Spritz or Mojito. The pétanque players finish their game across the street, you finish your drink.',
    items: ['Planches à partager', 'Pinsa', 'Bière Blue Coast Brewing', 'Rosé AOP Provence', 'Spritz, Mojito'],
    itemsEn: ['Sharing boards', 'Pinsa', 'Blue Coast Brewing beer', 'AOP Provence rosé', 'Spritz, Mojito'],
    photo: '/images/apero-biere-vin.jpg',
    photoAlt: 'Un verre de vin, une bière pression, des cacahuètes, des olives et des dés de fromage sur une planche en terrasse.',
    photoAltEn: 'A glass of wine, a draught beer, peanuts, olives and cheese cubes on a wooden board on the terrace.',
  },
  {
    id: 'soir',
    from: '20:00',
    to: '22:30',
    title: 'Le soir',
    titleEn: 'Evening',
    line: 'Il y a aussi un plat du jour le soir. Et la terrasse est encore tiède.',
    lineEn: 'There’s a dish of the day at night too. And the terrace is still warm.',
    text: 'Le soir aussi, il y a un plat du jour : souris d’agneau, rognons de veau, selon les jours. Sinon un tartare, un burger, les frites. On sert jusqu’à 22h30, à l’heure où certaines cuisines du coin ont déjà baissé le rideau.',
    textEn: 'There’s a dish of the day in the evening too: lamb shank, veal kidneys, depending on the day. Or a tartare, a burger, the fries. We serve until 10:30 pm, when some kitchens nearby have already closed.',
    items: ['Plat du jour du soir', 'Tartare', 'Burger et frites maison', 'Vins de Provence'],
    itemsEn: ['Evening dish of the day', 'Tartare', 'Burger and homemade fries', 'Provence wines'],
    photo: '/images/plat-souris-agneau.jpg',
    photoAlt: 'Plat du jour : souris d’agneau sur une purée, avec son jus et du persil.',
    photoAltEn: 'Dish of the day: slow-cooked lamb shank on mashed potatoes with gravy and parsley.',
  },
];

/* ------------------------------------------------------------------ */
/* La carte (plats attestés uniquement, aucun prix)                    */
/* ------------------------------------------------------------------ */

const item = (
  name: string,
  nameEn: string,
  desc: string,
  descEn: string,
  tags: Tag[] = [],
): MenuItem => ({ name, nameEn, desc, descEn, tags, price: null, attested: true });

export const menuNote = {
  text: 'La carte bouge avec les saisons et le plat du jour change. Les prix sont affichés sur place.',
  textEn: 'The menu changes with the seasons, and so does the dish of the day. Prices are shown on site.',
};

export const menu: MenuSection[] = [
  {
    id: 'petit-dej',
    title: 'Le petit-déj',
    titleEn: 'Breakfast',
    when: 'Dès 9h',
    whenEn: 'From 9 am',
    items: [
      item('Croissant', 'Croissant', 'Le classique, avec un café en terrasse.', 'The classic, best with a coffee on the terrace.'),
      item('Viennoiseries', 'Pastries', 'Demandez ce qu’il y a au comptoir ce matin.', 'Ask what’s on the counter this morning.'),
      item('Jus pressés', 'Fresh-pressed juices', 'Des jus de fruits frais, pressés.', 'Fresh fruit, pressed.'),
      item('Café Lavazza', 'Lavazza coffee', 'Lavazza ¡Tierra!, 100 % arabica.', 'Lavazza ¡Tierra!, 100% arabica.'),
    ],
  },
  {
    id: 'salades',
    title: 'Les salades',
    titleEn: 'Salads',
    when: 'Midi et soir',
    whenEn: 'Lunch and dinner',
    items: [
      item('Salade César', 'Caesar salad', 'Romaine, poulet, croûtons, tomates cerises et sauce César.', 'Romaine, chicken, croutons, cherry tomatoes and Caesar dressing.'),
      item('Salade falafels', 'Falafel salad', 'Falafels, avocat, concombre, tomates, poivrons, olives.', 'Falafel, avocado, cucumber, tomatoes, peppers, olives.', ['végé', 'vegan']),
      item('Burrata', 'Burrata', 'Une burrata crémeuse, tomates cerises, olives, jeunes pousses et pesto.', 'Creamy burrata, cherry tomatoes, olives, baby greens and pesto.', ['végé']),
      item('Salade feta-pastèque', 'Watermelon and feta salad', 'Pastèque, feta, olives noires et salade. L’été dans l’assiette.', 'Watermelon, feta, black olives and greens. Summer on a plate.', ['végé']),
      item('Salade méditerranéenne', 'Mediterranean salad', 'La grande salade composée, version Sud. Demandez le détail du jour.', 'The big mixed salad, southern style. Ask what’s in it today.'),
    ],
  },
  {
    id: 'brasserie',
    title: 'La brasserie',
    titleEn: 'Brasserie classics',
    when: 'Midi et soir',
    whenEn: 'Lunch and dinner',
    items: [
      item('Plat du jour', 'Dish of the day', 'Un plat le midi, un plat le soir. Par exemple une souris d’agneau ou des rognons de veau.', 'One dish at lunch, one at dinner. Lamb shank or veal kidneys, for example.', ['signature']),
      item('Burger', 'Burger', 'Le burger de la maison, avec les frites maison.', 'Our burger, served with homemade fries.', ['signature']),
      item('Club sandwich', 'Club sandwich', 'Le grand classique des brasseries, préparé sur place.', 'The brasserie classic, made in our kitchen.'),
      item('Fish & chips', 'Fish & chips', 'Cabillaud en pâte à bière et frites.', 'Beer-battered cod and fries.'),
      item('Tartare', 'Tartare', 'Tartare de bœuf ou saumon-avocat, servi avec des frites maison.', 'Beef tartare or salmon and avocado, with homemade fries.', ['signature']),
      item('Frites maison', 'Homemade fries', 'Celles qu’on cite dans les avis. En accompagnement ou toutes seules.', 'The ones people write reviews about. As a side or on their own.', ['maison', 'signature']),
    ],
  },
  {
    id: 'a-partager',
    title: 'À partager',
    titleEn: 'To share',
    when: 'À l’apéro',
    whenEn: 'Aperitivo time',
    items: [
      item('Planche charcuterie', 'Charcuterie board', 'Pour l’apéro, à deux ou à plus.', 'For aperitivo, for two or more.'),
      item('Planche fromage', 'Cheese board', 'Une planche de fromages pour accompagner le rosé.', 'A cheese board to go with the rosé.', ['végé']),
      item('Planche mixte', 'Mixed board', 'Charcuterie et fromage, quand on n’arrive pas à choisir.', 'Charcuterie and cheese, for when you can’t decide.'),
      item('Pinsa', 'Pinsa', 'La cousine romaine de la pizza. À partager.', 'Pizza’s Roman cousin. Made for sharing.'),
    ],
  },
  {
    id: 'douceurs',
    title: 'Les douceurs',
    titleEn: 'Something sweet',
    items: [
      item('Café gourmand', 'Café gourmand', 'Un expresso Lavazza et plusieurs petits desserts. Parfait quand on hésite.', 'A Lavazza espresso with a few mini desserts. Perfect when you can’t pick one.'),
    ],
  },
  {
    id: 'bar',
    title: 'Au bar',
    titleEn: 'At the bar',
    note: 'Happy hour de 17h à 20h sur les boissons.',
    noteEn: 'Happy hour on drinks, 5 to 8 pm.',
    items: [
      item('Bière Blue Coast Brewing', 'Blue Coast Brewing beer', 'Bière artisanale brassée à Nice.', 'Craft beer brewed in Nice.'),
      item('Rosé AOP Provence', 'AOP Provence rosé', 'Au verre ou à la bouteille.', 'By the glass or the bottle.'),
      item('Cocktails', 'Cocktails', 'Spritz, Mojito et les classiques de terrasse.', 'Spritz, Mojito and the terrace classics.'),
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Notes et avis (relevés du 06/11/2026)                               */
/* ------------------------------------------------------------------ */

const TRIPADVISOR_URL =
  'https://www.tripadvisor.fr/Restaurant_Review-g187221-d14045401-Reviews-Frensh-Cannes_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_Azur.html';

export const ratings: Rating[] = [
  {
    source: 'Google',
    score: 4.4,
    outOf: 5,
    count: 584,
    url: 'https://www.google.com/maps/search/?api=1&query=Frensh%2C%2043%20bis%20rue%20F%C3%A9lix%20Faure%2C%2006400%20Cannes',
    date: '2026-11-06',
  },
  { source: 'TripAdvisor', score: 4.1, outOf: 5, count: 137, url: TRIPADVISOR_URL, date: '2026-11-06' },
  { source: 'Facebook', score: 4.6, outOf: 5, count: 20, url: 'https://www.facebook.com/FrenshCannes/', date: '2026-11-06' },
];

// Extraits réels, recopiés tels quels depuis la recherche (orthographe d'origine conservée).
export const reviews: Review[] = [
  {
    quote: 'Terrasse au soleil et serveurs vraiment sympa',
    source: 'TripAdvisor',
    url: TRIPADVISOR_URL,
    lang: 'fr',
    author: 'Dim G',
    date: '2023-12',
  },
  {
    quote: "The best french fries I've ever had in a restaurant!",
    source: 'TripAdvisor',
    url: TRIPADVISOR_URL,
    lang: 'en',
    author: 'Andreea',
    date: '2024-04',
  },
  {
    quote: "Happy hour ? C'est l'endroit !",
    source: 'TripAdvisor',
    url: TRIPADVISOR_URL,
    lang: 'fr',
    author: 'LyonMounette',
    date: '2026-05',
  },
  {
    quote: 'Friendly servers, good prices, lovely wines and a beautiful setting',
    source: 'TripAdvisor',
    url: TRIPADVISOR_URL,
    lang: 'en',
    author: 'Trish M',
    date: '2026-04',
  },
  {
    quote: 'Rapport qualité prix au top',
    source: 'TripAdvisor',
    url: TRIPADVISOR_URL,
    lang: 'fr',
    author: 'William L',
    date: '2026-03',
  },
  {
    quote: 'produits frais, réconfortants, servis par un personnel hyper sympa',
    source: 'Google (via Sluurpy)',
    url: 'https://www.sluurpy.fr/cannes/restaurant/2024318/frensh',
    lang: 'fr',
  },
];

/* ------------------------------------------------------------------ */
/* À deux pas (temps à pied approximatifs depuis 43.552113, 7.013918)  */
/* ------------------------------------------------------------------ */

export const around: Around[] = [
  { place: 'Allées de la Liberté (boulodrome, kiosque)', placeEn: 'Allées de la Liberté (pétanque, bandstand)', minutes: 1, approx: true },
  { place: 'Vieux-Port', placeEn: 'Old Port', minutes: 3, approx: true },
  { place: 'Palais des Festivals', placeEn: 'Palais des Festivals', minutes: 4, approx: true },
  { place: 'Rue d’Antibes', placeEn: 'Rue d’Antibes (shopping street)', minutes: 4, approx: true },
  { place: 'Marché Forville', placeEn: 'Forville market', minutes: 6, approx: true },
  { place: 'Gare SNCF de Cannes', placeEn: 'Cannes train station', minutes: 7, approx: true },
];

/* ------------------------------------------------------------------ */
/* La maison                                                           */
/* ------------------------------------------------------------------ */

export const story = {
  title: 'Rue Félix Faure, côté Allées',
  titleEn: 'Rue Félix Faure, facing the Allées',
  paragraphs: [
    'La rue Félix Faure, côté piéton, longe les Allées de la Liberté. La mairie au bout, les mâts du Vieux-Port derrière, le marché Forville à quelques rues. Sur les Allées, on joue aux boules sous les platanes, et le kiosque à musique est toujours là.',
    'Frensh est au 43 bis, entre deux adresses de fruits de mer. Ici, pas de plateau d’huîtres : une brasserie de tous les jours. Une terrasse sous le store, une petite salle avec un mur de brique blanchie et des plantes suspendues, et un mur de vins de Provence, surtout des rosés.',
    'En cuisine, on prépare sur place. Les frites sont maison et il y a un plat du jour le midi et le soir. Au bar, café Lavazza, bière de Nice Blue Coast Brewing et rosés AOP Provence.',
  ],
  paragraphsEn: [
    'The pedestrian end of rue Félix Faure runs alongside the Allées de la Liberté. Town hall at one end, the masts of the Old Port behind, the Forville market a few streets away. On the Allées, people play pétanque under the plane trees, and the old bandstand is still there.',
    'Frensh is at number 43 bis, between two seafood places. No oyster platters here: this is an everyday brasserie. A terrace under the awning, a small room with a whitewashed brick wall and hanging plants, and a wall of Provence wines, mostly rosé.',
    'Everything is cooked here. The fries are homemade and there’s a dish of the day at lunch and dinner. At the bar: Lavazza coffee, Blue Coast Brewing beer from Nice and AOP Provence rosés.',
  ],
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faq = [
  {
    q: 'Il y a une terrasse ?',
    a: 'Oui. Elle donne sur la rue piétonne, en face des Allées de la Liberté, et prend le soleil. Il y a aussi quelques tables à l’intérieur.',
    qEn: 'Is there a terrace?',
    aEn: 'Yes. It faces the Allées de la Liberté on a pedestrian street and gets plenty of sun. There are a few tables inside too.',
  },
  {
    q: 'Je peux venir avec mon chien ?',
    a: 'Oui, les chiens sont acceptés.',
    qEn: 'Can I bring my dog?',
    aEn: 'Yes, dogs are welcome.',
  },
  {
    q: 'Comment réserver ? Et pour un groupe ?',
    a: 'Par téléphone, au 04 93 30 20 54. Pour un groupe, un anniversaire ou un soir de Festival, appelez avant : on vous prépare la place.',
    qEn: 'How do I book? What about groups?',
    aEn: 'By phone on +33 4 93 30 20 54. For a group, a birthday or a Festival night, call ahead and we’ll set things up.',
  },
  {
    q: 'Vous avez des plats végétariens ou vegan ?',
    a: 'Oui : salade falafels, burrata, salade feta-pastèque. Il y a aussi des options vegan et sans gluten. Dites-le en commandant, on vous oriente.',
    qEn: 'Do you have vegetarian or vegan dishes?',
    aEn: 'Yes: falafel salad, burrata, watermelon and feta salad. There are vegan and gluten-free options too. Just tell us when you order.',
  },
  {
    q: 'Vous livrez ?',
    a: 'Oui, avec Deliveroo.',
    qEn: 'Do you deliver?',
    aEn: 'Yes, through Deliveroo.',
  },
  {
    q: 'C’est ouvert pendant le Festival ?',
    a: 'Oui, on est ouvert tous les jours, Festival et congrès compris. Pendant les grandes semaines du Palais, la carte et l’happy hour peuvent changer : demandez au comptoir ou appelez.',
    qEn: 'Are you open during the Film Festival?',
    aEn: 'Yes, we’re open every day, Festival and conventions included. During the big weeks at the Palais, the menu and happy hour may change, so ask at the bar or give us a call.',
  },
  {
    q: 'Vous prenez les titres-restaurant ?',
    a: 'Oui, titres-restaurant et Pluxee.',
    qEn: 'Do you take meal vouchers?',
    aEn: 'Yes, French meal vouchers (titres-restaurant) and Pluxee.',
  },
];

/* ------------------------------------------------------------------ */
/* Propositions pour le propriétaire (NE PAS afficher comme des faits) */
/* ------------------------------------------------------------------ */

export const ideas = [
  {
    title: 'La carte en ligne, avec un QR code sur chaque table',
    pitch: 'Publier la carte complète avec les prix sur le site, et mettre le même lien en QR code sur les tables de la terrasse.',
    why: 'Aucune carte avec prix n’existe en ligne. En juin 2026, un client s’est plaint d’une addition de Festival « sans carte des prix visible ». Et une vieille carte Deliveroo de 2020-2021 traîne encore sur les agrégateurs.',
  },
  {
    title: 'Le plat du jour, chaque matin en story',
    pitch: 'Une photo du plat du jour du midi et du soir, postée en story Instagram avant 11h et reprise automatiquement sur le site.',
    why: 'L’habitude existe déjà (story à la une « PLATS DU JOUR »), mais le compte n’a que 20 publications et presque rien depuis 2021. C’est le contenu le plus simple à produire et celui qui fait venir le midi.',
  },
  {
    title: 'Une fiche Google propre et à jour',
    pitch: 'Corriger les horaires (22h30 partout), ajouter des photos récentes de la carte, le lien Deliveroo, et répondre aux avis.',
    why: 'Google affiche « ferme à 22:00 » alors que vous fermez à 22h30. Six sources donnent six horaires différents. Les touristes décident sur Google Maps, souvent à 200 m de la porte.',
  },
  {
    title: '« Formule petit-déj » affichée',
    pitch: '« Café + jus pressé + croissant » à prix fixe, écrit en grand sur une ardoise en terrasse et sur le site.',
    why: 'La photo du petit-déj en terrasse est la plus parlante que vous ayez, mais aucune formule n’est communiquée. Ça parle aux bureaux du centre, aux gens qui reviennent du marché Forville et aux voyageurs de la gare (7 min).',
  },
  {
    title: '« Happy hour pétanque »',
    pitch: 'Un rendez-vous régulier avec les boulistes d’en face : la tournée du vainqueur à prix happy hour, ou un petit concours une fois par mois sur les Allées.',
    why: 'L’happy hour est le compliment n°1 dans les avis (« meilleur happy hour à Cannes de 5 à 8 »). Le boulodrome est littéralement en face de la terrasse. C’est du Cannes de Cannois, facile à raconter en photo.',
  },
  {
    title: 'Un « menu Festival » annoncé à l’avance',
    pitch: 'Publier dès avril la carte et les prix des semaines de Festival et des grands congrès, et dire clairement si l’happy hour est suspendue.',
    why: 'Un avis de juin 2026 reproche une addition chère, sans prix visibles et sans happy hour pendant le Festival. Annoncer les règles avant évite la mauvaise surprise et l’avis à 1 étoile.',
  },
  {
    title: '« Carte de fidélité café »',
    pitch: 'Une carte tamponnée : le 10e café Lavazza offert, valable aussi pour un jus pressé.',
    why: 'Vous avez une clientèle d’habitués possible (bureaux, mairie, titres-restaurant acceptés) et un café de marque. Les avis Google citent déjà « Excellent café ».',
  },
  {
    title: 'L’accueil en anglais, assumé',
    pitch: 'Une carte bilingue, un petit « We speak English » sur la vitrine, et un réflexe d’accueil pour les croisiéristes et les congressistes.',
    why: 'Le service inégal est la critique n°1, dont un avis de juin 2025 sur un serveur désagréable avec un client non francophone. Le Vieux-Port et le Palais amènent une clientèle anglophone tous les jours.',
  },
  {
    title: '« Le retour du marché »',
    pitch: 'Si le chef se fournit au marché Forville, le montrer : une photo du cageot le matin, puis l’assiette du jour.',
    why: 'La promesse de la maison, c’est « produits frais ». Forville est à 6 minutes à pied. Une seule photo par semaine suffit à le prouver, au lieu de l’écrire.',
  },
  {
    title: 'Faire le ménage en ligne',
    pitch: 'Fusionner la fiche TripAdvisor en double, relancer ou fermer la fiche Deliveroo, et mettre ce site en lien partout (Google, Instagram, Facebook).',
    why: 'Une fiche TripAdvisor « Bar Brasserie Frensh » non revendiquée existe à côté de la vraie. La fiche Deliveroo du lieu est introuvable alors que la livraison est annoncée. Instagram renvoie encore vers le site du groupe.',
  },
];

/* ------------------------------------------------------------------ */
/* Galerie (photos du Frensh et du quartier uniquement)                */
/* ------------------------------------------------------------------ */

export const gallery: GalleryImage[] = [
  {
    src: '/images/petit-dej-terrasse.jpg',
    alt: 'Petit-déjeuner en terrasse : croissant, café, jus d’orange, avec les Allées de la Liberté en fond.',
    altEn: 'Breakfast on the terrace: croissant, coffee and orange juice, with the Allées de la Liberté behind.',
    kind: 'frensh',
  },
  {
    src: '/images/service-terrasse.jpg',
    alt: 'Un serveur en tee-shirt « LE FRENSH » porte un plateau de cafés vers la terrasse, sous le store.',
    altEn: 'A waiter in a “LE FRENSH” T-shirt carries a tray of coffees out to the terrace, under the awning.',
    kind: 'frensh',
  },
  {
    src: '/images/salade-falafels.jpg',
    alt: 'Salade falafels avec avocat, concombre, tomates, poivrons et olives.',
    altEn: 'Falafel salad with avocado, cucumber, tomatoes, peppers and olives.',
    kind: 'frensh',
  },
  {
    src: '/images/chef-cuisine.jpg',
    alt: 'Le chef sourit dans la cuisine du Frensh, entre les casseroles et les fourneaux.',
    altEn: 'The chef smiling in the Frensh kitchen, between the pans and the stoves.',
    kind: 'frensh',
  },
  {
    src: '/images/burrata.jpg',
    alt: 'Burrata au pesto entourée de tomates cerises, d’olives et de jeunes pousses.',
    altEn: 'Burrata with pesto, surrounded by cherry tomatoes, olives and baby greens.',
    kind: 'frensh',
  },
  {
    src: '/images/cocktail-terrasse.jpg',
    alt: 'Un cocktail rouge à la menthe sur une table de la terrasse, avec le kiosque des Allées au loin.',
    altEn: 'A red cocktail with mint on a terrace table, the Allées bandstand in the distance.',
    kind: 'frensh',
  },
  {
    src: '/images/mur-rose-provence.jpg',
    alt: 'Le mur de vins AOP Provence, surtout des rosés, avec les ardoises « le verre » et « la bouteille ».',
    altEn: 'The wall of AOP Provence wines, mostly rosés, with chalk signs for “by the glass” and “by the bottle”.',
    kind: 'frensh',
  },
  {
    src: '/images/salade-feta-pasteque.jpg',
    alt: 'Salade feta-pastèque tenue à bout de bras dans la salle, la terrasse en fond.',
    altEn: 'Watermelon and feta salad held up inside, with the terrace in the background.',
    kind: 'frensh',
  },
  {
    src: '/images/salle-interieur.jpg',
    alt: 'La petite salle : fauteuils, mur de plantes suspendues et grande baie ouverte sur la terrasse.',
    altEn: 'The small dining room: armchairs, hanging plants and wide doors open onto the terrace.',
    kind: 'frensh',
  },
  {
    src: '/images/cafe-gourmand.jpg',
    alt: 'Café gourmand : expresso Lavazza et plusieurs petits desserts sur une ardoise.',
    altEn: 'Café gourmand: a Lavazza espresso and several mini desserts on a slate.',
    kind: 'frensh',
  },
  {
    src: '/images/apero-biere-vin.jpg',
    alt: 'Apéro en terrasse : verre de vin, bière pression, cacahuètes, olives et fromage.',
    altEn: 'Drinks on the terrace: a glass of wine, a draught beer, peanuts, olives and cheese.',
    kind: 'frensh',
  },
  {
    src: '/images/plat-souris-agneau.jpg',
    alt: 'Plat du jour : souris d’agneau sur une purée.',
    altEn: 'Dish of the day: lamb shank on mashed potatoes.',
    kind: 'frensh',
  },
  {
    src: '/images/cartes-terrasse.jpg',
    alt: 'Les cartes Frensh posées sur une table, la terrasse ensoleillée derrière.',
    altEn: 'Frensh menus stacked on a table, the sunny terrace behind.',
    kind: 'frensh',
  },
  {
    src: '/images/allees-boulodrome.jpg',
    alt: 'Le quartier : les terrains de boules des Allées de la Liberté, juste en face.',
    altEn: 'The neighbourhood: the pétanque courts on the Allées de la Liberté, just across the street.',
    kind: 'quartier',
    credit: 'Benoît Prieur, CC0, via Wikimedia Commons',
  },
  {
    src: '/images/kiosque-allees-jour.jpg',
    alt: 'Le quartier : le kiosque à musique des Allées de la Liberté, en fin de journée.',
    altEn: 'The neighbourhood: the bandstand on the Allées de la Liberté at dusk.',
    kind: 'quartier',
    credit: 'Mister No, CC BY 3.0, via Wikimedia Commons',
  },
  {
    src: '/images/kiosque-allees-nuit.jpg',
    alt: 'Le quartier : le kiosque des Allées illuminé, la nuit.',
    altEn: 'The neighbourhood: the Allées bandstand lit up at night.',
    kind: 'quartier',
    credit: 'Wikimedia Commons (auteur et licence à confirmer)',
  },
  {
    src: '/images/rue-felix-faure.jpg',
    alt: 'Le quartier : la rue Félix Faure piétonne, un matin de printemps.',
    altEn: 'The neighbourhood: pedestrian rue Félix Faure on a spring morning.',
    kind: 'quartier',
    credit: 'Benoît Prieur, CC0, via Wikimedia Commons',
  },
  {
    src: '/images/vieux-port.jpg',
    alt: 'Le quartier : les bateaux du Vieux-Port de Cannes, à trois minutes à pied.',
    altEn: 'The neighbourhood: boats in Cannes Old Port, a three-minute walk away.',
    kind: 'quartier',
    credit: 'Spike, CC BY-SA 4.0, via Wikimedia Commons',
  },
  {
    src: '/images/marche-forville-fruits.jpg',
    alt: 'Le quartier : un étal de fruits au marché Forville.',
    altEn: 'The neighbourhood: a fruit stall at the Forville market.',
    kind: 'quartier',
    credit: 'Iswoar, CC BY-SA 4.0, via Wikimedia Commons',
  },
  {
    src: '/images/marche-forville-cepes.jpg',
    alt: 'Le quartier : des cèpes sur un étal du marché Forville.',
    altEn: 'The neighbourhood: porcini mushrooms at the Forville market.',
    kind: 'quartier',
    credit: 'Iswoar, CC BY-SA 4.0, via Wikimedia Commons',
  },
  {
    src: '/images/marche-forville-fromages.jpg',
    alt: 'Le quartier : un étal de fromages au marché Forville.',
    altEn: 'The neighbourhood: a cheese stall at the Forville market.',
    kind: 'quartier',
    credit: 'Iswoar, CC BY-SA 4.0, via Wikimedia Commons',
  },
];

/* ------------------------------------------------------------------ */
/* Libellés d'interface                                                */
/* ------------------------------------------------------------------ */

export const ui = {
  fr: {
    directions: 'Itinéraire',
    directionsLong: 'Y aller',
    call: 'Appeler',
    openNow: 'Ouvert maintenant',
    closed: 'Fermé',
    closedNow: 'Fermé pour le moment',
    opensAt: 'Ouvre à',
    closesAt: 'Ferme à',
    closingSoon: 'Ferme bientôt',
    today: 'Aujourd’hui',
    everyDay: 'Tous les jours',
    hours: 'Horaires',
    address: 'Adresse',
    seeMenu: 'Voir la carte',
    menu: 'La carte',
    order: 'Commander',
    orderDeliveroo: 'Commander sur Deliveroo',
    book: 'Réserver',
    bookByPhone: 'Réserver par téléphone',
    happyHour: 'Happy hour',
    moments: 'Au fil de la journée',
    story: 'La maison',
    around: 'À deux pas',
    walk: 'à pied',
    minWalk: 'min à pied',
    approx: 'environ',
    reviews: 'Ce qu’en disent les clients',
    ratingCount: 'avis',
    readReview: 'Lire l’avis',
    faq: 'Questions pratiques',
    gallery: 'En images',
    practical: 'Bon à savoir',
    followUs: 'Suivez-nous',
    instagram: 'Instagram',
    facebook: 'Facebook',
    seeOnMaps: 'Voir sur Google Maps',
    priceOnSite: 'Prix sur place',
    vegetarian: 'Végé',
    vegan: 'Vegan',
    homemade: 'Maison',
    signature: 'Signature',
    photoCredit: 'Photo',
    neighbourhood: 'Le quartier',
    skipToContent: 'Aller au contenu',
    backToTop: 'Haut de page',
    language: 'Langue',
    switchLang: 'English',
    toVerify: 'À confirmer',
    legal: 'Mentions légales',
    contact: 'Contact',
  },
  en: {
    directions: 'Directions',
    directionsLong: 'Get here',
    call: 'Call',
    openNow: 'Open now',
    closed: 'Closed',
    closedNow: 'Closed right now',
    opensAt: 'Opens at',
    closesAt: 'Closes at',
    closingSoon: 'Closing soon',
    today: 'Today',
    everyDay: 'Every day',
    hours: 'Opening hours',
    address: 'Address',
    seeMenu: 'See the menu',
    menu: 'Menu',
    order: 'Order',
    orderDeliveroo: 'Order on Deliveroo',
    book: 'Book',
    bookByPhone: 'Book by phone',
    happyHour: 'Happy hour',
    moments: 'Through the day',
    story: 'About us',
    around: 'Nearby',
    walk: 'on foot',
    minWalk: 'min walk',
    approx: 'about',
    reviews: 'What guests say',
    ratingCount: 'reviews',
    readReview: 'Read the review',
    faq: 'Good to know',
    gallery: 'Photos',
    practical: 'Practical info',
    followUs: 'Follow us',
    instagram: 'Instagram',
    facebook: 'Facebook',
    seeOnMaps: 'View on Google Maps',
    priceOnSite: 'Prices on site',
    vegetarian: 'Veggie',
    vegan: 'Vegan',
    homemade: 'Homemade',
    signature: 'Signature',
    photoCredit: 'Photo',
    neighbourhood: 'The neighbourhood',
    skipToContent: 'Skip to content',
    backToTop: 'Back to top',
    language: 'Language',
    switchLang: 'Français',
    toVerify: 'To be confirmed',
    legal: 'Legal notice',
    contact: 'Contact',
  },
} satisfies { fr: Record<string, string>; en: Record<string, string> };
