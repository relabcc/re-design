import React from 'react';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import horizontal from './logo-horizontal.svg';
import vertical from './logo-vertical.svg';

const makeLogo = (config) => (props) => (
  <Box {...props}>
    <BackgroundImage {...config} />
  </Box>
);

export default {
  vertical: makeLogo({ ratio: 1, src: vertical }),
  horizontal: makeLogo({ ratio: 55.5 / 212.06, src: horizontal }),
};
