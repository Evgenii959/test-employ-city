import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
/*         additionalData: `@import "@/assets/styles.scss";`, */
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@styles': resolve(__dirname, './src/assets'),
      '@images': resolve(__dirname, './src/images'),
    },
    extensions: ['.js', '.json', '.svg', '.scss'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
