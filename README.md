# react-transform-style

This is a [react-transform](https://github.com/gaearon/babel-plugin-react-transform) that makes React components support `className` and `style` props, even if they don't explicity apply them to the outermost element in their `render` function.

### Example

Without this, you'd need to make each React component explicity consume `className` and `style`. With this transform its unnecessary (though you don't need to change your components that already do something like this).

##### Before

##### After

### Usage

> .babelrc

```js
{
  "presets": [
    "react"
  ],
  "plugins": [
    ["react-transform", {
      "transforms": [{
        "transform": "react-transform-style"
      }]
    }]
  ]
}
```
