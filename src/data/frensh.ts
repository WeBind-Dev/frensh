// Frensh, brasserie à Cannes : tout le contenu du site (FR + EN).
// Règles : prix uniquement tels qu'imprimés sur la carte papier (photos du 06/11/2026),
// aucun avis inventé (extraits réels, sourcés), distances approximatives.
// Plus de livraison Deliveroo (confirmé par le propriétaire le 06/11/2026). Happy hour confirmé par la carte officielle : 17h–20h (boissons), bouteilles de vin −30 % de 16h à 22h.
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
  /** Prix tel qu'imprimé sur la carte, ex. « 19 € » ou « 6 € / 28 € ». */
  price: string;
  attested: true;
}

export interface MenuSection {
  id: string;
  group: 'cuisine' | 'happy' | 'boissons' | 'bar';
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
    'Happy hour de 17h à 20h',
    'Chiens acceptés',
    'Titres-restaurant et Pluxee acceptés',
    'Options végétariennes',
    'Lieu LGBTQ+ friendly',
    'Réservation par téléphone',
  ],
  practicalEn: [
    'Sunny terrace on a pedestrian street',
    'Open non-stop, 9 am to 10:30 pm, 7 days a week',
    'Happy hour from 5 to 8 pm',
    'Dogs welcome',
    'Meal vouchers accepted (titres-restaurant, Pluxee)',
    'Vegetarian options',
    'LGBTQ+ friendly',
    'Bookings by phone',
  ],
};

/* ------------------------------------------------------------------ */
/* Accroche                                                            */
/* ------------------------------------------------------------------ */

export const pitch = {
  headline: 'Du croissant au dernier verre, en face des Allées.',
  headlineEn: 'From the morning croissant to the last glass, across from the Allées.',
  short:
    'Bar-brasserie rue Félix Faure, à Cannes. On cuisine sur place avec des produits frais, la terrasse prend le soleil, et c’est ouvert tous les jours de 9h à 22h30.',
  shortEn:
    'A bar-brasserie on rue Félix Faure, Cannes. Everything is cooked here with fresh produce, the terrace gets the sun, and we’re open every day from 9 am to 10:30 pm.',
  long: [
    'Frensh, c’est fresh et french dans le même mot. Le nom dit l’essentiel : des classiques de brasserie préparés sur place avec des produits frais. Salades, clubs, croques, burgers, fish and chips, tartares, entrecôte Simmental. Et des frites fraîches que les clients citent encore dans leurs avis.',
    'On est au 43 bis rue Félix Faure, dans la partie piétonne, en face des Allées de la Liberté. Le Vieux-Port est à trois minutes à pied, le Palais à quatre. Depuis la terrasse, on voit les boulistes, le kiosque et les gens qui filent au bureau.',
    'On ouvre à 9h avec le café, les jus pressés et la formule petit-déj à 10 €. On ferme à 22h30. Entre les deux, la cuisine ne s’arrête pas : vous mangez quand vous avez faim.',
  ],
  longEn: [
    'Frensh is fresh and French squeezed into one word. That’s the whole idea: brasserie classics made here, from fresh produce. Salads, club sandwiches, croques, burgers, fish and chips, tartares, Simmental rib-eye. And fresh fries that people still mention in their reviews.',
    'You’ll find us at 43 bis rue Félix Faure, on the pedestrian stretch, right across from the Allées de la Liberté. The Old Port is a three-minute walk, the Palais des Festivals four. From the terrace you can watch the pétanque players, the bandstand and the office crowd going by.',
    'We open at 9 am with coffee, fresh-pressed juice and the €10 breakfast set. We close at 10:30 pm. In between, the kitchen keeps going, so you can eat whenever you’re hungry.',
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
    text: 'La terrasse prend le soleil dès l’ouverture. Un café, un croissant, un jus pressé, et la journée peut commencer. La formule complète est à 10 €. Avant le bureau, après le marché Forville, ou juste parce qu’il fait beau.',
    textEn: 'The terrace catches the sun as soon as we open. A coffee, a croissant, a fresh juice, and the day can start. The full breakfast set is €10. Before work, after the Forville market, or just because it’s nice out.',
    items: ['Formule petit-déj 10 €', 'Croissant ou pain au chocolat', 'Jus pressés'],
    itemsEn: ['Breakfast set €10', 'Croissant or pain au chocolat', 'Fresh-pressed juices'],
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
    text: 'Salade Caesar, club sandwich, croque-monsieur, burger ou fish and chips. La cuisine tourne en continu, donc un déjeuner à 15h, ça se fait. Pour la pause des bureaux du centre, on accepte les titres-restaurant.',
    textEn: 'Caesar salad, club sandwich, croque-monsieur, burger or fish and chips. The kitchen runs all afternoon, so lunch at 3 pm is fine. Meal vouchers are accepted.',
    items: ['Salades', 'Clubs sandwichs', 'Croques', 'Burgers'],
    itemsEn: ['Salads', 'Club sandwiches', 'Croques', 'Burgers'],
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
    line: 'Happy hour de 17h à 20h : spritz à 6,50 €, pinte à 6 €. Et la lumière qui baisse sur les Allées.',
    lineEn: 'Happy hour from 5 to 8 pm: spritz €6.50, pint €6. And the light going gold over the Allées.',
    text: 'Planche charcuteries-fromages, camembert rôti, pinsa romana, une pression, un rosé AOP Provence au verre, un Spritz ou un Mojito. Les boulistes finissent leur partie en face, vous finissez votre verre.',
    textEn: 'Charcuterie and cheese boards, roasted camembert, pinsa romana, a draught beer, Provence rosé by the glass, a Spritz or a Mojito. The pétanque players finish their game across the street, you finish your drink.',
    items: ['Planches à partager', 'Pinsa romana', 'Bières pression', 'Rosé AOP Provence', 'Spritz, Mojito'],
    itemsEn: ['Sharing boards', 'Pinsa romana', 'Draught beer', 'AOP Provence rosé', 'Spritz, Mojito'],
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
    line: 'Entrecôte, poisson ou pâtes. Et la terrasse est encore tiède.',
    lineEn: 'Steak, fish or pasta. And the terrace is still warm.',
    text: 'Le soir, c’est entrecôte Simmental maturée, filet de saint-pierre sauce vierge, gnocchi à la crème de truffe ou tartare de bœuf. On sert jusqu’à 22h30, à l’heure où certaines cuisines du coin ont déjà baissé le rideau.',
    textEn: 'In the evening: dry-aged Simmental rib-eye, John Dory with sauce vierge, gnocchi with truffle cream or beef tartare. We serve until 10:30 pm, when some kitchens nearby have already closed.',
    items: ['Entrecôte Simmental', 'Poissons', 'Pâtes', 'Vins de Provence'],
    itemsEn: ['Simmental rib-eye', 'Fish', 'Pasta', 'Provence wines'],
    photo: '/images/service-terrasse.jpg',
    photoAlt: 'Service en terrasse au Frensh.',
    photoAltEn: 'Table service on the Frensh terrace.',
  },
];

/* ------------------------------------------------------------------ */
/* La carte : reprise des fichiers officiels (PDF) fournis le 06/11/2026 */
/* (assets/carte-officielle/). Prix en euros, tels qu'imprimés.         */
/* ------------------------------------------------------------------ */

export type MenuGroup = 'cuisine' | 'happy' | 'boissons' | 'bar';

const it = (
  name: string,
  nameEn: string,
  price: string,
  desc = '',
  descEn = '',
  tags: Tag[] = [],
): MenuItem => ({ name, nameEn, price, desc, descEn, tags, attested: true });

export const menuGroups: { id: MenuGroup; title: string; titleEn: string }[] = [
  { id: 'cuisine', title: 'La cuisine', titleEn: 'Food' },
  { id: 'happy', title: 'Happy hour', titleEn: 'Happy hour' },
  { id: 'boissons', title: 'Les boissons', titleEn: 'Drinks' },
  { id: 'bar', title: 'Le bar et les vins', titleEn: 'Bar & wine' },
];

export const menuNote = {
  text: 'La carte du moment. Elle peut changer : en cas de doute, demandez à l’équipe.',
  textEn: 'Our current menu. It may change, so ask the team if in doubt.',
  allergens: 'Allergies ou intolérances : demandez le tableau des allergènes à l’équipe.',
  allergensEn: 'Allergies or intolerances? Ask the team for the allergen chart.',
};

export const menu: MenuSection[] = [
  /* ---------------- Cuisine ---------------- */
  {
    id: 'breakfast',
    group: 'cuisine',
    title: 'The Breakfast Club',
    titleEn: 'The Breakfast Club',
    items: [
      it('La formule petit-déj', 'Breakfast set', '10 €',
        'Une boisson chaude, une orange ou pomme pressée, un croissant ou un pain au chocolat, des tartines avec beurre et confiture.',
        'A hot drink, a fresh orange or apple juice, a croissant or pain au chocolat, and bread with butter and jam.'),
      it('Croissant ou pain au chocolat', 'Croissant or pain au chocolat', '2 €'),
      it('Tartines, beurre et confiture', 'Bread, butter and jam', '3,50 €'),
    ],
  },
  {
    id: 'envies-salees',
    group: 'cuisine',
    title: 'Les envies salées',
    titleEn: 'Savoury breakfast',
    note: 'À ajouter à votre petit-déj.',
    noteEn: 'To add to your breakfast.',
    items: [
      it('Omelette', 'Omelette', '9 €'),
      it('Omelette jambon ou fromage', 'Ham or cheese omelette', '11 €'),
      it('Omelette jambon-fromage', 'Ham and cheese omelette', '13 €'),
      it('Croque-monsieur', 'Croque-monsieur', '12 €'),
      it('Sandwich toasté façon club, saumon-avocat', 'Toasted club-style sandwich, salmon and avocado', '14 €'),
    ],
  },
  {
    id: 'partager',
    group: 'cuisine',
    title: 'À partager',
    titleEn: 'To share',
    items: [
      it('Planche de charcuteries ou fromages', 'Charcuterie or cheese board', '12 €'),
      it('Planche de charcuteries et fromages', 'Charcuterie and cheese board', '16 €'),
      it('Tranche de terrine', 'Slice of terrine', '7 €'),
      it('Camembert rôti au miel', 'Roasted camembert with honey', '14 €'),
      it('Camembert rôti à la truffe', 'Truffle roasted camembert', '18 €'),
      it('Charcuteries, fromages et tranche de terrine', 'Charcuterie, cheese and a slice of terrine', '22 €'),
      it('Planche Frensh surprise', 'Frensh surprise board', '26 €'),
      it('La boîte de sardines', 'Tin of sardines', '8 €'),
      it('Petite friture de joëls', 'Little fried fish', '14 €'),
      it('Le panier de frites fraîches', 'Basket of fresh fries', '6 €'),
      it('Frites de panisses, sauce tartare', 'Panisse fries, tartar sauce', '9 €'),
      it('Le saucisson entier', 'Whole saucisson', '12 €'),
    ],
  },
  {
    id: 'pinsa',
    group: 'cuisine',
    title: 'La pinsa romana',
    titleEn: 'Pinsa romana',
    note: 'L’alternative à la pizza : pâte légère et croustillante.',
    noteEn: 'The alternative to pizza: a light, crispy base.',
    items: [
      it('Marguerite', 'Margherita', '15 €', '', '', ['végé']),
      it('Chorizo', 'Chorizo', '17 €'),
      it('Truffe', 'Truffle', '18 €'),
    ],
  },
  {
    id: 'salades',
    group: 'cuisine',
    title: 'Les salades',
    titleEn: 'Salads',
    note: 'Toutes les salades sont à 19 €.',
    noteEn: 'All salads are €19.',
    items: [
      it('Salade Caesar au poulet croustillant', 'Caesar salad with crispy chicken', '19 €',
        'Romaine, tomate, œuf, croûtons, parmesan, poulet croustillant, sauce Caesar maison. Supplément bacon : 2 €.',
        'Romaine lettuce, tomato, egg, croutons, parmesan, crispy chicken, homemade Caesar dressing. Extra bacon: €2.'),
      it('Salade niçoise', 'Niçoise salad', '19 €',
        'Mesclun, tomate, concombre, poivron, olives, oignons, thon, anchois, œuf.',
        'Mixed greens, tomato, cucumber, bell pepper, olives, onions, tuna, anchovies, egg.'),
      it('Veggie falafel', 'Veggie falafel', '19 €',
        'Mesclun, tomate, concombre, oignons, poivron, avocat, falafels, olives.',
        'Mixed greens, tomato, cucumber, onions, bell pepper, avocado, falafel, olives.', ['végé']),
      it('Chèvre chaud et jambon cru', 'Warm goat cheese and cured ham', '19 €',
        'Mesclun, tomate, chèvre chaud, miel, noix, jambon cru.',
        'Mixed greens, tomato, warm goat cheese, honey, walnuts, cured ham.'),
      it('Quinoa saumon', 'Quinoa and salmon', '19 €',
        'Mesclun, tomate, quinoa, avocat, saumon fumé, œuf.',
        'Mixed greens, tomato, quinoa, avocado, smoked salmon, egg.'),
    ],
  },
  {
    id: 'clubs',
    group: 'cuisine',
    title: 'Les clubs sandwichs',
    titleEn: 'Club sandwiches',
    note: 'Servis avec frites.',
    noteEn: 'Served with fries.',
    items: [
      it('Norvégien au saumon fumé', 'Smoked salmon club', '20 €',
        'Pain brioché, salade, saumon fumé, avocat, tomate, cream cheese citronné.',
        'Brioche bread, salad, smoked salmon, avocado, tomato, lemon cream cheese.'),
      it('Poulet', 'Chicken club', '19 €',
        'Salade, filet de poulet, œuf, tomate, mayonnaise.',
        'Salad, chicken fillet, egg, tomato, mayonnaise.'),
    ],
  },
  {
    id: 'croques',
    group: 'cuisine',
    title: 'Les croques',
    titleEn: 'Croques',
    note: 'Servis avec frites et salade.',
    noteEn: 'Served with fries and salad.',
    items: [
      it('Croque-monsieur', 'Croque-monsieur', '18 €'),
      it('Croque-monsieur à la truffe', 'Truffle croque-monsieur', '20 €'),
      it('Croque-madame', 'Croque-madame', '19 €'),
    ],
  },
  {
    id: 'burgers',
    group: 'cuisine',
    title: 'Les burgers',
    titleEn: 'Burgers',
    note: 'Servis avec frites et salade. Supplément bacon : 1 €.',
    noteEn: 'Served with fries and salad. Extra bacon: €1.',
    items: [
      it('Cheese', 'Cheese', '20 €', 'Salade, tomate, oignons, steak de 180 g, cheddar, sauce burger.', 'Lettuce, tomato, onions, 180 g beef patty, cheddar, burger sauce.'),
      it('Chicken', 'Chicken', '20 €', 'Salade, tomate, oignons, poulet frit, cheddar, sauce burger.', 'Lettuce, tomato, onions, fried chicken, cheddar, burger sauce.'),
      it('Fish', 'Fish', '20 €', 'Salade, tomate, poisson pané, sauce tartare, cheddar.', 'Lettuce, tomato, breaded fish, tartar sauce, cheddar.'),
      it('Smash', 'Smash', '22 €', 'Double steak, cheddar, oignons, cornichons, sauce burger.', 'Double patty, cheddar, onions, pickles, burger sauce.'),
    ],
  },
  {
    id: 'pates',
    group: 'cuisine',
    title: 'Les pâtes',
    titleEn: 'Pasta',
    items: [
      it('Linguine au saumon frais', 'Linguine with fresh salmon', '22 €'),
      it('Linguine aux légumes', 'Linguine with vegetables', '18 €', '', '', ['végé']),
      it('Ravioles gratinées', 'Baked ravioli', '20 €'),
      it('Gnocchi à la crème de truffe', 'Gnocchi with truffle cream', '23 €'),
    ],
  },
  {
    id: 'poissons',
    group: 'cuisine',
    title: 'Les poissons',
    titleEn: 'Fish',
    note: 'Accompagnement au choix : riz, frites ou poêlée de légumes. Accompagnement supplémentaire : 6 €.',
    noteEn: 'Choice of side: rice, fries or stir-fried vegetables. Extra side: €6.',
    items: [
      it('Fish and chips, sauce tartare', 'Fish and chips, tartar sauce', '19 €'),
      it('Tartare de saumon frais à l’avocat', 'Fresh salmon tartare with avocado', '22 €'),
      it('Filet de saint-pierre, sauce vierge', 'John Dory fillet, sauce vierge', '23 €'),
      it('Pavé de saumon, sauce vierge', 'Salmon steak, sauce vierge', '22 €'),
    ],
  },
  {
    id: 'viandes',
    group: 'cuisine',
    title: 'Les viandes',
    titleEn: 'Meat',
    note: 'Accompagnement au choix : riz, frites ou poêlée de légumes. Accompagnement supplémentaire : 6 €.',
    noteEn: 'Choice of side: rice, fries or stir-fried vegetables. Extra side: €6.',
    items: [
      it('Steak haché à cheval', 'Steak topped with a fried egg', '19 €'),
      it('Tartare de bœuf', 'Beef tartare', '21 €'),
      it('Carpaccio de bœuf', 'Beef carpaccio', '21 €'),
      it('Escalope de poulet aux champignons', 'Chicken escalope with mushroom sauce', '20 €'),
      it('Belle entrecôte maturée Simmental', 'Dry-aged Simmental rib-eye', '32 €'),
    ],
  },
  {
    id: 'desserts',
    group: 'cuisine',
    title: 'Pour finir',
    titleEn: 'To finish',
    items: [
      it('Assiette de fromages', 'Cheese plate', '12 €'),
      it('Le plateau de pâtisseries', 'Pastry tray', '9 €'),
      it('Le soufflé au Grand Marnier', 'Grand Marnier soufflé', '9 €'),
      it('L’omelette norvégienne', 'Baked Alaska', '9 €'),
      it('La coupe Snickers', 'Snickers sundae', '12 €'),
    ],
  },
  {
    id: 'glaces',
    group: 'cuisine',
    title: 'Les glaces artisanales',
    titleEn: 'Artisan ice cream',
    note: 'Vanille, chocolat, fraise, noix de coco, yaourt bulgare, pistache, caramel beurre salé, café, mangue, citron, stracciatella, spéculoos, praliné.',
    noteEn: 'Vanilla, chocolate, strawberry, coconut, Bulgarian yogurt, pistachio, salted caramel, coffee, mango, lemon, stracciatella, speculoos, praline.',
    items: [
      it('1 boule', '1 scoop', '4 €'),
      it('2 boules', '2 scoops', '6,50 €'),
      it('3 boules', '3 scoops', '9 €'),
    ],
  },

  /* ---------------- Happy hour ---------------- */
  {
    id: 'happy-verres',
    group: 'happy',
    title: 'Happy hour, 17h – 20h',
    titleEn: 'Happy hour, 5 – 8 pm',
    note: 'De 17h à 20h.',
    noteEn: 'From 5 to 8 pm.',
    items: [
      it('Les spritz', 'Spritzes', '6,50 €', 'Aperol, Pink (mangue, passion), Campari, Limoncello ou Hugo.', 'Aperol, Pink (mango, passion fruit), Campari, Limoncello or Hugo.'),
      it('Coupe de prosecco', 'Glass of prosecco', '5,50 €'),
      it('Pinte de Stella Artois', 'Pint of Stella Artois', '6 €'),
      it('Pinte de Hoegaarden blanche', 'Pint of Hoegaarden', '6 €'),
      it('Le verre de vin de pays du Var', 'Glass of Var country wine', '4 €'),
      it('Virgin Colada ou After Glow', 'Virgin Colada or After Glow', '6 €', 'Sans alcool. After Glow : ananas, orange, grenadine.', 'Alcohol-free. After Glow: pineapple, orange, grenadine.'),
    ],
  },
  {
    id: 'happy-vins',
    group: 'happy',
    title: 'La bouteille de vin à −30 %',
    titleEn: 'Bottles of wine, 30% off',
    note: 'De 16h à 22h. Prix avant / après remise.',
    noteEn: 'From 4 to 10 pm. Price before / after discount.',
    items: [
      it('Château Tour Saint-Honoré (bio), rouge', 'Château Tour Saint-Honoré (organic), red', '28 € → 19,60 €', 'AOP Provence.', 'AOP Provence.'),
      it('Beaumes de Venise, Dom Venitia', 'Beaumes de Venise, Dom Venitia', '34 € → 23,80 €', 'AOP Côtes du Rhône, rouge.', 'AOP Côtes du Rhône, red.'),
      it('Château La Trinité', 'Château La Trinité', '38 € → 26,80 €', 'AOP Saint-Émilion, rouge.', 'AOP Saint-Émilion, red.'),
      it('Moulin de Gassac, pinot noir', 'Moulin de Gassac, Pinot Noir', '34 € → 23,80 €', 'IGP Pays d’Oc, rouge.', 'IGP Pays d’Oc, red.'),
      it('Trivento', 'Trivento', '34 € → 23,80 €', 'Malbec, Argentine.', 'Malbec, Argentina.'),
      it('Château Saint-Honoré (bio), blanc', 'Château Saint-Honoré (organic), white', '28 € → 19,60 €', 'AOP Provence.', 'AOP Provence.'),
      it('Moulin de Gassac ou Domaine Durand, chardonnay', 'Moulin de Gassac or Domaine Durand, Chardonnay', '28 € → 19,60 €', 'IGP Méditerranée, blanc.', 'IGP Méditerranée, white.'),
      it('Lambert de Valentinois', 'Lambert de Valentinois', '48 € → 33,60 €', 'Chablis.', 'Chablis.'),
      it('Domaine Reverdy-Ducroux « Les Blanchaux »', 'Domaine Reverdy-Ducroux “Les Blanchaux”', '52 € → 36,40 €', 'Sancerre.', 'Sancerre.'),
      it('Mirage (moelleux)', 'Mirage (sweet)', '28 € → 19,60 €', 'IGP Gascogne, gros manseng.', 'IGP Gascogne, Gros Manseng.'),
      it('Château Tour Saint-Honoré, rosé', 'Château Tour Saint-Honoré, rosé', '28 € → 19,60 €', 'AOP Provence.', 'AOP Provence.'),
      it('L’Irrésistible, rosé', 'L’Irrésistible, rosé', '38 € → 26,60 €', 'AOP Provence.', 'AOP Provence.'),
      it('Château Minuty M, rosé', 'Château Minuty M, rosé', '45 € → 31,50 €', 'AOP Provence.', 'AOP Provence.'),
    ],
  },

  /* ---------------- Boissons ---------------- */
  {
    id: 'chaudes',
    group: 'boissons',
    title: 'Les boissons chaudes',
    titleEn: 'Hot drinks',
    note: 'Supplément lait végétal (amande ou avoine) : 1 €.',
    noteEn: 'Plant-based milk (almond or oat): + €1.',
    items: [
      it('Espresso ou décaféiné', 'Espresso or decaf', '2 €'),
      it('Américain', 'Americano', '2,20 €'),
      it('Noisette', 'Noisette (espresso with a dash of milk)', '2,20 €'),
      it('Espresso con panna (chantilly)', 'Espresso con panna (whipped cream)', '3 €'),
      it('Café crème', 'Café crème', '4 €'),
      it('Latte macchiato', 'Latte macchiato', '5 €'),
      it('Moka', 'Mocha', '5 €'),
      it('Cappuccino', 'Cappuccino', '5 €'),
      it('Chocolat chaud', 'Hot chocolate', '5 €'),
      it('Chocolat italien, au lait ou noir', 'Italian hot chocolate, milk or dark', '6 €'),
      it('Chocolat viennois', 'Hot chocolate with whipped cream', '6 €'),
      it('Lait froid ou chaud', 'Cold or hot milk', '3 €'),
    ],
  },
  {
    id: 'thes',
    group: 'boissons',
    title: 'Les thés et infusions',
    titleEn: 'Teas and herbal teas',
    items: [
      it('Thé vert', 'Green tea', '4,50 €', 'Pure Green, menthe, jasmin.', 'Pure Green, mint, jasmine.'),
      it('Thé noir', 'Black tea', '4,50 €', 'Ceylan, Earl Grey Supreme, English Breakfast, vanille passion, citron bio, fruits rouges.', 'Ceylon, Earl Grey Supreme, English Breakfast, vanilla passion fruit, organic lemon, red berries.'),
      it('Infusion', 'Herbal tea', '4,50 €', 'Tilleul, verveine menthe, camomille.', 'Linden, verbena and mint, chamomile.'),
    ],
  },
  {
    id: 'glacees',
    group: 'boissons',
    title: 'Les boissons glacées',
    titleEn: 'Iced drinks',
    items: [
      it('Café frappé', 'Iced coffee', '6 €'),
      it('Café frappé au lait', 'Iced latte', '6 €', 'Vanille, caramel, chocolat ou noisette.', 'Vanilla, caramel, chocolate or hazelnut.'),
      it('Chocolat glacé', 'Iced chocolate', '6 €'),
      it('Matcha', 'Matcha', '8 €'),
    ],
  },
  {
    id: 'presses',
    group: 'boissons',
    title: 'Les fruits pressés',
    titleEn: 'Fresh-pressed juices',
    items: [
      it('Orange pressée', 'Fresh orange juice', '5,50 €'),
      it('Citron pressé', 'Fresh lemon juice', '5,50 €'),
      it('Pomme pressée', 'Fresh apple juice', '5,50 €'),
      it('Detox', 'Detox', '7,50 €', 'Pomme, carotte, gingembre.', 'Apple, carrot, ginger.'),
    ],
  },
  {
    id: 'fraiches',
    group: 'boissons',
    title: 'Les boissons fraîches',
    titleEn: 'Soft drinks',
    items: [
      it('Sodas', 'Sodas', '5,50 €', 'Pepsi, Pepsi Max, 7Up, Ice Tea, Orangina, Fever-Tree tonic.', 'Pepsi, Pepsi Max, 7Up, iced tea, Orangina, Fever-Tree tonic.'),
      it('Jus de fruits Pago', 'Pago fruit juice', '5,50 €', 'Ananas, fraise, tomate.', 'Pineapple, strawberry, tomato.'),
      it('Red Bull', 'Red Bull', '5,50 €'),
      it('Ginger beer', 'Ginger beer', '5,50 €'),
      it('Bitter', 'Bitter', '5,50 €'),
      it('Diabolo', 'Diabolo (lemonade with syrup)', '4,50 €'),
      it('Sirop à l’eau', 'Syrup with water', '3 €'),
    ],
  },
  {
    id: 'eaux',
    group: 'boissons',
    title: 'Les eaux',
    titleEn: 'Water',
    note: 'Prix pour 33 cl / 75 cl.',
    noteEn: 'Prices for 33 cl / 75 cl.',
    items: [
      it('Eau filtrée zéro nitrate, plate ou gazeuse', 'Filtered water (zero nitrate), still or sparkling', '2,50 € / 4 €'),
      it('Evian', 'Evian', '4,50 € / 6,50 €'),
      it('Badoit', 'Badoit', '4,50 € / 6,50 €'),
    ],
  },

  /* ---------------- Bar et vins ---------------- */
  {
    id: 'bieres',
    group: 'bar',
    title: 'Les bières',
    titleEn: 'Beer',
    note: 'Pression : 25 cl / 50 cl / pichet. Supplément Picon ou sirop : 0,50 € (25 cl), 1 € (50 cl).',
    noteEn: 'Draught: 25 cl / 50 cl / pitcher. Picon or syrup: + €0.50 (25 cl), + €1 (50 cl).',
    items: [
      it('Stella Artois', 'Stella Artois', '4,50 € / 8 € / 13 €'),
      it('Hoegaarden', 'Hoegaarden', '5 € / 8,50 € / 14 €'),
      it('Leffe', 'Leffe', '5,50 € / 9 € / 15 €'),
      it('Panaché', 'Shandy', '4,50 € / 8 €'),
      it('En bouteille, 33 cl', 'Bottled, 33 cl', '6,50 €', 'Desperados, Corona, Corona 0.0, IPA locale.', 'Desperados, Corona, Corona 0.0, local IPA.'),
    ],
  },
  {
    id: 'cocktails',
    group: 'bar',
    title: 'Les cocktails',
    titleEn: 'Cocktails',
    items: [
      it('Lynchburg Lemonade', 'Lynchburg Lemonade', '13 €', 'Jack Daniel’s, Cointreau, citron vert, sirop de sucre de canne. Choisissez votre Jack : Classic, Honey, Apple, Fire ou Blackberry.', 'Jack Daniel’s, Cointreau, lime, cane sugar syrup. Pick your Jack: Classic, Honey, Apple, Fire or Blackberry.', ['signature']),
      it('Les spritz', 'Spritzes', '10 €', 'Aperol, Pink (mangue, passion), Campari, Limoncello ou Hugo.', 'Aperol, Pink (mango, passion fruit), Campari, Limoncello or Hugo.'),
      it('Saint-Germain Spritz', 'Saint-Germain Spritz', '14 €', 'Saint-Germain, prosecco, eau gazeuse.', 'Saint-Germain, prosecco, soda water.'),
      it('Spritz Royal', 'Spritz Royal', '15 €', 'Aperol, champagne, eau gazeuse.', 'Aperol, champagne, soda water.'),
      it('Negroni', 'Negroni', '12 €', 'Gin Beefeater, Martini rouge, Campari.', 'Beefeater gin, red Martini, Campari.'),
      it('Mojito', 'Mojito', '12 €', 'Havana, sucre de canne, menthe fraîche, citron vert, eau gazeuse. Avec fruits : + 1 €.', 'Havana rum, cane sugar, fresh mint, lime, soda water. With fruit: + €1.'),
      it('Sex on the Beach', 'Sex on the Beach', '11 €', 'Vodka Wyborowa, liqueur de pêche, jus d’orange, cranberry.', 'Wyborowa vodka, peach liqueur, orange juice, cranberry.'),
      it('Paloma', 'Paloma', '11 €', 'Tequila, jus de pamplemousse, citron vert, sirop de sucre.', 'Tequila, grapefruit juice, lime, sugar syrup.'),
      it('Moscow Mule', 'Moscow Mule', '12 €', 'Vodka, ginger beer, citron vert.', 'Vodka, ginger beer, lime.'),
      it('Ti’ punch', 'Ti’ punch', '10 €', 'Rhum blanc, citron vert, sucre de canne.', 'White rum, lime, cane sugar.'),
      it('Cuba Libre', 'Cuba Libre', '10 €', 'Rhum, citron vert, Pepsi, sucre de canne.', 'Rum, lime, Pepsi, cane sugar.'),
      it('Piña colada', 'Piña colada', '12 €', 'Rhum, purée de coco, jus d’ananas.', 'Rum, coconut purée, pineapple juice.'),
      it('Caipirinha', 'Caipirinha', '11 €', 'Cachaça, sucre de canne, citron vert. Avec fruits : + 1 €.', 'Cachaça, cane sugar, lime. With fruit: + €1.'),
      it('Espresso Martini', 'Espresso Martini', '13 €', 'Espresso, liqueur de café, vodka, sirop de sucre.', 'Espresso, coffee liqueur, vodka, sugar syrup.'),
      it('Pornstar Martini', 'Pornstar Martini', '13 €', 'Vodka, liqueur de fruit de la passion, sirop de vanille, jus de citron vert.', 'Vodka, passion fruit liqueur, vanilla syrup, lime juice.'),
      it('Long Island', 'Long Island', '13 €', 'Gin, tequila, vodka, rhum blanc, Cointreau, Coca-Cola, jus de citron.', 'Gin, tequila, vodka, white rum, Cointreau, cola, lemon juice.'),
      it('Jack Blackberry Smash', 'Jack Blackberry Smash', '13 €', 'Jack Daniel’s Blackberry, sucre de canne, citron vert, menthe.', 'Jack Daniel’s Blackberry, cane sugar, lime, mint.'),
    ],
  },
  {
    id: 'mocktails',
    group: 'bar',
    title: 'Les mocktails',
    titleEn: 'Mocktails',
    note: 'Sans alcool.',
    noteEn: 'Alcohol-free.',
    items: [
      it('Virgin Mojito', 'Virgin Mojito', '8 €'),
      it('Virgin Aperol bitter', 'Virgin Aperol bitter', '8 €'),
      it('Virgin Colada', 'Virgin Colada', '8 €'),
      it('After Glow', 'After Glow', '8 €', 'Ananas, orange, grenadine.', 'Pineapple, orange, grenadine.'),
      it('Gin tonic 0.0', 'Gin & tonic 0.0', '12 €'),
    ],
  },
  {
    id: 'shooters',
    group: 'bar',
    title: 'Les shooters',
    titleEn: 'Shots',
    items: [
      it('Absolut Vodka aromatisée', 'Flavoured Absolut Vodka', '7 €', 'Passion, mangue, citron vert, pêche, vanille, pastèque, framboise ou Tabasco.', 'Passion fruit, mango, lime, peach, vanilla, watermelon, raspberry or Tabasco.'),
      it('Tequila', 'Tequila', '5 €'),
      it('Tequila reposado', 'Tequila reposado', '7 €'),
      it('Get 27', 'Get 27', '5 €'),
      it('Diplomático', 'Diplomático', '7 €'),
      it('Chartreuse', 'Chartreuse', '10 €'),
    ],
  },
  {
    id: 'alcools',
    group: 'bar',
    title: 'Les alcools',
    titleEn: 'Spirits',
    items: [
      it('Ricard, Pastis 51 ou anisette (2 cl)', 'Ricard, Pastis 51 or anisette (2 cl)', '4 €'),
      it('Campari ou Martini (5 cl)', 'Campari or Martini (5 cl)', '5 €'),
      it('Porto Don Pablo (8 cl)', 'Don Pablo port (8 cl)', '6 €'),
      it('Ballantine’s (4 cl)', 'Ballantine’s (4 cl)', '6 €'),
      it('Limoncello (4 cl)', 'Limoncello (4 cl)', '6 €'),
      it('Calvados (4 cl)', 'Calvados (4 cl)', '6 €'),
      it('Rhum 3 Rivières (4 cl)', '3 Rivières rum (4 cl)', '7 €'),
      it('Jameson (4 cl)', 'Jameson (4 cl)', '7 €'),
      it('Get 27 (4 cl)', 'Get 27 (4 cl)', '7 €'),
      it('Gin Beefeater (4 cl)', 'Beefeater gin (4 cl)', '7 €'),
      it('Amaretto (4 cl)', 'Amaretto (4 cl)', '7 €'),
      it('Vodka Wyborowa (4 cl)', 'Wyborowa vodka (4 cl)', '7 €'),
      it('Cointreau (4 cl)', 'Cointreau (4 cl)', '8 €'),
      it('Armagnac (4 cl)', 'Armagnac (4 cl)', '8 €'),
      it('Cognac VSOP (4 cl)', 'Cognac VSOP (4 cl)', '8 €'),
      it('Grappa (4 cl)', 'Grappa (4 cl)', '8 €'),
      it('Jack Daniel’s (4 cl)', 'Jack Daniel’s (4 cl)', '9 €'),
      it('Chivas 12 ans (4 cl)', 'Chivas 12 Year Old (4 cl)', '10 €'),
      it('Whisky japonais Toki (4 cl)', 'Toki Japanese whisky (4 cl)', '10 €'),
      it('Gin Mare (4 cl)', 'Gin Mare (4 cl)', '11 €'),
    ],
  },
  {
    id: 'vin-pays',
    group: 'bar',
    title: 'Vin de pays du Var',
    titleEn: 'Var country wine',
    note: 'Rouge, blanc ou rosé.',
    noteEn: 'Red, white or rosé.',
    items: [
      it('Le verre', 'Glass', '4,50 €'),
      it('La piscine', 'Piscine (rosé over ice)', '5,50 €'),
      it('Le pichet, 25 cl', 'Carafe, 25 cl', '8 €'),
      it('Le pot, 50 cl', 'Pot, 50 cl', '13 €'),
    ],
  },
  {
    id: 'rouges',
    group: 'bar',
    title: 'Les vins rouges',
    titleEn: 'Red wine',
    note: 'Prix au verre / à la bouteille.',
    noteEn: 'Glass / bottle.',
    items: [
      it('Château Tour Saint-Honoré (bio)', 'Château Tour Saint-Honoré (organic)', '6 € / 28 €', 'AOP Provence.', 'AOP Provence.'),
      it('Beaumes de Venise, Dom Venitia', 'Beaumes de Venise, Dom Venitia', '8 € / 34 €', 'AOP Côtes du Rhône.', 'AOP Côtes du Rhône.'),
      it('Château La Trinité', 'Château La Trinité', '9 € / 38 €', 'AOP Saint-Émilion.', 'AOP Saint-Émilion.'),
      it('Moulin de Gassac, pinot noir', 'Moulin de Gassac, Pinot Noir', '8 € / 34 €', 'IGP Pays d’Oc.', 'IGP Pays d’Oc.'),
      it('Trivento', 'Trivento', '8 € / 34 €', 'Malbec, Argentine.', 'Malbec, Argentina.'),
    ],
  },
  {
    id: 'blancs',
    group: 'bar',
    title: 'Les vins blancs',
    titleEn: 'White wine',
    note: 'Prix au verre / à la bouteille.',
    noteEn: 'Glass / bottle.',
    items: [
      it('Château Saint-Honoré (bio)', 'Château Saint-Honoré (organic)', '6 € / 28 €', 'AOP Provence.', 'AOP Provence.'),
      it('Moulin de Gassac, chardonnay', 'Moulin de Gassac, Chardonnay', '6 € / 28 €', 'IGP Méditerranée.', 'IGP Méditerranée.'),
      it('Domaine Durand, chardonnay', 'Domaine Durand, Chardonnay', '4,50 €', 'Au verre.', 'By the glass.'),
      it('Lambert de Valentinois', 'Lambert de Valentinois', '9 € / 48 €', 'Chablis.', 'Chablis.'),
      it('Domaine Reverdy-Ducroux « Les Blanchaux »', 'Domaine Reverdy-Ducroux “Les Blanchaux”', '10 € / 52 €', 'Sancerre.', 'Sancerre.'),
      it('Mirage (moelleux)', 'Mirage (sweet)', '6 € / 28 €', 'IGP Gascogne, gros manseng.', 'IGP Gascogne, Gros Manseng.'),
    ],
  },
  {
    id: 'roses',
    group: 'bar',
    title: 'Les vins rosés',
    titleEn: 'Rosé',
    note: 'AOP Provence. Prix au verre / à la bouteille.',
    noteEn: 'AOP Provence. Glass / bottle.',
    items: [
      it('Château Tour Saint-Honoré', 'Château Tour Saint-Honoré', '6 € / 28 €'),
      it('L’Irrésistible', 'L’Irrésistible', '8 € / 38 €'),
      it('Château Minuty M', 'Château Minuty M', '10 € / 45 €'),
    ],
  },
  {
    id: 'bulles',
    group: 'bar',
    title: 'Les bulles',
    titleEn: 'Sparkling',
    note: 'Prix à la coupe / à la bouteille.',
    noteEn: 'Glass / bottle.',
    items: [
      it('Champagne Nicolas Feuillatte', 'Nicolas Feuillatte Champagne', '12 € / 49 €'),
      it('Prosecco Maison Perlino', 'Maison Perlino Prosecco', '7 € / 29 €'),
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
  {
    quote: "Happy hour ? C'est l'endroit !",
    source: 'TripAdvisor',
    url: TRIPADVISOR_URL,
    lang: 'fr',
    author: 'LyonMounette',
    date: '2026-05',
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
    'En cuisine, on prépare sur place : salades, burgers, pinsa romana, poissons et viandes, avec des frites fraîches. Au bar, bières pression, cocktails, et des rosés AOP Provence au verre.',
  ],
  paragraphsEn: [
    'The pedestrian end of rue Félix Faure runs alongside the Allées de la Liberté. Town hall at one end, the masts of the Old Port behind, the Forville market a few streets away. On the Allées, people play pétanque under the plane trees, and the old bandstand is still there.',
    'Frensh is at number 43 bis, between two seafood places. No oyster platters here: this is an everyday brasserie. A terrace under the awning, a small room with a whitewashed brick wall and hanging plants, and a wall of Provence wines, mostly rosé.',
    'Everything is cooked here: salads, burgers, pinsa romana, fish and meat, with fresh fries. At the bar: draught beer, cocktails and AOP Provence rosé by the glass.',
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
    a: 'Oui : la salade Veggie falafel, les linguine aux légumes, la pinsa Marguerite. Pour les allergies et intolérances, demandez le tableau des allergènes à l’équipe.',
    qEn: 'Do you have vegetarian or vegan dishes?',
    aEn: 'Yes: the Veggie falafel salad, linguine with vegetables, and the Margherita pinsa. For allergies or intolerances, ask the team for the allergen chart.',
  },
  {
    q: 'C’est ouvert pendant le Festival ?',
    a: 'Oui, on est ouvert tous les jours, Festival et congrès compris. Pendant les grandes semaines du Palais, la carte peut changer : demandez au comptoir ou appelez.',
    qEn: 'Are you open during the Film Festival?',
    aEn: 'Yes, we’re open every day, Festival and conventions included. During the big weeks at the Palais, the menu may change, so ask at the bar or give us a call.',
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
