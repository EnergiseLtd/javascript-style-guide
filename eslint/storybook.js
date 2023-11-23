const requirePackage = require('./utils/require-package');

requirePackage('storybook', 'storybook');

module.exports = {
  overrides: [
    {
      files: ['**/*.stories.@(j|t)s?(x)'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
