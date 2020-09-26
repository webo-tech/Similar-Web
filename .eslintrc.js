module.exports = {
  extends: ['react-app', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['react-hooks', 'prettier', 'import'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'react/style-prop-object': 0,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['style.js'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
};
