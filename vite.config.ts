import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: './', // Ensures correct asset loading
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        team: 'team.html',
        work: 'work.html',
        journal: 'journal.html',
        contact: 'contact.html',
        about: 'about.html',
      }
    }
  }
})