import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import 'sanitize.css/sanitize.css';

import Box from '../src/app/components/Box';
import ThemeProvider from '../src/app/components/ThemeProvider';
import theme from '../src/app/components/ThemeProvider/theme';
import '../src/app/components/ThemeProvider/global-styles';

addDecorator((story) => (
  <ThemeProvider>
    <Box p="1em">
      {story()}
    </Box>
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
