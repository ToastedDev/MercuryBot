/**
 * @param {number} min
 * @param {number} max
 */
export function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
