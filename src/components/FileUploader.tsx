import { useCallback, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { parseMatchupsFromFile, type ParseResult } from '@/lib/csv';

type Props = {
  onParsed: (result: ParseResult) => void;
};

export function FileUploader({ onParsed }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;
      const file = files[0];
      setError(null);
      setLoading(true);
      try {
        if (!file.name.toLowerCase().endsWith('.csv')) {
          throw new Error(
            'Invalid file format. Please use a .csv file exported by Trainer Hill.',
          );
        }
        const parsed = await parseMatchupsFromFile(file);
        onParsed(parsed);
      } catch (e) {
        setError(
          e instanceof Error
            ? e.message
            : 'Invalid file format. Please use a .csv file exported by Trainer Hill.',
        );
      } finally {
        setLoading(false);
      }
    },
    [onParsed],
  );

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setDragActive(false);
      handleFiles(event.dataTransfer.files);
    },
    [handleFiles],
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(true);
  }, []);

  const onDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
  }, []);

  return (
    <div className='w-full max-w-xl'>
      <div
        className={
          'flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center transition ' +
          (dragActive
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400')
        }
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={() => fileInputRef.current?.click()}
        role='button'
        aria-label='Upload CSV'
      >
        <p className='mb-2 text-sm text-gray-600'>
          Drag and drop a .csv file here, or
        </p>
        <Button disabled={loading} type='button' variant='default' size='sm'>
          {loading ? 'Processing…' : 'Choose file'}
        </Button>
        <input
          ref={fileInputRef}
          type='file'
          accept='.csv'
          className='hidden'
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {error && <p className='mt-3 text-sm text-red-600'>{error}</p>}
    </div>
  );
}
