import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import theobromaConfig from '@theobroma222/eslint-config-myconfig';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            theobromaConfig,
        ],
        files: ['**/*.{ts,tsx}'],
        ...reactPlugin.configs.flat.recommended,
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            ...reactPlugin.configs.flat.recommended.languageOptions,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            react: reactPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'react/function-component-definition': [
                2,
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],
        },
    }
);
