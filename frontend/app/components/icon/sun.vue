<script setup lang="ts">
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

const { active, duration = 0.4, strokeWidth = 2 } = defineProps<{
  active?: boolean
  duration?: number
  strokeWidth?: number
}>()

const circle = ref<SVGPathElement | null>(null)
const rays = ref<SVGElement | null>(null)

let tl: gsap.core.Timeline | null = null

onMounted(() => {
  gsap.registerPlugin(DrawSVGPlugin)

  const rayArray = gsap.utils.toArray('.sun-line', rays.value) as SVGPathElement[]
  const rayDuration = duration / rayArray.length

  tl = gsap.timeline({ paused: true })

  tl.fromTo(circle.value!,
    { drawSVG: '0%' },
    {
      drawSVG: '100%',
      duration: duration,
      ease: 'none',
    },
    0,
  )

  rayArray.forEach((path, index) => {
    tl!.fromTo(path,
      { drawSVG: '0%' },
      {
        drawSVG: '100%',
        duration: rayDuration,
        ease: 'none',
      },
      index * rayDuration,
    )
  })

  gsap.set([circle.value, ...rayArray], { visibility: 'visible' })

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
  >\
    <!-- 1. Inner Circle (Starts bottom center, draws clockwise) -->
    <path
      ref="circle"
      class="invisible"
      d="M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
    />
    <g ref="rays">
      <!-- 2. Bottom-Left Ray (Inside -> Outside) -->
      <path
        class="sun-line invisible"
        d="M6.4147 17.728L5.00049 19.1422"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />

      <!-- 3. Left Ray (Inside -> Outside) -->
      <path
        class="sun-line invisible"
        d="M4 12H2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />

      <!-- 4. Top-Left Ray (Inside -> Outside) -->
      <path
        class="sun-line invisible"
        d="M6.41421 6.41421L5 5"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />

      <!-- 5. Top Ray (Inside -> Outside) -->
      <path
        class="sun-line invisible"
        d="M12 4V2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />

      <!-- 6. Top-Right Ray (Inside -> Outside) -->
      <path
        class="sun-line invisible"
        d="M17.7285 6.41421L19.1427 5"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />

      <!-- 7. Right Ray (Inside -> Outside) -->
      <path
        class="sun-line invisible"
        d="M20 12H22"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />

      <!-- 8. Bottom-Right Ray (Inside -> Outside) -->
      <path
        class="sun-line invisible"
        d="M17.728 17.728L19.1422 19.1422"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />

      <!-- 9. Bottom Ray (Inside -> Outside) -->
      <path
        class="sun-line invisible"
        d="M12 20V22"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />
    </g>
  </svg>
</template>
