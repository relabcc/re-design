import React from 'react';
import { ThemeProvider } from 'styled-components';

import './global-styles';
import theme from './theme';
import Box from '../Box';

export default (props) => (
  <ThemeProvider theme={theme}>
    <Box is="main" f={[14, 16, 18]} {...props} />
  </ThemeProvider>
);
