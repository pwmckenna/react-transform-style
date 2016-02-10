import assert from 'assert';
import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

it('tests that react-transform-noop transformed the component', () => {
  class TestComponent extends Component {
    render() {
      return <div>Hello World</div>;
    }
  }

  assert.equal(
    TestComponent.__react_transform_noop,
    true,
    'expected TestComponent.noop to return undefined'
  );
  assert.equal(
    renderToStaticMarkup(<TestComponent/>),
    '<div>Hello World</div>'
  );
});
