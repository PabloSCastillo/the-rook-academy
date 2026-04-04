// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // Si el 5173 está ocupado, dará error en vez de cambiar de puerto
    host: true,       // Permite el acceso desde tu celular (Network)
  }
})