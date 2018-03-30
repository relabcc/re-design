import React from 'react';
import PropTypes from 'prop-types';

import theme from './ThemeProvider/theme';
import Box from './Box';

const Col = ({ fluid, ...props }) => (
  <Box
    w={1}
    mx={!fluid && theme.gridSpacing}
    {...props}
  />
);

Col.propTypes = {
  fluid: PropTypes.bool,
};

export default Col;
