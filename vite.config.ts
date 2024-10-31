import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dtsPlugin from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dtsPlugin({
			insertTypesEntry: true,
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	define: {
		'process.env': process.env,
		__APP_ENV__: process.env.VITE_VERCEL_ENV,
		IP_KEY: process.env.IP_KEY,
	},
});
