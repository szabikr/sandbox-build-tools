# Babel Core with Preset-Env

Trying out how does @babel-core transpile javascript code using a configuration that is defined in `babel.config.json` via the `@babel/preset-env`.

We have a `source-code.js` file that contains some interesting modern javascript features like _arrow functions_, _destructuring_, _async/await_, _string interpolation_. We read that file in and and feed the contents of it to the `babel.transformSync` function that will return our generated code. Finally the generated code will be written into a `generated-code.js` file.

As we can see most of these new JavaScript features are being kept the same however, some [`core-js`](https://github.com/zloirock/core-js) modules are required at the top of the file. Specifically for _promises_ and _iterators_. The _string interpolation_ has been translated into a `string.concat` function tho.

### Project Setup

Install dependecies, `@babel/core` & `@babel/preset-env` (also `prettier` for nice code formatting)

```bash
$ yarn install
```

Execute the solution

```bash
$ yarn start
```
