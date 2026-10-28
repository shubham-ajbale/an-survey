import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project-site path for the repository: shubham-ajbale/an-survey
  base: '/an-survey/',
})
