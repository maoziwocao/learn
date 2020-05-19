module.exports = {
  root: true,
  env: {
    node: true,
    "jest": true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'global-require': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
