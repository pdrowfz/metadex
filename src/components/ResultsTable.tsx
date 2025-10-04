import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import { Archetype } from '@/components/Archetype';
import { computeExpectedWinRates } from '@/lib/compute-ewr';
import { type MatchupProcessedRow } from '@/types/matchup';

type Props = {
  decks: string[];
  percents: Record<string, number>;
  rows: MatchupProcessedRow[];
};

type SortKey = 'bo3' | 'bo1';

export function ResultsTable({ decks, percents, rows }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('bo3');

  const computedRows = useMemo(() => {
    const list = computeExpectedWinRates(decks, rows, percents);
    return list.sort((a, b) =>
      sortKey === 'bo3' ? b.bo3 - a.bo3 : b.bo1 - a.bo1,
    );
  }, [decks, percents, rows, sortKey]);

  return (
    <div className='overflow-x-auto'>
      <div className='mb-2 flex items-center gap-2 text-sm'>
        <span className='text-gray-600'>Sort by:</span>
        <button
          className={
            'rounded px-2 py-1 ' +
            (sortKey === 'bo3' ? 'bg-gray-900 text-white' : 'bg-gray-100')
          }
          onClick={() => setSortKey('bo3')}
        >
          BO3 EWR
        </button>
        <button
          className={
            'rounded px-2 py-1 ' +
            (sortKey === 'bo1' ? 'bg-gray-900 text-white' : 'bg-gray-100')
          }
          onClick={() => setSortKey('bo1')}
        >
          BO1 EWR
        </button>
      </div>
      <table className='w-full table-fixed border-collapse text-sm'>
        <thead>
          <tr className='border-b'>
            <th className='w-12 p-2 text-left font-medium'>#</th>
            <th className='w-1/2 p-2 text-left font-medium'>Deck</th>
            <th className='w-1/4 p-2 text-right font-medium'>BO3 EWR</th>
            <th className='w-1/4 p-2 text-right font-medium'>BO1 EWR</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence initial={false}>
            {computedRows.map((row, index) => (
              <motion.tr
                key={row.deck}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
                className='border-b last:border-b-0'
              >
                <td className='p-2'>{index + 1}</td>
                <td className='truncate p-2'>
                  <Archetype slug={row.deck} />
                </td>
                <td className='p-2 text-right'>
                  {(row.bo3 * 100).toFixed(1)}%
                </td>
                <td className='p-2 text-right'>
                  {(row.bo1 * 100).toFixed(1)}%
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
}
