module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      extends: [
        'next/core-web-vitals',
        'next',
        'eslint:recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/stylistic',
        'prettier', // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what will format our code.
      ],
      rules: {
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
      },
      plugins: ['@typescript-eslint', 'react', 'import', 'jsx-a11y'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
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
    },
  ],
}
