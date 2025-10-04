import { getArchetype } from '@/data/archetypes';

import { Sprite } from './Sprite';

type Props = {
  slug: string;
  size?: number;
};

export function Archetype({ slug, size = 30 }: Props) {
  const archetype = getArchetype(slug);
  const [p1, p2] =
    archetype.pokemons.length === 1
      ? [archetype.pokemons[0], null]
      : [archetype.pokemons[0], archetype.pokemons[1] ?? null];

  return (
    <div className='flex items-center gap-2'>
      <div className='flex w-20 items-center justify-start gap-1'>
        <Sprite pokemon={p1!} size={size} />
        {p2 ? (
          <Sprite pokemon={p2} size={size} />
        ) : (
          <span
            className='inline-block'
            style={{ width: size, height: size }}
          />
        )}
      </div>
      <span className='truncate'>{archetype.displayName}</span>
    </div>
  );
}
