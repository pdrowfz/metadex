import { z } from 'zod';

export const csvHeaderOrder = [
  'deck1',
  'deck2',
  'wins',
  'losses',
  'ties',
  'total',
  'win_rate',
] as const;

export const matchupCsvRowSchema = z.object({
  deck1: z.string().min(1),
  deck2: z.string().min(1),
  wins: z.number().int().nonnegative(),
  losses: z.number().int().nonnegative(),
  ties: z.number().int().nonnegative(),
  total: z.number().int().nonnegative(),
  win_rate: z.number(),
});

export type MatchupCsvRow = z.infer<typeof matchupCsvRowSchema>;

export type MatchupProcessedRow = MatchupCsvRow & {
  trueWinRate: number; // wins / (wins + losses)
};
