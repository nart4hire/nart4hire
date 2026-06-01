/**
 * Configuration for the custom backlight animation.
 *
 * @summary Defines the parameters for the backlight's position, movement, and breathing effect.
 * @remarks
 * This animation uses a Lissajous curve to create a pseudo-random movement pattern.
 * The structure relies on 3 stacked divs:
 * - Outer: Animates the X-axis movement
 * - Middle: Animates the Y-axis movement
 * - Inner: Contains the light and breathing effect
 *
 * ```text
 *           /\
 *           ||  rY
 *    rX  /------\
 *  <==== | X, Y | ====>
 *        \------/
 *           ||
 *           \/
 * ```
 * Each animation is populated with a random duration and delay to create a complex path.
 */
export interface Backlight {
  /** The origin [x, y] coordinates of the backlight source */
  position: { x: number, y: number }

  /**
   * Parameters defining the movement curves.
   * Note: The X, Y radius define the amplitude of the Lissajous path.
   */
  movement: {
    radius: { x: number, y: number }
    duration: { x: number, y: number }
    delay: { x: number, y: number }
  }

  /** Parameters for the pulsing/breathing opacity effect */
  breathing: {
    delay: number
  }
}
