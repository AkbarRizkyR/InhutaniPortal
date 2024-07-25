import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist', // Direktori output untuk build
    sourcemap: true, // Menghasilkan sourcemap untuk debugging
  },
  server: {
    port: 3000, // Port untuk development server
    open: true, // Membuka browser secara otomatis
  }
})