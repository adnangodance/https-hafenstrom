import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '/Users/adnangodanci/Documents/Dev/HS',
        '/Users/adnangodanci/.gemini/antigravity/brain/44945229-a52a-47e2-8611-82ae2434aaad'
      ]
    }
  }
})
