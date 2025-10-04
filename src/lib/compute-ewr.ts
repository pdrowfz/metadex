import { ewrBo3 } from '@/lib/ewr';
import { type MatchupProcessedRow } from '@/types/matchup';

export type DeckEwr = {
  deck: string;
  bo1: number;
  bo3: number;
};

type PairKey = string;

function makeKey(a: string, b: string): PairKey {
  return `${a}||${b}`;
}

export function buildPairwiseLookup(
  rows: MatchupProcessedRow[],
): Map<PairKey, number> {
  const map = new Map<PairKey, number>();
  for (const row of rows) {
    map.set(makeKey(row.deck1, row.deck2), row.trueWinRate);
  }
  return map;
}

export function getWinProb(
  lookup: Map<PairKey, number>,
  a: string,
  b: string,
): number {
  if (a === b) return 0.5;
  const direct = lookup.get(makeKey(a, b));
  if (typeof direct === 'number') return direct;
  const reverse = lookup.get(makeKey(b, a));
  if (typeof reverse === 'number') return 1 - reverse;
  return 0.5;
}

export function computeExpectedWinRates(
  decks: string[],
  rows: MatchupProcessedRow[],
  percents: Record<string, number>,
): DeckEwr[] {
  const lookup = buildPairwiseLookup(rows);
  const weights: Record<string, number> = {};
  let total = 0;
  for (const d of decks) {
    const v = Number.isFinite(percents[d]) ? Math.max(0, percents[d]) : 0;
    weights[d] = v;
    total += v;
  }
  if (total <= 0) {
    return decks.map((deck) => ({ deck, bo1: 0, bo3: 0 }));
  }
  for (const d of decks) weights[d] = weights[d] / total;

  const results: DeckEwr[] = decks.map((deck) => {
    let bo1 = 0;
    let bo3 = 0;
    for (const opponent of decks) {
      const w = weights[opponent];
      if (w <= 0) continue;
      const p = getWinProb(lookup, deck, opponent);
      bo1 += w * p;
      bo3 += w * ewrBo3(p);
    }
    return { deck, bo1, bo3 };
  });
  return results;
}
