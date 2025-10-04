import Papa from 'papaparse';

import {
  csvHeaderOrder,
  type MatchupCsvRow,
  matchupCsvRowSchema,
  type MatchupProcessedRow,
} from '@/types/matchup';

export type ParseResult = {
  rows: MatchupProcessedRow[];
  uniqueDecks: string[];
};

const headerValidationErrorMessage =
  'Invalid file format. Please use a .csv file exported by Trainer Hill.';

function computeTrueWinRate(wins: number, losses: number): number {
  const denominator = wins + losses;
  if (denominator <= 0) return 0;
  return wins / denominator;
}

function isValidHeader(header: unknown): header is string[] {
  if (!Array.isArray(header)) return false;
  if (header.length !== csvHeaderOrder.length) return false;
  return header.every((key, index) => key === csvHeaderOrder[index]);
}

export function removeDuplicateRows(rows: MatchupCsvRow[]): MatchupCsvRow[] {
  const seen = new Set<string>();
  const deduped: MatchupCsvRow[] = [];
  for (const row of rows) {
    const key = JSON.stringify([
      row.deck1,
      row.deck2,
      row.wins,
      row.losses,
      row.ties,
      row.total,
      row.win_rate,
    ]);
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(row);
  }
  return deduped;
}

export function toProcessedRows(rows: MatchupCsvRow[]): MatchupProcessedRow[] {
  return rows.map((row) => ({
    ...row,
    trueWinRate: computeTrueWinRate(row.wins, row.losses),
  }));
}

export function getUniqueDecks(rows: MatchupCsvRow[]): string[] {
  const set = new Set<string>();
  for (const row of rows) {
    set.add(row.deck1);
    set.add(row.deck2);
  }
  return Array.from(set);
}

export async function parseMatchupsFromFile(file: File): Promise<ParseResult> {
  const text = await file.text();
  return parseMatchupsFromCsvText(text);
}

export function parseMatchupsFromCsvText(csvText: string): ParseResult {
  const result = Papa.parse(csvText, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: 'greedy',
  });

  if (result.errors?.length) {
    throw new Error(headerValidationErrorMessage);
  }

  const metaHeader = (result.meta?.fields ?? []) as unknown;
  if (!isValidHeader(metaHeader)) {
    throw new Error(headerValidationErrorMessage);
  }

  const unknownRows = (result.data ?? []) as unknown[];
  const rows: MatchupCsvRow[] = [];
  for (const candidate of unknownRows) {
    const parse = matchupCsvRowSchema.safeParse(candidate);
    if (!parse.success) {
      throw new Error(headerValidationErrorMessage);
    }
    rows.push(parse.data);
  }

  const deduped = removeDuplicateRows(rows);
  const processed = toProcessedRows(deduped);
  const uniqueDecks = getUniqueDecks(deduped);

  return { rows: processed, uniqueDecks };
}

// Named exports for testing
export const __test__ = {
  isValidHeader,
  computeTrueWinRate,
};
