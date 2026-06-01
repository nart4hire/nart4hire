<template>
  <button
    aria-label="Toggle color mode"
    class="h-8 aspect-square focus:outline-none p-1.5 cursor-pointer"
    @click="cycleTheme"
  >
    <ClientOnly>
      <IconSun
        :active="$colorMode.preference === 'light'"
        :class="$colorMode.preference === 'light' ? 'block' : 'hidden'"
        :duration="0.25"
        :stroke-width="1.75"
      />
      <IconMoon
        :active="$colorMode.preference === 'dark'"
        :class="$colorMode.preference === 'dark' ? 'block' : 'hidden'"
        :duration="0.25"
        :stroke-width="1.75"
      />
      <IconMonitor
        :active="$colorMode.preference === 'system'"
        :class="$colorMode.preference === 'system' ? 'block' : 'hidden'"
        :duration="0.25"
        :stroke-width="1.75"
      />
      <template #fallback>
        <div class="w-full h-full" />
      </template>
    </ClientOnly>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const themes = ['system', 'light', 'dark']

const cycleTheme = () => {
  const currentIndex = themes.indexOf(colorMode.preference)

  colorMode.preference = themes[(currentIndex + 1) % themes.length]!
}
</script>
