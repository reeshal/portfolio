import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'portfolio' below with your exact GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
