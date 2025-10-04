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
