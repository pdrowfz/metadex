import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

import logoUrl from '@/assets/logo.svg';
import { Archetype } from '@/components/Archetype';
import { FileUploader } from '@/components/FileUploader';
import { ResultsTable } from '@/components/ResultsTable';
import { Input } from '@/components/ui/input';
import { type ParseResult } from '@/lib/csv';
import { clampPercent, sumPercents } from '@/lib/percent';

function App() {
  const [data, setData] = useState<ParseResult | null>(null);

  const [deckPercents, setDeckPercents] = useState<Record<string, number>>({});
  const [debouncedPercents, setDebouncedPercents] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem('metadex:deckPercents');
      if (raw) {
        const parsed = JSON.parse(raw) as Record<string, number>;
        if (parsed && typeof parsed === 'object') {
          setDeckPercents(parsed);
        }
      }
    } catch {
      // no-op: optimistic update
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        'metadex:deckPercents',
        JSON.stringify(deckPercents),
      );
    } catch {
      // no-op: optimistic update
    }
  }, [deckPercents]);

  // Debounce sorting to smooth animations while the user is still editing
  useEffect(() => {
    const handle = setTimeout(() => setDebouncedPercents(deckPercents), 1000);
    return () => clearTimeout(handle);
  }, [deckPercents]);

  const uniqueDecks = useMemo(() => data?.uniqueDecks ?? [], [data]);

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 p-4'>
      <header className='flex items-center gap-3'>
        <img src={logoUrl} alt='MetaDex logo' className='h-16 w-auto' />
        <h1 className='text-3xl font-bold'>MetaDex</h1>
      </header>

      <section>
        <h2 className='mb-2 text-center text-lg font-semibold'>
          Upload Matchups .csv file exported from Trainer Hill
        </h2>
        <div className='mx-auto max-w-xl'>
          <FileUploader onParsed={setData} />
        </div>
      </section>

      {uniqueDecks.length > 0 && (
        <section>
          <div className='grid grid-cols-1 gap-16 md:grid-cols-2'>
            <div>
              <h2 className='mb-2 text-lg font-semibold'>
                Meta Percentages Prediction
              </h2>
              <div className='mb-2 flex items-center justify-between text-sm'>
                <div className='text-gray-600'>
                  Enter expected meta percentages
                </div>
                <div>
                  Total:{' '}
                  <span
                    className={
                      sumPercents(Object.values(deckPercents)) > 100
                        ? 'font-semibold text-red-600'
                        : 'font-medium'
                    }
                  >
                    {sumPercents(Object.values(deckPercents)).toFixed(1)}%
                  </span>
                </div>
              </div>

              {sumPercents(Object.values(deckPercents)) > 100 && (
                <p className='mb-2 text-sm text-red-600'>
                  Please keep total ≤ 100%.
                </p>
              )}
              <ul className='grid grid-cols-1 gap-2'>
                <AnimatePresence initial={false}>
                  {uniqueDecks
                    .slice()
                    .sort(
                      (a, b) =>
                        (debouncedPercents[b] ?? 0) -
                        (debouncedPercents[a] ?? 0),
                    )
                    .map((deck) => (
                      <motion.li
                        key={deck}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{
                          layout: { duration: 0.5, ease: 'easeInOut' },
                        }}
                        className='flex items-center justify-between gap-3 rounded-md border border-gray-200 px-3 py-2 text-sm'
                      >
                        <span className='truncate pr-2'>
                          <Archetype slug={deck} />
                        </span>
                        <div className='flex items-center gap-1'>
                          <Input
                            inputMode='decimal'
                            type='number'
                            step='1'
                            min='0'
                            max='100'
                            className='h-8 w-28 text-right'
                            value={
                              Number.isFinite(deckPercents[deck])
                                ? deckPercents[deck]
                                : ''
                            }
                            onChange={(e) => {
                              const nextRaw = e.target.value;
                              const next = clampPercent(Number(nextRaw));
                              setDeckPercents((prev) => ({
                                ...prev,
                                [deck]: next,
                              }));
                            }}
                          />
                          <span className='text-gray-500'>%</span>
                        </div>
                      </motion.li>
                    ))}
                </AnimatePresence>
              </ul>
            </div>
            <div>
              <h2 className='mb-2 text-lg font-semibold'>Expected Win Rates</h2>
              <ResultsTable
                decks={uniqueDecks}
                percents={debouncedPercents}
                rows={data?.rows ?? []}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
