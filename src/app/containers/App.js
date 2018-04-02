import React from 'react';
import { Provider } from 'react-redux';

import ThemeProvider from '../components/ThemeProvider';
import Header from './Header';
import configureStore from '../configureStore';

const store = configureStore();

const App = ({ children, showHeader }) => (
  <Provider store={store}>
    <ThemeProvider>
      <Header showHeader={showHeader} />
      {children}
    </ThemeProvider>
  </Provider>
);

export default App;
