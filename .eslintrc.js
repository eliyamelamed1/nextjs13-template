module.exports = {
  extends: [
    'next/core-web-vitals',
    'next',
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier', // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what will format our code.
  ],
  plugins: ['react', 'import', 'jsx-a11y'],
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
