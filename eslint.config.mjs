/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
// import airbnb from 'eslint-config-airbnb'

/** @type {import('eslint').Linter.Config[]} */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // airbnb.configs.flat.recommended
  ...compat.extends('eslint-config-airbnb'),
  { ignores: ['components/ui'] },
  {
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-filename-extension': 0,
      'linebreak-style': 0,
      'import/extensions': 0,
      'import/no-unresolved': 0,
      camelcase: 0,
      'react/require-default-props': 0,
    },
    settings: {
      'import/resolver': {
        node: {
          // map: [
          //   ['@', './src']
          // ]
          extensions: ['.js', '.mjs', '.cjs', '.ts', '.jsx', '.tsx'],

        },
      },
    },
  },

];
