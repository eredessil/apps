import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    include: "**/*.svg",
  })],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@api': '/src/api',
      '@screens': '/src/screens',
      '@i18n': '/src/i18n',
      '@theme': '/src/styles',
      '@icons': '/src/assets/icons',
  }},
})
