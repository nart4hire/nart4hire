<script setup lang="ts">
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

const { active, duration = 0.4, strokeWidth = 2 } = defineProps<{
  active?: boolean
  duration?: number
  strokeWidth?: number
}>()

const frame = ref<SVGPathElement | null>(null)
const stand = ref<SVGPathElement | null>(null)
const base = ref<SVGPathElement | null>(null)
const monitor = [frame, stand, base] as const

let tl: gsap.core.Timeline | null = null

onMounted(async () => {
  await nextTick()

  gsap.registerPlugin(DrawSVGPlugin)

  const paths = monitor.map(pathRef => pathRef.value!)
  const lengths = paths.map(path => Number(DrawSVGPlugin.getLength(path)))
  const totalLength = lengths.reduce((total, len) => total + len, 0)
  const durations = lengths.map(len => (len / totalLength) * duration)

  tl = gsap.timeline({ paused: true })

  paths.forEach((path, index) => {
    tl!.fromTo(path,
      { drawSVG: '0%' },
      {
        drawSVG: '100%',
        duration: durations[index],
        ease: 'none',
      },
    )
  })

  gsap.set(paths, { visibility: 'visible' })

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
    <!-- Monitor screen/frame -->
    <path
      ref="frame"
      class="invisible"
      d="M12 17H6.2C5.07989 17 4.51984 17 4.09202 16.782C3.71569 16.5903 3.40973 16.2843 3.21799 15.908C3 15.4802 3 14.9201 3 13.8V6.2C3 5.07989 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V13.8C21 14.9201 21 15.4802 20.782 15.908C20.5903 16.2843 20.2843 16.5903 19.908 16.782C19.4802 17 18.9201 17 17.8 17Z"
      stroke-monitor-linecap="round"
      :stroke-width="strokeWidth"
    />

    <!-- Stand -->
    <path
      ref="stand"
      class="invisible"
      d="M12 17V21"
      stroke-monitor-linecap="round"
      :stroke-width="strokeWidth"
    />

    <!-- Base -->
    <path
      ref="base"
      class="invisible"
      d="M8 21H16"
      stroke-monitor-linecap="round"
      :stroke-width="strokeWidth"
    />
  </svg>
</template>
