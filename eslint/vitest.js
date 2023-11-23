const { TYPESCRIPT_FILES } = require('./constants');

module.exports = {
  extends: ['plugin:vitest/recommended', require.resolve('./rules/vitest')],
  overrides: [
    // Prefer the vitest version of this rule. This silently fails when
    // type information is not available.
    {
      files: TYPESCRIPT_FILES,
      rules: {
        // upstream
        // '@typescript-eslint/unbound-method': 'off',
        // 'vitest/unbound-method': 'error',
      },
    },
  ],
};
