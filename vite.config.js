import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
        optimizeDeps: {
                include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
            },
        plugins: [sveltekit()],
        ssr: {
                noExternal: ['@popperjs/core']
            }
};

export default config;