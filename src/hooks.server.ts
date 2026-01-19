import { minify } from 'html-minifier-terser';
import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';

const minifyOptions = {
	collapseWhitespace: true,
	collapseInlineTagWhitespace: true,
	minifyCSS: true,
	minifyJS: true,
	removeComments: true
};

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: async ({ html }) => {
			if (building) {
				return await minify(html, minifyOptions);
			}
			return html;
		}
	});
};
