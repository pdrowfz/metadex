type Props = {
  pokemon: string;
  size?: number; // used as max-height in px
};

const FALLBACK_URL =
  'https://limitless3.nyc3.cdn.digitaloceanspaces.com/pokemon/substitute.png';

export function Sprite({ pokemon, size = 30 }: Props) {
  const src = `https://r2.limitlesstcg.net/pokemon/gen9/${pokemon}.png`;
  return (
    <img
      src={src}
      onError={(e) => {
        (e.target as HTMLImageElement).src = FALLBACK_URL;
      }}
      alt={pokemon}
      style={{
        maxHeight: `${size}px`,
        maxWidth: 'none',
        height: 'auto',
        width: 'auto',
      }}
      className='inline-block select-none'
    />
  );
}
