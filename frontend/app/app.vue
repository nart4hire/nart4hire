<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      innerHTML: `
        if (!localStorage.getItem('hasVisited')) {
          document.documentElement.classList.add('first-visit')
        }
      `,
      type: 'text/javascript',
    },
  ],
})
</script>
