import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import pluginVitest from '@vitest/eslint-plugin';

export default defineConfig([
  eslint.configs.recommended,

  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,

  {
    ...pluginVitest.configs.recommended,
    files: ['**/*.spec.ts', '**/*.test.ts'],
    rules: {
      'vitest/expect-expect': ['error', { assertFunctionNames: ['expect', 'expectEntity', 'expectEntityProp'] }],
    }
  },

  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },

    plugins: {
      import: importPlugin,
    },

    ignores: ['/node_modules', '/dist', '/docs'],

    rules: {
      // General
      'no-console': 'warn',
      'no-param-reassign': ['error', { props: false }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'func-names': ['error', 'never'],
      'no-shadow': 'error',

      // Formatting / Style
      'comma-dangle': ['error', 'always-multiline'],
      'indent': 'off', // required for indent-legacy
      'indent-legacy': ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': 'off',
      'max-len': ['error', 120, { ignoreTrailingComments: true }],
      'object-curly-newline': ['error', { consistent: true }],

      // Import plugin
      'import/order': ['warn', {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@test-utils/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      }],

      // TypeScript-specific
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }],
    },
  },
]);
