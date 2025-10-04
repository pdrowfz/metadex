import { describe, expect, it } from 'vitest';

import { type MatchupCsvRow } from '@/types/matchup';

import {
  __test__,
  parseMatchupsFromCsvText,
  removeDuplicateRows,
  toProcessedRows,
} from './csv';

describe('csv utils', () => {
  it('validates header strictly', () => {
    const good =
      'deck1,deck2,wins,losses,ties,total,win_rate\nA,B,1,2,0,3,33.3\n';
    const result = parseMatchupsFromCsvText(good);
    expect(result.rows.length).toBe(1);

    const badHeader =
      'deckA,deckB,wins,losses,ties,total,win_rate\nA,B,1,2,0,3,33.3\n';
    expect(() => parseMatchupsFromCsvText(badHeader)).toThrow();
  });

  it('removes exact duplicate rows', () => {
    const rows: MatchupCsvRow[] = [
      {
        deck1: 'dragapult-dusknoir',
        deck2: 'charizard-pidgeot',
        wins: 18,
        losses: 19,
        ties: 1,
        total: 38,
        win_rate: 48.2,
      },
      {
        deck1: 'dragapult-dusknoir',
        deck2: 'charizard-pidgeot',
        wins: 18,
        losses: 19,
        ties: 1,
        total: 38,
        win_rate: 48.2,
      },
    ];
    const deduped = removeDuplicateRows(rows);
    expect(deduped.length).toBe(1);
  });

  it('computes true win rate ignoring ties', () => {
    const processed = toProcessedRows([
      {
        deck1: 'a',
        deck2: 'b',
        wins: 10,
        losses: 5,
        ties: 2,
        total: 17,
        win_rate: 58.8,
      },
    ]);
    expect(processed[0].trueWinRate).toBeCloseTo(10 / 15);
  });

  it('computeTrueWinRate handles zero denominator', () => {
    expect(__test__.computeTrueWinRate(0, 0)).toBe(0);
  });
});
