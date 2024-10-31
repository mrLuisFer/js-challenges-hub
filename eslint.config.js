import globals from 'globals';
import jsPlugin from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import airbnbConfig from 'eslint-config-airbnb';
import airbnbHooksConfig from 'eslint-config-airbnb/hooks';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parser: tsParser,
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
		},
		rules: {
			...airbnbConfig.rules,
			...airbnbHooksConfig.rules,
			...jsPlugin.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,
			...reactPlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		},
	},
];
