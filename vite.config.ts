
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
    ],

    css: {
        preprocessorOptions: {
            scss: {
                additionalData:
                    "@import './src//styles.scss';",
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@styles': resolve(__dirname, './src/Assets/stylesheets'),
            '@images': resolve(__dirname, './src/images'),
            '@fonts': resolve(__dirname, './src/fonts'),
        },
        extensions: [ '.js', '.ts', '.json', '.vue', '.svg' ],
    },
    envPrefix: 'APP_',
});
