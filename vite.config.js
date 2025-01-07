import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit()],
    optimizeDeps: {
        include: ['@exodus/schemasafe'] // Add this to make client-side validation work
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
