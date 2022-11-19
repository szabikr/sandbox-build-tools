# Babel Plugins

Trying out a few plugins. Head over to the `package.json` file to see which ones have been installed.

Babel presets are basically just a list of babel plugins. There are a few common environments that have preset supported by the babel team, such as:

- `@babel/preset-env` for compiling ES6+ features
- `@babel/preset-react` for compiling React and JSX
- `@babel/preset-typescript` for compliling TypeScript

Some of the main frameworks out there come with their own babel configuration defining their own presets, for example:

- `babel-jest` for Jest test runner
- `next/babel` for NextJs

As developers we can [create our own presets](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md#making-your-own-preset) for local use, by exporting a configuration object.

### Custom Preset

I put together a preset called [`babel-preset-szabi-space`](https://www.npmjs.com/package/babel-preset-szabi-space) for the sake of exploring the process.

This preset uses the following plugins:

- `@babel/plugin-proposal-nullish-coalescing-operator`
- `@babel/plugin-transform-arrow-functions`
- `@babel/plugin-transform-classes`
- `@babel/plugin-transform-destructuring`
- `@babel/plugin-transform-spread`
- `@babel/plugin-transform-template-literals`
