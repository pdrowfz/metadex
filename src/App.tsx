import { useMemo, useState } from 'react';

import { FileUploader } from '@/components/FileUploader';
import { type ParseResult } from '@/lib/csv';

function App() {
  const [data, setData] = useState<ParseResult | null>(null);

  const uniqueDecks = useMemo(() => data?.uniqueDecks ?? [], [data]);

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 p-4'>
      <header className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>MetaDex</h1>
      </header>

      <section>
        <h2 className='mb-2 text-lg font-semibold'>Upload matchups CSV</h2>
        <FileUploader onParsed={setData} />
      </section>

      {uniqueDecks.length > 0 && (
        <section>
          <h2 className='mb-2 text-lg font-semibold'>Unique decks</h2>
          <ul className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
            {uniqueDecks.map((deck) => (
              <li
                key={deck}
                className='rounded-md border border-gray-200 px-3 py-2 text-sm'
              >
                {deck}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default App;
