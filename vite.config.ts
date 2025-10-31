import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages with custom domain, use '/' 
  // For GitHub Pages with username.github.io/repo, use '/whitehouse/'
  base: '/whitehouse/',
  build: {
    outDir: 'dist'
  }
})
