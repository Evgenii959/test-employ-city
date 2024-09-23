import { defineConfig } from 'vite';
import { resolve } from 'path';
const vitePluginSass = require('vite-plugin-sass');

export default defineConfig({
  plugins: [vitePluginSass()],
  css: {
    preprocessorOptions: {
      scss: {

      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@styles': resolve(__dirname, './src/Assets/stylesheets'),
      '@images': resolve(__dirname, './src/Assets/images'),
      '@fonts': resolve(__dirname, './src/Assets/fonts'),
    },
    extensions: ['.js', '.ts', '.json', '.vue', '.svg'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});