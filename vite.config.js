import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: '0.0.0.0',  // This makes the app accessible from other devices on the local network
    port: 3000,
  },
})
