const { JAVASCRIPT_FILES, NEXT_FILES } = require('./constants');
const requirePackage = require('./utils/require-package');

requirePackage('next', '@next/eslint-plugin-next');

const babelOptions = {
  presets: (() => {
    try {
      require.resolve('next/babel');
      return ['next/babel'];
    } catch (e) {
      return [];
    }
  })(),
};

module.exports = {
  extends: ['plugin:@next/next/recommended', require.resolve('./rules/next')],
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parserOptions: { babelOptions },
    },
    {
      files: NEXT_FILES,
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
