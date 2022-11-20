# Babel & React

Let's see how does Babel treat React.

Probably the simplest React app would look something like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple React</title>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
  </body>

  <script>
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(React.createElement('h1', null, 'Hello, world!'))
  </script>
</html>
```

For simplicity sake, and because Babel is not the right tool for module bundling, I started by importing `React` and `ReactDOM` from CDNs. I wrote a simple Hello World application in React, JSX and then compiled it using `babel` and the `@babel/plugin-transform-react-jsx` plugin via the `babel-cli` and finally imported the script onto the html page.

The second application was a Todo List from my [`sandbox-react`](https://github.com/szabikr/sandbox-react) repo which was a bit more complicated than just a Hello World app so I decided to bring in the presets that are mentioned on the [babel docs](https://babeljs.io/docs/en/). The code contains some ES6+ features so I decided to bring in the `@babel/preset-env` as well as the `@babel/preset-react` for the React and JSX code.

The compiled final result turned out very messy and hard to understand for us humans (for the browsers and different NodeJS versions are actually easier), but luckily we can write code using the latest language features thanks to tools like Babel and the community around it that put together all these wonderful plugins forming a very productive ecosystem.

### Running the project

Install dependencies

```bash
$ yarn install
```

Compile either application

```bash
$ yarn run compile:hello-world
# or
$ yarn run compile:todo-list
```

Open HTML page

```bash
$ open public/index.html
```
