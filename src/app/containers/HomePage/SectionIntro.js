import React from 'react';

import Container from '../../components/Container';
import Box from '../../components/Box';
import AbsCenter from '../../components/AbsCenter';
import Logo from '../../components/Logo';
import BubbleShape from '../../components/BubbleShape';
import Parallax from '../../components/Parallax';

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
    </Box.fullpage>
  </section>
);
