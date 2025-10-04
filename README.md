# MetaDex

MetaDex is a single-page web app that helps you evaluate the expected win rate (EWR) of Pokémon TCG decks for a given tournament. It combines real matchup data exported from Trainer Hill with your predicted metagame percentages to estimate deck strength in Best-of-1 and Best-of-3.

- Data source: export matchup CSVs from [Trainer Hill](https://www.trainerhill.com/meta?game=PTCG)
- Inspiration: Simon Feng’s video on the topic ([YouTube](https://www.youtube.com/watch?v=uazbYJt7h9g))

## What it does

1. Upload a CSV with matchup data (from Trainer Hill)
   - Validates the header and rows
   - Removes exact duplicate rows
   - Computes a true win rate per matchup (BO1, ignoring ties): wins / (wins + losses)
2. Enter your expected meta share (%) for each deck
   - Values can be partial (e.g., summing to 80%); inputs are normalized for calculations
   - Values persist to localStorage and restore on reload
3. See results ranked by EWR
   - BO1 EWR: weighted average of a deck’s matchup win rates across the field using your meta percentages
   - BO3 EWR: derived from BO1 using 3p² − 2p³ (probability of winning at least 2 games in a BO3)
   - Sort by BO3 (default) or BO1

## CSV format

Expected header:

```
deck1,deck2,wins,losses,ties,total,win_rate
```

Example row:

```
dragapult-dusknoir,charizard-pidgeot,18,19,1,38,48.2
```

If the format is invalid, the app will show: “Invalid file format. Please use a .csv file exported by Trainer Hill.”

## Archetypes and sprites

- Map deck slugs to human-readable archetype names and Pokémon sprites in `src/data/archetypes.ts`.
- Unknown slugs fall back to the slug text and a substitute sprite.
- Sprites load from the Limitless TCG CDN using the Pokémon identifiers in the mapping.

## Tech stack

- React + TypeScript + Vite
- Tailwind styling with shadcn/ui components
- CSV parsing with PapaParse, schema validation with Zod
- Unit tests with Vitest for core utilities
- GitHub Pages deployment via GitHub Actions

## Running locally

1. Clone the repo
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the dev server
   ```bash
   npm run dev
   ```
4. Open the local URL printed in the terminal (typically `http://localhost:5173`).

## Deploying

This project is set up to deploy automatically to GitHub Pages on pushes to `main`. The workflow builds the site with the correct base path and publishes it.

## How EWR is computed (overview)

- Normalize entered meta shares so weights sum to 1 (over decks you filled).
- For each deck A and opponent B:
  - If A vs B is present, use that true win rate p.
  - If only B vs A exists, use 1 − p.
  - If neither exists, assume 50%.
- BO1 EWR(A) = Σ over B [ weight(B) × p(A vs B) ]
- BO3 EWR(A) = Σ over B [ weight(B) × (3p² − 2p³) ]

## Contributing

PRs are welcome. Useful areas:

- Adding archetype mappings in `src/data/archetypes.ts`
- Improving CSV validation and edge-case handling
- Enhancing UI/UX and mobile ergonomics

## License

MIT
