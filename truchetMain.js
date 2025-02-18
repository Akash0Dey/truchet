import { defaultTileSet, generateTiles } from './truchet.js';
import {
  borderLands,
  circle,
  classicAlternate,
  classicSquare,
  classicTruchet,
  gradually,
  halfAndHalf,
  halfAndHalfInverse,
  diagonally,
  zag,
  zig,
  glitch,
  leftRight,
  topBottom,
  quarterLand,
  wild,
} from './tileGenerators.js';
import { zagMe, zigMe } from './myTruchet.js';

// Vary this. Try any or all of the above
// Also try each algorithm with a variety of widths and heights
// For example: const tileGenerator = halfAndHalf;

// leftRight distributes patterns between the left and right halves
// topBottom distributes patterns between the top and bottom halves
// They can be combined in any order. Try variations.
const tg1 = leftRight(zig, zag);
const tg2 = topBottom(zig, zag);
const tg3 = topBottom(leftRight(zig, zag), leftRight(zag, zig));

// Play with the "config" parameter(second parameter)
// The tiles will arrange according to the algorithm chosen(classicAlternate)
// But they are also influenced by your configuration
const tg4 = wild(classicAlternate, [1, 0, 1]);
const tg5 = wild(classicAlternate, [1, 1, 1]);
const tg6 = wild(classicSquare, [1, 1, 0, 0]);
const tg10 = wild(classicSquare, [0, 1, 0]);
const tg11 = wild(classicSquare, [1, 0, 1, 1]);
const tg12 = wild(classicSquare, [1, 1, 0, 1]);
const tg9 = wild(classicSquare, [0, 1, 0, 1]);
const tg9tg6 = leftRight(tg6, tg9)

// The second parameter controls the "glitchiness"
// The values are between 0 and 1, 0 being no glitch and 1 being all glitchy
const tg7 = glitch(classicAlternate, 0.5);
const tg8 = glitch(classicSquare, 0);

// Try combining glitching, wild and topBottom/leftRight in various combinations

const tg13 = wild(borderLands, [1, 0, 1, 1])

const [width, height] = Deno.args.map(x => +x);

console.log(generateTiles(width, height, circle));
