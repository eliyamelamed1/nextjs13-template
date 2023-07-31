module.exports = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-css-order',
  ],
  importOrder: [
    'react',
    '^@core/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
    '^.(css|scss|sass|less)$',
  ],
  semi: false,
  trailingComma: 'es5',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  jsxSingleQuote: true,
  cssDeclarationSorterKeepOverrides: false,
}
