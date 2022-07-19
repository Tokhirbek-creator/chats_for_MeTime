module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'import/prefer-default-export': 0,
    'react/jsx-no-constructed-context-values': 0,
    'array-callback-return': 0,
    'import/no-cycle': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'react/no-array-index-key': 0,
    'no-unused-expressions': 0,
    'consistent-return': 0,
  },
};
