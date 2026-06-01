<template>
  <header class="w-full pl-8 pr-20 py-8 z-10">
    <nav class="flex flex-row justify-between items-center">
      <NuxtLink
        class="leading-0 w-32 aspect-square flex items-center justify-center"
        to="/"
        @click="changeState()"
      >
        <IconAutograph
          ref="icon"
        />
      </NuxtLink>
      <BaseGlass
        class="flex flex-row items-center space-x-2 px-2 h-10"
      >
        <ul class="flex flex-row items-center space-x-2">
          <li
            class="w-8 aspect-square flex items-center justify-center"
          >
            <NuxtLink
              class="leading-0"
              to="/blog"
            >
              <Icon name="streamline:interface-edit-pen-2-content-creation-edit-fountain-pen-write" />
            </NuxtLink>
          </li>
          <li
            class="w-8 aspect-square flex items-center justify-center"
          >
            <NuxtLink
              class="leading-0"
              to="/about"
            >
              <Icon name="line-md:heart" />
            </NuxtLink>
          </li>
        </ul>
        <div class="w-px h-[80%] border border-white/10 rounded-full" />
        <UiColor />
      </BaseGlass>
    </nav>
  </header>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

const icon = ref<{ changeState: () => void } | null>(null)

const hasVisited = useCookie('hasVisited', {
  maxAge: 60 * 60 * 24 * 30, // 1 month,
  refresh: true,
  default: () => 'false',
  sameSite: true,
})

const changeState = () => {
  if (!icon.value) return
  icon.value.changeState()
}

onMounted(() => {
  gsap.registerPlugin(DrawSVGPlugin)

  if (hasVisited.value === 'false') {
    
  }
})
</script>
