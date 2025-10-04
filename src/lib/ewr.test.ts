import { describe, expect, it } from 'vitest';

import { ewrBo1, ewrBo3 } from './ewr';

describe('EWR utils', () => {
  it('ewrBo1 clamps to [0,1]', () => {
    expect(ewrBo1(-0.2)).toBe(0);
    expect(ewrBo1(1.2)).toBe(1);
    expect(ewrBo1(0.5)).toBe(0.5);
  });

  it('ewrBo3 formula 3p^2 - 2p^3', () => {
    const p = 0.6;
    expect(ewrBo3(p)).toBeCloseTo(3 * p * p - 2 * p * p * p);
    expect(ewrBo3(0)).toBe(0);
    expect(ewrBo3(1)).toBe(1);
  });
});
