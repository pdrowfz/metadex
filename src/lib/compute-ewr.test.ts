import { describe, expect, it } from 'vitest';

import { type MatchupProcessedRow } from '@/types/matchup';

import { computeExpectedWinRates } from './compute-ewr';

const rows: MatchupProcessedRow[] = [
  {
    deck1: 'A',
    deck2: 'B',
    wins: 0,
    losses: 0,
    ties: 0,
    total: 0,
    win_rate: 0,
    trueWinRate: 0.6,
  },
  {
    deck1: 'B',
    deck2: 'C',
    wins: 0,
    losses: 0,
    ties: 0,
    total: 0,
    win_rate: 0,
    trueWinRate: 0.55,
  },
];

describe('computeExpectedWinRates', () => {
  it('weights by percents and handles missing reverse by complement', () => {
    const decks = ['A', 'B', 'C'];
    const percents = { A: 50, B: 30, C: 20 };
    const result = computeExpectedWinRates(decks, rows, percents);
    const a = result.find((r) => r.deck === 'A')!;
    const b = result.find((r) => r.deck === 'B')!;
    const c = result.find((r) => r.deck === 'C')!;
    expect(a.bo1).toBeGreaterThan(b.bo1);
    expect(b.bo1).toBeGreaterThan(c.bo1);
  });
});
