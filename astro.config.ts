import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://demo-photographer.pages.dev',
  server: {
    host: true,
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-garamond',
      fallbacks: ['serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Raleway',
      cssVariable: '--font-raleway',
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Ephesis',
      cssVariable: '--font-ephesis',
      fallbacks: ['cursive'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
})
