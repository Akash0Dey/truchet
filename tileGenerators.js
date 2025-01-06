const inverse =
  (f) =>
  (...args) =>
    1 - f(...args);

export const constantly = (x) => () => x;
export const zig = (r, c) => c;
export const zag = (r, c) => r;
export const classicAlternate = (r, c) => r + c;
export const classicSquare = (r, c) => r * c;
export const classicTruchet = () => Math.floor(Math.random() * 1000);

export const max = (r, c) => Math.max(r, c);
export const min = (r, c) => Math.min(r, c);

export const halfAndHalf = (r, c, w, h) => (c < w / 2 ? 0 : 1);
export const halfAndHalfInverse = inverse(halfAndHalf);

export const rowHalfAndHalf = (r, c, w, h) => halfAndHalf(c, r, h, w);
export const rowHalfAndHalfInverse = inverse(rowHalfAndHalf);

export const quarterLand = (r, c, w, h) =>
  (r < h / 2 && c < w / 2) || (r >= h / 2 && c >= w / 2) ? 1 : 0;
export const inverseQuarterLand = inverse(quarterLand);

export const diagonally = (r, c) => (r > c ? 0 : 1);
export const diagonallyInverse = inverse(diagonally);

export const circle = (r, c, w, h) => {
  const x = w / 2 - c;
  const y = h / 2 - r;
  const radius = Math.min(w / 2, h / 2);
  return Math.sqrt(x * x + y * y) > radius ? 1 : 0;
};

export const borderLands = (r, c, w, h) => {
  if (c >= w / 2) {
    return r % 2;
  }
  return c % 2;
  //   return Math.random() > 0.9 ? 1 : 0;
  // }
  // return Math.random() > 0.1 ? (r + c) % 2 : 0;
};

export const gradually = (r, c, w, h) => {
  const noiseThreshold = c / w;
  return Math.random() >= noiseThreshold ? c : 0;
};

export const glitch =
  (f, threshold) =>
  (...args) =>
    Math.random() >= threshold ? f(...args) : 0;

export const leftRight = (left, right) => (r, c, w, h) =>
  c < w / 2 ? left(r, c, w, h) : right(r, c, w, h);

export const topBottom = (top, bottom) => (r, c, w, h) =>
  r < h / 2 ? top(r, c, w, h) : bottom(r, c, w, h);

export const wild =(f, cfg) =>
  (...args) =>
    cfg[f(...args) % cfg.length];
