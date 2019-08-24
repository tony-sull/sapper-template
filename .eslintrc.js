module.exports = {
  root: true,
  extends: ['airbnb-base'],
  parserOptions: {
    sourceType: 'script',
  },
  env: {
    node: true,
  },
  rules: {
    'global-require': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: [
        'rollup.config.js',
        'postcss.config.js',
        'stylelint.config.js',
        'tailwind.config.js',
      ],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};
