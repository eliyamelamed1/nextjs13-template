module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:jsx-a11y/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'next/core-web-vitals',
    'next',
    'eslint:recommended',
    'airbnb',
    'prettier', // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what will format our code.
  ],
  plugins: ['@typescript-eslint', 'react', 'import', 'jsx-a11y'],
  rules: {
    'prefer-const': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
}
