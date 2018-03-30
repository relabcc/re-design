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
  vertical: makeLogo({ ratio: 348.15 / 314.17, src: vertical }),
  horizontal: makeLogo({ ratio: 43.73 / 199.56, src: horizontal }),
};
