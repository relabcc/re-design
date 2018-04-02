import React from 'react';
import PropTypes from 'prop-types';
import { responsiveStyle } from 'styled-system';
import styled from 'styled-components';

import Box from './Box';
import { containerWidth } from './ThemeProvider/theme';

const injectMaxWidth = responsiveStyle({
  prop: 'maxWidth',
  cssProperty: 'maxWidth',
  numberToPx: true,
});

const Container = styled(({ fluid, ...props }) => (
  <Box
    mx="auto"
    maxWidth={!fluid && containerWidth}
    px={!fluid && ['1em', '5em']}
    {...props}
  />
))`
  ${injectMaxWidth}
`;

Container.propTypes = {
  fluid: PropTypes.bool,
};

export default Container;
