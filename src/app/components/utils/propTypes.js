import PropTypes from 'prop-types';

export const numberOrString = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);
