# react-transform-noop

This is a [react-transform](https://github.com/gaearon/babel-plugin-react-transform) that does nothing! Its just a starter kit showing how to write/test/publish a react-transform.

### Features

- Builds with babel 6 using the es2015 and react presets. (`npm compile`)
- Tests with mocha (`npm test`)

### Getting Started

- `git clone git@github.com:pwmckenna/react-transform-noop.git`
- `npm install`
- edit [src/index.js](https://github.com/pwmckenna/react-transform-noop/blob/master/src/index.js#L2) to do something.
- edit [test/index.js](https://github.com/pwmckenna/react-transform-noop/blob/master/test/index.js) to test your changes.
- `npm test`
- Tests pass? [change name + other package info](https://github.com/pwmckenna/react-transform-noop/blob/master/package.json#L2) + `npm publish`

### Usage

There's no point in using this transform. It doesn't do anything! That being said, you can use it by updating your `.babelrc` file to look like the following. Your much fancier transform will also require something like this.

```js
{
  "presets": [
    "react"
  ],
  "plugins": [
    ["react-transform", {
      "transforms": [{
        "transform": "react-transform-noop"
      }]
    }]
  ]
}
```
