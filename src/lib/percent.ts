export function clampPercent(value: number): number {
  if (Number.isNaN(value)) return 0;
  if (value < 0) return 0;
  if (value > 100) return 100;
  return Math.round(value * 10) / 10;
}

export function sumPercents(values: number[]): number {
  const total = values.reduce(
    (acc, v) => acc + (Number.isFinite(v) ? v : 0),
    0,
  );
  return Math.round(total * 10) / 10;
}
