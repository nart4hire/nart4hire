// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    'nuxt-marquee',
  ],
  imports: {
    dirs: ['types/*.ts', 'types/**/*.ts'],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  vite: {
    // Note: Workaround for Tailwind v4 CSS plugin compatibility with Vite in Nuxt 3
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [tailwindcss() as any],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [
      { name: 'Hachi Maru Pop', provider: 'google', global: true },
      { name: 'Caveat', provider: 'google' },
    ],
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
  },
})
