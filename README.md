### react-transform-style

This is a [react-transform](https://github.com/gaearon/babel-plugin-react-transform) that makes React components support `className` and `style` props, even if they don't explicity apply them to the outermost element in their `render` function.

### Example

Without this, you'd need to make each React component explicity consume `className` and `style`. With this transform it is unnecessary (though this transform will play nicely with components that already do something like this).

##### __*With*__ react-transform-style

```js
import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return <div className="hello-world">Hello World</div>;
  }
}
```

```js
<HelloWorld className="custom-class" style={{ color: 'red' }}/>
```
generates the following
```js
<div style="color:red;" class="hello-world">Hello World</div>
```

##### __*Without*__ react-transform-style

```js
import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <div
        className={classNames(this.props.className, 'hello-world')}
        style={this.props.style}
      >
        Hello World
      </div>
    );
  }
}
```

```js
<HelloWorld className="custom-class" style={{ color: 'red' }}/>
```
still generates the following (same as above)
```js
<div style="color:red;" class="hello-world">Hello World</div>
```

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

### Caveats 

- This will style the outermost element returned by your component's render function. Styling something deeper in the tree is not supported (and probably much harder) using this transform.
- `style` props are combined, with the passed in `style` prop taking precendence. This makes it easier to override the default styling, but there's no way to guarentee your components style won't be overridden.
