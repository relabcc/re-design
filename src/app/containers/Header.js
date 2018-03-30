import React from 'react';

import Box from '../components/Box';
import Flex from '../components/Flex';
import Input from '../components/Input';
import Logo from '../components/Logo';
import theme from '../components/ThemeProvider/theme';

const searchWidth = '15em';

export default () => (
  <Box.fixed is="header" w={1} zIndex={99}>
    <Flex justify="space-between" align="center" height={theme.headerHeight}>
      <Box w={searchWidth} display={['none', 'none', 'block']} />
      <Box px="1em">
        <Logo.horizontal w="15em" />
      </Box>
      <Box w={searchWidth} pr="1em">
        <Input.search />
      </Box>
    </Flex>
  </Box.fixed>
);
