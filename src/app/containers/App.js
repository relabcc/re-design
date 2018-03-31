import React from 'react';

import Header from './Header';
import ThemeProvider from '../components/ThemeProvider';

const App = ({ children }) => (
  <ThemeProvider>
    <Header />
    {children}
  </ThemeProvider>
);

export default App;
