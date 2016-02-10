import classNames from 'classnames/dedupe';

export default () => ReactClass => {
  const ModifiedReactClass = ReactClass;
  const render = ModifiedReactClass.prototype.render;
  ModifiedReactClass.prototype.render = function () {
    const {
      props,
      ...renderedRest
    } = render.apply(this, arguments);
    return {
      props: {
        ...props,
        className: classNames(this.props.className, props.className),
        style: {
          ...props.style,
          ...this.props.style
        }
      },
      ...renderedRest
    };
  }
  return ModifiedReactClass;
};
