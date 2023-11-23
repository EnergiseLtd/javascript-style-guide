<a name="readme-top"></a>

<div align="center">
    <a href="https://github.com/EnergiseLtd/javascript-style-guide">
        <img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f4dc.svg" alt="" width="80" height="80" />
    </a>
</div>

<h1 align="center">javascript-style-guide</h1>

[![npm version](https://img.shields.io/npm/v/%40energise/style-guide?style=flat-square)](https://npmjs.com/package/@energise/style-guide)
[![license](https://img.shields.io/github/license/EnergiseLtd/javascript-style-guide?style=flat-square)](https://github.com/EnergiseLtd/javascript-style-guide/blob/main/LICENSE)
[![build status](https://img.shields.io/github/actions/workflow/status/EnergiseLtd/javascript-style-guide/quality.yml?style=flat-square)](https://github.com/EnergiseLtd/javascript-style-guide/actions/workflow/quality.yml)

## Introduction

This repository is the home of Energise's style guide, which includes
configs for popular linting and style tools.

The following configs are available, and are designed to be used together:

- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript)

## Installation

All of our configs are contained in one package, `@energise/style-guide`.
To install:

```sh
# If you use pnpm
pnpm add -D @energise/style-guide

# If you use npm
npm install -D @energise/style-guide

# If you use yarn
yarn add -D @energise/style-guide
```

## Prettier

> Note: Prettier is a peer-dependency of this package, and should be
> installed at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

To use the shared Prettier config, set the following in `package.json`:

```json
{
  "prettier": "@energise/style-guide/prettier"
}
```

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be
> installed at the root of your project.

This ESLint config is designed to be composable.

The following base configs are available. You can use one or both of
these configs, but they should always be first in `extends`:

- `@energise/style-guide/browser`
- `@energise/style-guide/node`

Note that you can scope configs, so that configs only target specific
files. For more information, see:
[Scoped configuration with `overrides`](#scoped-configuration-with-overrides).

The following additional configs are available:

- `@energise/style-guide/eslint/next`
  (requires `@next/eslint-plugin-next` to be installed at the same
  version as `next`)
- `@energise/style-guide/eslint/playwright-test`
- `@energise/style-guide/eslint/react`
- `@energise/style-guide/eslint/storybook`
- `@energise/style-guide/eslint/typescript`
  (requires `typescript` to be installed and
  [additional configuration](#configuring-eslint-for-typescript))
- `@energise/style-guide/eslint/vitest`

> You'll need to use `require.resolve` to provide ESLint with absolute
> paths, due to an issue around ESLint config resolution (see
> [eslint/eslint#9188](https://github.com/eslint/eslint/issues/9188))

For example, to use the shared ESLint config(s) in a Next.js project, set
the following in `.eslintrc.cjs`:

```js
module.exports = {
  extends: [
    require.resolve('@energise/style-guide/eslint/browser'),
    require.resolve('@energise/style-guide/eslint/react'),
    require.resolve('@energise/style-guide/eslint/next'),
  ],
};
```

### Configuring ESLint for TypeScript

Some of the rules enabled in the TypeScript config require additional
type information, you'll need to provide the path to your `tsconfig.json`.

For more information, see: https://typescript-eslint.io/docs/linting/type-linting

```js
const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@energise/style-guide/eslint/node'),
    require.resolve('@energise/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project.
      },
    },
  },
};
```

### Configuring custom components for `jsx-a11y`

It's common practice for React apps to have shared components like
`Button`, which wrap native elements. You can pass this information along
to `jsx-a11y` via the `components` setting.

The below list is not exhaustive.

```js
module.exports = {
  root: true,
  extends: [require.resolve('@energise/style-guide/eslint/react')],
  settings: {
    'jsx-a11y': {
      components: {
        Article: 'article',
        Button: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        Video: 'video',
      },
    },
  },
};
```

### Scoped configuration with `overrides`

ESLint configs can be scoped to include/exclude specific paths. This
ensures that rules don't leak into places where those rules don't apply.

In this example, Vitest rules are only being applied to files matching
Vitest's default test match pattern.

```js
module.exports = {
  extends: [require.resolve('@energise/style-guide/eslint/node')],
  overrides: [
    {
      files: [],
      extends: [require.resolve('@energise/style-guide/eslint/vitest')],
    },
  ],
};
```

#### A note on file extensions

By default, all TypeScript rules are scoped to files ending with `.ts`
and `.tsx`.

However, when using overrides, file extensions must be included or ESLint
will only include `.js` files.

```js
module.exports = {
  overrides: [
    {
      files: [`directory/**/*.[jt]s?(x)`, rules: { my-rule: 'off' }],
    },
  ],
};
```

## TypeScript

The following configs are available:

- `@energise/style-guide/tsconfig/base`
- `@energise/style-guide/tsconfig/cloudflare`
- `@energise/style-guide/tsconfig/next`

For example, to use the next TypeScript config in a Next.js project, set
the following in `tsconfig.json`:

```json
{
  "extends": "@energise/style-guide/tsconfig/next"
}
```

## Acknowledgements

- [@vercel](https://github.com/vercel)'s
  [style guide](https://github.com/vercel/style-guide)
