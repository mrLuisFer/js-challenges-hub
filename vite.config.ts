import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dtsPlugin from 'vite-plugin-dts';
import rollupNodeResolve from '@rollup/plugin-node-resolve';
import rollupCommonPlugin from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dtsPlugin({
			insertTypesEntry: true,
		}),
		rollupNodeResolve(),
		rollupCommonPlugin(),
	],
	define: {
		__APP_ENV__: process.env.VITE_VERCEL_ENV,
	},
});
