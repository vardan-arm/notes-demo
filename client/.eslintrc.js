module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:react/recommended',
    'airbnb',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'modules': true
    },
    'ecmaVersion': 2020,
    'sourceType': 'module',
  },
  'ignorePatterns': [
    '*.test.tsx',
    '.eslintrc.js',
  ],
  'plugins': [
    'react-hooks',
    'react',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  'rules': {
    // eslint
    'camelcase': 0,
    'max-len': [2, 200, 4],
    'arrow-parens': [2, 'as-needed'],
    'consistent-return': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-case-declarations': 0,
    'no-mixed-operators': 0,
    'no-prototype-builtins': 0,
    'no-restricted-properties': 0,
    'no-return-assign': 0,
    'no-nested-ternary': 0,
    'no-unused-expressions': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 'off',
    'no-undef': 0,
    'object-curly-newline': ['error', {
      'ObjectExpression': { 'minProperties': 6, 'multiline': true, 'consistent': true },
      'ObjectPattern': { 'minProperties': 6, 'multiline': true, 'consistent': true },
      'ImportDeclaration': { 'minProperties': 4, 'multiline': true, 'consistent': true },
      'ExportDeclaration': { 'minProperties': 4, 'multiline': true, 'consistent': true },
    }],
    'curly': [2, 'all'],
    'brace-style': [2, '1tbs'],
    'react/prop-types': 0,
    'react/no-unused-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    'react/button-has-type': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    "import/prefer-default-export": "off",
    // typescript-eslint
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-unused-vars': [1, { 'ignoreRestSiblings': true }],
    '@typescript-eslint/member-delimiter-style': 2,
    'no-shadow': 'off',
    'no-redeclare': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-use-before-define': ['error', { 'functions': false }],
  },
};
