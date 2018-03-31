import React from 'react';

import Container from '../../components/Container';
import Box from '../../components/Box';
import PatternGray from '../../components/Patterns/Gray';
import AbsCenter from '../../components/AbsCenter';
import Logo from '../../components/Logo';

export default () => (
  <PatternGray is={Box.fullpage}>
    <Container is="section">
      <AbsCenter><Logo.vertical w="20em" /></AbsCenter>
    </Container>
  </PatternGray>
);
