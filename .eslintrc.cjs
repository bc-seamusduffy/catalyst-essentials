// @ts-check

// eslint-disable-next-line import/no-extraneous-dependencies
require('@bigcommerce/eslint-config/patch');

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    '@bigcommerce/catalyst/base',
    '@bigcommerce/catalyst/react',
    '@bigcommerce/catalyst/next',
    '@bigcommerce/catalyst/prettier',
  ],
  rules: {
    
    '@typescript-eslint/naming-convention': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'import/dynamic-import-chunkname': 'off',
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'next/link',
            message: "Please import 'Link' from '~/components/Link' instead.",
          },
        ],
      },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        '**': 'NEXT_JS_APP_ROUTER_CASE',
      },
    ],
    'import/order': 'off',
    'prettier/prettier': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off', // Temporary fix for ESLint error in Catalyst 0.3.0
  },
  ignorePatterns: ['client/generated/**/*.ts',  ],
};

module.exports = config;
