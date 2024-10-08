# sass-yarn-pnp-monorepo-example [![Build workflow](https://github.com/styu/sass-yarn-pnp-monorepo-example/actions/workflows/build.yml/badge.svg?branch=develop)](https://github.com/styu/sass-yarn-pnp-monorepo-example/actions/workflows/build.yml)

This is a sample repo set up with [Sass](https://sass-lang.com/dart-sass/), [Yarn PnP](https://yarnpkg.com/features/pnp), and [TurboRepo](https://turbo.build/repo/docs). It's meant to be a working example for how to compile typesafe SCSS modules in a monorepo, using the [postcss-typesafe-css-modules](https://github.com/styu/postcss-typesafe-css-modules/tree/main) PostCSS plugin. It's also an example of how to get Sass `@use` and `@import` statements working in a Yarn PnP monorepo, since that's not natively supported in Sass.

## Development

1. Make sure you're on Node >= 20.9.0
1. After cloning this repo, run `git lfs install`
1. `yarn`
1. `yarn dev` or `yarn build`
