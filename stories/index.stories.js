import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Text from '../src/app/components/Text';
import Flex from '../src/app/components/Flex';
import Box from '../src/app/components/Box';
import Col from '../src/app/components/Col';
import Container from '../src/app/components/Container';
import Logo from '../src/app/components/Logo';

storiesOf('Text', module)
  .add('Text', () => (
    <Container>
      <Text>我飛性天己統已，軍來的地大人定青日受白美更如天手火爾修感，清引而灣裡回除。</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
    </Container>));

storiesOf('Layout', module)
  .add('Box', () => <Box width={200} height={200} bg="green" />)
  .add('Grid', () => (
    <Container>
      <Flex w={1}>
        <Col height={200} bg="green" />
        <Col height={200} bg="blue" />
      </Flex>
    </Container>
  ))
  .add('Grid (fluid)', () => (
    <Container fluid>
      <Flex fluid w={1}>
        <Col fluid height={200} bg="green" />
        <Col fluid height={200} bg="blue" />
      </Flex>
    </Container>
  ));

storiesOf('Logo', module)
  .add('Vertical', () => <Logo.vertical w={200} />)
  .add('Horizontal', () => <Logo.horizontal w={200} />);
