<script setup lang="ts">
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

const { active, duration = 0.4, strokeWidth = 2 } = defineProps<{
  active?: boolean
  duration?: number
  strokeWidth?: number
}>()

const moon = ref<SVGPathElement | null>(null)

let tl: gsap.core.Timeline | null = null

onMounted(() => {
  gsap.registerPlugin(DrawSVGPlugin)

  tl = gsap.timeline({ paused: true })

  tl!.fromTo(moon.value!,
    { drawSVG: '0%' },
    {
      drawSVG: '100%',
      duration: duration,
      ease: 'none',
    },
  )

  gsap.set([moon.value], { visibility: 'visible' })

  if (active) {
    tl.play()
  }
})

watch(() => active, (newVal) => {
  if (!tl) return
  if (newVal) {
    tl.play()
  }
  else {
    tl.pause(0)
  }
})
</script>

<template>
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Starts at right tip, draws outer curve clockwise to top tip, then inner curve back to start -->
    <path
      ref="moon"
      class="line"
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
    />
  </svg>
</template>
