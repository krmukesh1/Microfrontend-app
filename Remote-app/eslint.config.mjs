import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,jsx}'] },
	{ languageOptions: { globals: { ...globals.node, ...globals.browser } } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,

	{
		rules: {
			'no-console': 'off',
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
			'no-unused-vars': 'warn',
			'no-debugger': 'error',
		},
	},
];
