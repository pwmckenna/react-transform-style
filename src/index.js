module.exports = () => ReactClass => {
  const ModifiedReactClass = ReactClass;
  ModifiedReactClass.__react_transform_noop = true;
  return ModifiedReactClass;
};
