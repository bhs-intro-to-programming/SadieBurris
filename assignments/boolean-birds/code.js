/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */

const isFlobbyBird = (isRed, isSpotted) => isRed && isSpotted;
const isBloggyBird = (isRed, isSpotted) => isRed && !isSpotted;
const isFlibbleBird = (isRed, isSpotted) => !isRed && isSpotted;
const isGlobbyBird = (isRed, isSpotted) => !isRed && !isSpotted;
const eatsWorms = (isRed, isSpotted) => isSpotted || isRed;
const eatsNuts = (isRed, isSpotted) => isRed || !isSpotted;
const eatsFish = (isRed, isSpotted) => !isRed || isSpotted;
const eatsMice = (isRed, isSpotted) => !isRed || !isSpotted;
const isRed = (s) => s === 'Flobby' || s === 'Bloggy';
const isSpotted = (s) => s === 'Flobby' || s === 'Flibble';
const isNotRed = (s) => s === 'Flibble' || s === 'Globby';
const isNotSpotted = (s) => s === 'Bloggy' || s === 'Globby';