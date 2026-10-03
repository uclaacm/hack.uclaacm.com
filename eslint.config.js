import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
	{ ignores: ['src/images/optimized/**'] },
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		ignores: ['dist/', 'node_modules/'],
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			quotes: ['error', 'single'],
			'react/prop-types': 'off',
			// React 18 forwards the standard HTML attribute in lowercase.
			'react/no-unknown-property': ['error', { ignore: ['fetchpriority'] }],
		},
		settings: {
			react: {
				version: '18.3.1',
			},
		},
	},
];
