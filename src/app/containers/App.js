import React from 'react';

import Header from './Header';
import ThemeProvider from '../components/ThemeProvider';
import theme from '../components/ThemeProvider/theme';
import Box from '../components/Box';

const App = ({ children }) => (
  <ThemeProvider>
    <Header />
    <Box pt={theme.headerHeight}>
      {children}
    </Box>
  </ThemeProvider>
);

export default App;
