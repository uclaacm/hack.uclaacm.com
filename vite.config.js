import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import yaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		react(),
		viteStaticCopy({
			targets: [
				{
					src: 'public/blogPosts/**',
					dest: 'blogPosts',
				},
			],
		}),
		yaml(),
	],
	server: {
		port: 8000,
	},
	build: {
		outDir: 'dist',
	},
});
