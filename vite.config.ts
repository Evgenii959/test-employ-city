import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/stylesheets/styles.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
