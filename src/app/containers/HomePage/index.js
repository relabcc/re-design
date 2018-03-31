import React from 'react';

import App from '../App';
import Container from '../../components/Container';
import FreeBackground from '../../components/FreeBackground';
import Box from '../../components/Box';
import Text from '../../components/Text';

import bg1 from './home_BG-01.svg';

export default () => (
  <App>
    <FreeBackground is={Box.fullpage} src={bg1}>
      <Container>
        <Text f="2em">Index TextPage</Text>
      </Container>
    </FreeBackground>
  </App>
);
