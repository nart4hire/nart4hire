<template>
  <component
    :is="as"
    class="relative min-h-screen w-full"
  >
    <!-- Dynamic Background -->
    <div
      ref="background"
      aria-hidden="true"
      class="fixed top-0 left-0 h-[120vh] w-full overflow-hidden -z-1000 bg-stone-400 dark:bg-black text-stone-200 dark:text-zinc-950 pointer-events-none transition-colors duration-300"
    >
      <!-- Backlights -->
      <div
        v-for="backlight, i in backlights"
        :key="i"
        aria-hidden="true"
        class="absolute w-[32vmin] aspect-square -translate-1/2 -z-100 animate-moveX"
        :style="{
          'left': `${backlight.position.x}%`,
          'top': `${backlight.position.y}%`,
          '--move-x': `${backlight.movement.radius.x}`,
          'animation-duration': `${backlight.movement.duration.x}s`,
          'animation-delay': `${backlight.movement.delay.x}s`,
        }"
      >
        <div
          aria-hidden="true"
          class="w-full h-full animate-moveY"
          :style="{
            '--move-y': `${backlight.movement.radius.y}`,
            'animation-duration': `${backlight.movement.duration.y}s`,
            'animation-delay': `${backlight.movement.delay.y}s`,
          }"
        >
          <div
            aria-hidden="true"
            class="w-full h-full rounded-full bg-radial from-stone-200 from-0% to-transparent to-67% via-24% mix-blend-screen animate-breathe"
            :class="{ 'via-emerald-500': i % 2 === 0, 'via-orange-300': i % 2 !== 0 }"
            :style="{
              'animation-delay': `${backlight.breathing.delay}s`,
            }"
          />
        </div>
      </div>
      <!-- Background -->
      <svg
        class="-z-10"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <!-- Hexagon -->
          <g id="single-hex">
            <polygon
              points="0,-20 17.3205,-10 17.3205,10 0,20 -17.3205,10 -17.3205,-10"
              transform="scale(0.975)"
            />
          </g>
          <!-- Pattern Grid -->
          <pattern
            id="iso-grid"
            height="60"
            patternTransform="scale(1)"
            patternUnits="userSpaceOnUse"
            width="34.641"
          >
            <g fill="currentColor">
              <use
                href="#single-hex"
                x="0"
                y="0"
              />
              <use
                href="#single-hex"
                x="34.641"
                y="0"
              />
              <use
                href="#single-hex"
                x="17.3205"
                y="30"
              />
              <use
                href="#single-hex"
                x="0"
                y="60"
              />
              <use
                href="#single-hex"
                x="34.641"
                y="60"
              />
            </g>
          </pattern>
        </defs>
        <rect
          fill="url(#iso-grid)"
          height="100%"
          width="100%"
        />
      </svg>
    </div>
    <div
      aria-hidden="true"
      class="fixed top-0 left-0 h-full w-full backdrop-blur-[0.4px] -z-1 pointer-events-none"
    />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import randomNegative from '~/utils/randomNegative'

const { as = 'div' } = defineProps<{
  as?: string
}>()

const BACKLIGHT_COUNT = 32
// Calc Lights
// TODO: Explain magic numbers
const backlights: Backlight[] = Array.from({ length: BACKLIGHT_COUNT }, () => {
  const position = {
    x: (Math.floor(Math.random() * 9) + 6) * 5,
    y: (Math.floor(Math.random() * 9) + 6) * 5,
  }
  return {
    position: position,
    movement: {
      radius: {
        x: (Math.floor(Math.random() * 11) + 20) * randomNegative(),
        y: (Math.floor(Math.random() * 11) + 20) * randomNegative(),
      },
      duration: {
        x: Math.floor(Math.random() * 21 + 40),
        y: Math.floor(Math.random() * 21 + 40),
      },
      delay: {
        x: Math.floor(Math.random() * -60),
        y: Math.floor(Math.random() * -60),
      },
    },
    breathing: {
      delay: Math.floor(Math.random() * -10),
    },
  }
})
const background = ref<HTMLDivElement | null>(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.to(background.value, {
    y: '-20vh', // Moves the background up slightly as you scroll down
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true, // Ties the movement directly to your scroll wheel
    },
  })
})
</script>
