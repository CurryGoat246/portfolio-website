// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    historyApiFallback: true, // This helps with routing in development
  },
  build: {
    outDir: 'dist', // Ensure build outputs to correct directory
  }
});