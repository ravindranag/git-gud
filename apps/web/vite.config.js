import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'node:path'

const __dirname = path.dirname(import.meta.url)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      '@/styled-system': path.join(__dirname, 'styled-system'),
      '@': path.join(__dirname, 'src')
    }
  },
  server: {
    port: 3000
  }
})
