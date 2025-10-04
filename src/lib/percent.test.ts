import { describe, expect, it } from 'vitest';

import { clampPercent, sumPercents } from './percent';

describe('percent utils', () => {
  it('clamps and rounds to 1 decimal', () => {
    expect(clampPercent(-5)).toBe(0);
    expect(clampPercent(100.123)).toBe(100);
    expect(clampPercent(12.34)).toBe(12.3);
    expect(clampPercent(12.35)).toBe(12.4);
  });

  it('sums and rounds to 1 decimal', () => {
    expect(sumPercents([10, 20.12, 30.16])).toBe(60.3);
  });
});
