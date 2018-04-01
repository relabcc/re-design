import React from 'react';

import Container from '../../components/Container';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import AbsCenter from '../../components/AbsCenter';
import Logo from '../../components/Logo';
import BubbleButton from '../../components/BubbleButton';
import BubbleShape from '../../components/BubbleShape';
import Parallax from '../../components/Parallax';

const HomeActionBtn = (props) => <BubbleButton w="6em" mx="0.5em" scale {...props} />;

export default (props) => (
  <section>
    <Box.fullpage mb="2em" {...props}>
      <Parallax transform={{ translateY: -100 }}>
        <Box.absolute left="-7vw" top="-7vw" w="33vw">
          <BubbleShape bg="teal" w={1} />
        </Box.absolute>
      </Parallax>
      <Parallax transform={{ translateY: -100 }}>
        <Box.absolute right="1vw" bottom="-7vw" w="30vw">
          <BubbleShape border="5vw solid" borderColor="yellow" apex={0} w={1} />
        </Box.absolute>
      </Parallax>
      <Container>
      </Container>
      <AbsCenter><Logo.vertical w="15em" /></AbsCenter>
      <Box.absolute left="0" right="0" bottom="8vh">
        <Flex justify="center">
          <HomeActionBtn>Blog</HomeActionBtn>
          <HomeActionBtn apex={3}>Portfolio</HomeActionBtn>
        </Flex>
      </Box.absolute>
    </Box.fullpage>
  </section>
);
