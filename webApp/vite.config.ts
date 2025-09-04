import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  plugins: [react()],
  assetsInclude: ["**/*.webp"],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: { port: 3000 },
});
