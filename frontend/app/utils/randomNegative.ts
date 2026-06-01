/**
 * Returns a random value of either -1 or 1.
 *
 * @returns Either 1 or -1 with a roughly 50/50 probability.
 */
export default function (): -1 | 1 {
  return Math.random() < 0.5 ? -1 : 1
}
