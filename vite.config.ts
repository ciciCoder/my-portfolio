import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import injectHTML from 'vite-plugin-html-inject'
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [
    tailwindcss(),
    injectHTML(),
  ],
})