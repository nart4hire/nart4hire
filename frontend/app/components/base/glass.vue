<template>
  <component
    :is="as"
    class="bg-white/5 backdrop-blur-[1.5px] backdrop-saturate-125 rounded-lg inset-shadow-[-1px_1px_0_0] inset-shadow-white/30 shadow-lg shadow-black/30"
    :class="{
      'transition-colors ease-in duration-400 hover:bg-white/25': as === 'button',
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const { as = 'div' } = defineProps<{
  as?: string
}>()
</script>
