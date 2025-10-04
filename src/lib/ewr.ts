// BO1 match win probability is p
// BO3 match win probability = P(win at least 2 games out of 3)
// = C(3,2)*p^2*(1-p) + C(3,3)*p^3 = 3p^2(1-p) + p^3 = 3p^2 - 2p^3

export function ewrBo1(p: number): number {
  if (!Number.isFinite(p)) return 0;
  if (p < 0) return 0;
  if (p > 1) return 1;
  return p;
}

export function ewrBo3(p: number): number {
  const x = ewrBo1(p);
  return 3 * x * x - 2 * x * x * x;
}
