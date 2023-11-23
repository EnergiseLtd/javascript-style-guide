module.exports = {
  rules: {
    /**
     * Disallow duplicate hooks and teardown hooks.
     *
     * 🚫 Not fixable - https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
     */
    'vitest/no-duplicate-hooks': 'error',
    /**
     * Enforce lowercase titles.
     *
     * 🔧 Fixable - https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
     */
    'vitest/prefer-lowercase-title': 'warn',
    /**
     * Enforce that all tests are in a top-level describe.
     *
     * 🚫 Not fixable - https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
     */
    'vitest/require-top-level-describe': 'error',
  },
};
