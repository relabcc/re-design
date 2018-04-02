import React from 'react';
import { Provider } from 'react-redux';

import ThemeProvider from '../components/ThemeProvider';
import Header from './Header';
import configureStore from '../configureStore';

const store = configureStore();

const App = ({ children, noHide }) => (
  <Provider store={store}>
    <ThemeProvider>
      <Header noHide={noHide} />
      {children}
    </ThemeProvider>
  </Provider>
);

export default App;
