const snacks = [
  'smulrol',
  'sitostick',
  'chickenwings',
  'vlammetjes',
  'shoarmarol',
  'friet',
  'berenklauw',
  'pikanto',
  'falafel',
  'gehaktbal',
  'bamischijf',
  'nasibal',
  'kaassoufflé',
  'hamkaassoufflé',
  'bitterballen',
  'kipcorn',
  'mexicano',
  'kipsaté',
  'kipnuggets',
  'hamburger',
  'cheeseburger',
  'kroket',
  'loempia',
  'frikandel',
  'schnitzel',
  'lekkerbek',
  'viandel',
  'smulrol',
  'lihanboutje',
  'pikanto',
  'sjaslick',
  'braadworst'

];

const containers = [
  'broodje',
  'puntzak',
  'bakje',
  'schotel',
  'frietje',
];

const sauces = [
  'mayonaise',
  'oorlog',
  'pindasaus',
  'curry',
  'satésaus',
  'piccalilly',
  'joppiesaus',
  'mosterd',
  'ketchup',
  'chilisaus',
  'sambal',
  'bbq-saus',
  'knoflooksaus'
];

const randomFromArray = (arr:any[]) => arr[Math.floor(Math.random() * arr.length)];

export const randomText = ():string => [randomFromArray(containers), randomFromArray(snacks), randomFromArray(sauces)].join(' ');
