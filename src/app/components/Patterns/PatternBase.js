import React from 'react';
import PropTypes from 'prop-types';

import FreeBackground from '../FreeBackground';

const PatternBg = FreeBackground.extend`
  background-repeat: repeat;
`;

const PatternBase = ({ size, ...props }) => (
  <PatternBg backgroundSize={`${size} ${size}`} {...props} />
);

PatternBase.propTypes = {
  size: PropTypes.string,
};

PatternBase.defaultProps = {
  size: '100vw',
};

export default PatternBase;
