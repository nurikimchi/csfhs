import { adapter } from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { VERSION } from '@sveltejs/kit';

console.log("the version of @sveltejs/kit" + VERSION);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
	}
};

export default config;
