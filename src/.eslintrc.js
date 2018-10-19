module.exports = {
  extends: [
    'standard',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['flowtype', 'react', 'prettier', 'standard'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'no-useless-escape': 'warn',
    'no-undef': 'warn',
    'react/no-deprecated': 'off',
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'flowtype/no-types-missing-file-annotation': 'warn',
  },
};