export type Archetype = {
  slug: string;
  displayName: string;
  pokemons: string[];
};

export const archetypes: Record<string, Archetype> = {
  'alakazam-dudunsparce': {
    slug: 'alakazam-dudunsparce',
    displayName: 'Alakazam Dudunsparce',
    pokemons: ['alakazam', 'dudunsparce'],
  },
  'ceruledge-ex': {
    slug: 'ceruledge-ex',
    displayName: 'Ceruledge',
    pokemons: ['ceruledge'],
  },
  'charizard-pidgeot': {
    slug: 'charizard-pidgeot',
    displayName: 'Charizard Pidgeot',
    pokemons: ['charizard', 'pidgeot'],
  },
  'conkeldurr-twm': {
    slug: 'conkeldurr-twm',
    displayName: 'Conkeldurr',
    pokemons: ['conkeldurr'],
  },
  'crustle-dri': {
    slug: 'crustle-dri',
    displayName: 'Crustle',
    pokemons: ['crustle'],
  },
  'cynthia-garchomp-ex': {
    slug: 'cynthia-garchomp-ex',
    displayName: "Cynthia's Garchomp",
    pokemons: ['garchomp'],
  },
  'dragapult-charizard': {
    slug: 'dragapult-charizard',
    displayName: 'Dragapult Charizard',
    pokemons: ['dragapult', 'charizard'],
  },
  'dragapult-dusknoir': {
    slug: 'dragapult-dusknoir',
    displayName: 'Dragapult Dusknoir',
    pokemons: ['dragapult', 'dusknoir'],
  },
  'dragapult-ex': {
    slug: 'dragapult-ex',
    displayName: 'Dragapult',
    pokemons: ['dragapult'],
  },
  'ethan-typhlosion': {
    slug: 'ethan-typhlosion',
    displayName: "Ethan's Typhlosion",
    pokemons: ['typhlosion'],
  },
  'flareon-noctowl': {
    slug: 'flareon-noctowl',
    displayName: 'Eevee Box',
    pokemons: ['flareon', 'noctowl'],
  },
  'froslass-munkidori': {
    slug: 'froslass-munkidori',
    displayName: 'Froslass Munkidori',
    pokemons: ['froslass', 'munkidori'],
  },
  'gardevoir-ex-sv': {
    slug: 'gardevoir-ex-sv',
    displayName: 'Gardevoir',
    pokemons: ['gardevoir'],
  },
  'gardevoir-jellicent': {
    slug: 'gardevoir-jellicent',
    displayName: 'Gardevoir Jellicent',
    pokemons: ['gardevoir', 'jellicent'],
  },
  'gholdengo-ex': {
    slug: 'gholdengo-ex',
    displayName: 'Gholdengo',
    pokemons: ['gholdengo'],
  },
  'gholdengo-lunatone': {
    slug: 'gholdengo-lunatone',
    displayName: 'Gholdengo Lunatone',
    pokemons: ['gholdengo', 'lunatone'],
  },
  'gholdengo-joltik-box': {
    slug: 'gholdengo-joltik-box',
    displayName: 'Gholdengo Joltik Box',
    pokemons: ['gholdengo', 'joltik'],
  },
  'grimmsnarl-froslass': {
    slug: 'grimmsnarl-froslass',
    displayName: 'Grimmsnarl Froslass',
    pokemons: ['grimmsnarl', 'froslass'],
  },
  'ho-oh-armarouge': {
    slug: 'ho-oh-armarouge',
    displayName: 'Ho-Oh Armarouge',
    pokemons: ['ho-oh', 'armarouge'],
  },
  'hydrapple-ogerpon': {
    slug: 'hydrapple-ogerpon',
    displayName: 'Hydrapple Ogerpon',
    pokemons: ['hydrapple', 'ogerpon'],
  },
  'joltik-box': {
    slug: 'joltik-box',
    displayName: 'Joltik Box',
    pokemons: ['joltik', 'pikachu'],
  },
  'lucario-hariyama': {
    slug: 'lucario-hariyama',
    displayName: 'Mega Lucario',
    pokemons: ['lucario-mega', 'hariyama'],
  },
  'mega-absol-ex': {
    slug: 'mega-absol-ex',
    displayName: 'Mega Absol Box',
    pokemons: ['absol-mega', 'ogerpon-cornerstone'],
  },
  'mega-venusaur-ex': {
    slug: 'mega-venusaur-ex',
    displayName: 'Mega Venusaur',
    pokemons: ['venusaur-mega'],
  },
  'miraidon-eelektrik': {
    slug: 'miraidon-eelektrik',
    displayName: 'Miraidon Eelektrik',
    pokemons: ['miraidon', 'eelektrik'],
  },
  'n-zoroark': {
    slug: 'n-zoroark',
    displayName: "N's Zoroark",
    pokemons: ['zoroark'],
  },
  other: {
    slug: 'other',
    displayName: 'Other',
    pokemons: ['substitute'],
  },
  'pidgeot-control': {
    slug: 'pidgeot-control',
    displayName: 'Pidgeot Control',
    pokemons: ['pidgeot'],
  },
  'raging-bolt-ogerpon': {
    slug: 'raging-bolt-ogerpon',
    displayName: 'Raging Bolt Ogerpon',
    pokemons: ['raging-bolt', 'ogerpon'],
  },
  'tera-box': {
    slug: 'tera-box',
    displayName: 'Tera Box',
    pokemons: ['noctowl', 'ogerpon-wellspring'],
  },
  'hydreigon-ex': {
    slug: 'hydreigon-ex',
    displayName: 'Hydreigon',
    pokemons: ['hydreigon'],
  },
  'greninja-ex': {
    slug: 'greninja-ex',
    displayName: 'Greninja',
    pokemons: ['greninja'],
  },
  'slowking-scr': {
    slug: 'slowking-scr',
    displayName: 'Slowking',
    pokemons: ['slowking'],
  },
  'archaludon-ex': {
    slug: 'archaludon-ex',
    displayName: 'Archaludon',
    pokemons: ['archaludon'],
  },
  'milotic-farigiraf': {
    slug: 'milotic-farigiraf',
    displayName: 'Milotic Farigiraf',
    pokemons: ['milotic', 'farigiraf'],
  },
  'roaring-moon-ex': {
    slug: 'roaring-moon-ex',
    displayName: 'Roaring Moon',
    pokemons: ['roaring-moon'],
  },
  'blissey-ex': {
    slug: 'blissey-ex',
    displayName: 'Blissey',
    pokemons: ['blissey'],
  },
  'rocket-mewtwo-ex': {
    slug: 'rocket-mewtwo-ex',
    displayName: "Rocket's Mewtwo",
    pokemons: ['mewtwo', 'spidops'],
  },
  'iron-thorns-ex': {
    slug: 'iron-thorns-ex',
    displayName: 'Iron Thorns',
    pokemons: ['iron-thorns'],
  },
  'festival-lead': {
    slug: 'festival-lead',
    displayName: 'Festival Lead',
    pokemons: ['dipplin', 'thwackey'],
  },
  'charizard-noctowl': {
    slug: 'charizard-noctowl',
    displayName: 'Charizard Noctowl',
    pokemons: ['charizard', 'noctowl'],
  },
  'ogerpon-ex': {
    slug: 'ogerpon-ex',
    displayName: 'Ogerpon',
    pokemons: ['ogerpon', 'ogerpon-wellspring'],
  },
  'great-tusk-tef': {
    slug: 'great-tusk-tef',
    displayName: 'Great Tusk Mill',
    pokemons: ['great-tusk'],
  },
  'charizard-dusknoir': {
    slug: 'charizard-dusknoir',
    displayName: 'Charizard Dusknoir',
    pokemons: ['charizard', 'dusknoir'],
  },
  'rocket-porygon-z': {
    slug: 'rocket-porygon-z',
    displayName: "Rocket's Porygon-Z",
    pokemons: ['porygon-z'],
  },
  'wugtrio-svi': {
    slug: 'wugtrio-svi',
    displayName: 'Wugtrio Mill',
    pokemons: ['wugtrio'],
  },
  'chien-pao-baxcalibur': {
    slug: 'chien-pao-baxcalibur',
    displayName: 'Chien-Pao Baxcalibur',
    pokemons: ['chien-pao', 'baxcalibur'],
  },
  'miraidon-ex': {
    slug: 'miraidon-ex',
    displayName: 'Miraidon',
    pokemons: ['miraidon'],
  },
  'hop-zacian': {
    slug: 'hop-zacian',
    displayName: "Hop's Zacian",
    pokemons: ['zacian-crowned', 'snorlax'],
  },
  'terapagos-noctowl': {
    slug: 'terapagos-noctowl',
    displayName: 'Terapagos Noctowl',
    pokemons: ['terapagos', 'noctowl'],
  },
  'okidogi-twm': {
    slug: 'okidogi-twm',
    displayName: 'Okidogi',
    pokemons: ['okidogi'],
  },
  'poison-archaludon': {
    slug: 'poison-archaludon',
    displayName: 'Poison Archaludon',
    pokemons: ['archaludon', 'brute-bonnet'],
  },
};

export function getArchetype(slug: string): Archetype {
  const found = archetypes[slug];
  if (found) return found;
  return {
    slug,
    displayName: slug,
    pokemons: ['substitute'],
  };
}
