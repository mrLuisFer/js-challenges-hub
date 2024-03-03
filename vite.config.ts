import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dtsPlugin from 'vite-plugin-dts';
import rollupNodeResolve from '@rollup/plugin-node-resolve';
import rollupPeerDepsPlugin from 'rollup-plugin-peer-deps-external';
import rollupCommonPlugin from '@rollup/plugin-commonjs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dtsPlugin({
			insertTypesEntry: true,
		}),
		rollupNodeResolve(),
		rollupCommonPlugin(),
		// @ts-expect-error
		rollupPeerDepsPlugin(),
	],
	define: {
		__APP_ENV__: process.env.VITE_VERCEL_ENV,
	},

	resolve: {
		alias: {
			'@lib': path.resolve(__dirname, './src/lib'),
			'@challenges': path.resolve(__dirname, './src/challenges'),
		},
	},
});
