import { propTypes } from 'styled-system';

const allPropTypes = Object.keys(propTypes)
  .reduce((a, key) => Object.assign(a, propTypes[key]), {});

export default [
  ...Object.keys(allPropTypes),
  'dispatch',
  'isError',
  'hasValue',
  'handleBlur',
  'transform',
  'opacity',
  'alpha',
  'textTransform',
  'textIndent',
  'scale',
  'hoverColor',
  'hoverBg',
  'boxShadowBlur',
  'trans',
];
