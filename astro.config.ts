import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  server: {
    host: true,
  },
  // image: {
  //   layout: 'constrained',
  // },
  vite: {
    plugins: [tailwindcss()],
  },
})
