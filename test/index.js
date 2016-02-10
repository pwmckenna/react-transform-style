import assert from 'assert';
import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import classNames from 'classnames';

describe('react-transform-style tests', () => {
  it('tests that react-transform-style propagates style prop', () => {
    class StyleTestComponent extends Component {
      render() {
        return (
          <div>Hello World</div>
        );
      }
    }

    assert.equal(
      renderToStaticMarkup(<StyleTestComponent style={{color: 'red'}}/>),
      '<div class="" style="color:red;">Hello World</div>'
    );
  });

  it('tests that react-transform-style propagates overriding style prop', () => {
    class OverridingStyleTestComponent extends Component {
      render() {
        return (
          <div style={{color: 'blue'}}>Hello World</div>
        );
      }
    }

    assert.equal(
      renderToStaticMarkup(<OverridingStyleTestComponent style={{color: 'red'}}/>),
      '<div style="color:red;" class="">Hello World</div>'
    );
    assert.equal(
      renderToStaticMarkup(<OverridingStyleTestComponent style={{color: 'red', backgroundColor: 'green'}}/>),
      '<div style="color:red;background-color:green;" class="">Hello World</div>'
    );
  });

  it('tests that react-transform-style propagates className prop', () => {
    class ClassNameTestComponent extends Component {
      render() {
        return (
          <div className="inner-class-name">Hello World</div>
        );
      }
    }

    assert.equal(
      renderToStaticMarkup(<ClassNameTestComponent className="outer-class-name"/>),
      '<div class="outer-class-name inner-class-name">Hello World</div>'
    );
  });

  it('tests that react-transform-style propagates both className and style props', () => {
    class BothTestComponent extends Component {
      render() {
        return (
          <div className="inner-class-name" style={{color: 'red'}}>Hello World</div>
        );
      }
    }

    assert.equal(
      renderToStaticMarkup(<BothTestComponent className="outer-class-name" style={{color: 'blue'}}/>),
      '<div class="outer-class-name inner-class-name" style="color:blue;">Hello World</div>'
    );
  });

  it('tests that this plays nicely with components that support external styling', () => {
    class ExternallyStyledComponent extends Component {
      render() {
        return (
          <div
            className={classNames('inner-class-name', this.props.className)}
            style={this.props.style}
          >
            Hello World
          </div>
        );
      }
    }

    assert.equal(
      renderToStaticMarkup(<ExternallyStyledComponent className="outer-class-name" style={{color: 'blue'}}/>),
      '<div class="outer-class-name inner-class-name" style="color:blue;">Hello World</div>'
    );
  });
});