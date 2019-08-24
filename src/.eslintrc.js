const path = require('path');

module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'import/no-mutable-exports': 'off', // Svelte props
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.css', '.js', '.svelte'],
        map: [['@', path.resolve(__dirname)]],
      },
    },
  },
};
