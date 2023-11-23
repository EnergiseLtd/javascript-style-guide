module.exports = {
  rules: {
    /**
     * Enforce using the nullish coalescing operator instead of logical assignments or chaining.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/prefer-nullish-coalescing/
     */
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      { ignorePrimitives: { string: true } },
    ],
  },
};
