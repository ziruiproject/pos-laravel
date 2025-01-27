import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    base: 'http://localhost:8080/',
    plugins: [
        laravel([
            'resources/sass/app.scss',
            'resources/js/app.js',
            'resources/js/chart-config.js',
        ]),
    ],
});
