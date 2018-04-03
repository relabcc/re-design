import React from 'react';

import Link from '../../components/Link';
import BubbleButton from '../../components/BubbleButton';
import Flex from '../../components/Flex';
import Box from '../../components/Box';

const HomeActionBtn = (props) => (
  <BubbleButton
    bg="fade.white.80"
    w="6em"
    mx="0.5em"
    scale
    {...props}
  />
);

const HomeButtons = () => (
  <Box.fixed left="0" right="0" bottom="8vh">
    <Flex justify="center">
      <Link href="/blog">
        <HomeActionBtn>Blog</HomeActionBtn>
      </Link>
      <Link href="/projects">
        <HomeActionBtn apex={3}>Projects</HomeActionBtn>
      </Link>
    </Flex>
  </Box.fixed>
);

export default HomeButtons;
