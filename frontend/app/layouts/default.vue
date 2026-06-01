<template>
  <BaseBackground
    as="main"
    class="font-default min-h-screen flex flex-col justify-between text-zinc-800 dark:text-zinc-200 transition-colors duration-300"
  >
    <Nav />
    <slot />
    <Footer />
  </BaseBackground>
</template>
