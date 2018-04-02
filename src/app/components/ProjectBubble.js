import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import FreeBackground from './FreeBackground';
import BubbleShape from './BubbleShape';
import Text from './Text';
import Box from './Box';

const BubbleHover = styled(BubbleShape)`
  opacity: 0;
  transition: all ${themeGet('duration')}ms;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const UnderlineTitle = styled(Text.h3)`
  line-height: 1.5;
  display: inline-block;
  margin-bottom: 1rem;
  &::after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: 2px solid currentColor;
  }
`;

const ProjectBubble = ({
  right,
  title,
  preview,
  short,
  ...props
}) => (
  <Box {...props}>
    <BubbleShape apex={right ? 3 : 2} is={FreeBackground} src={preview} p="2em">
      <BubbleHover bg="fade.yellow.70" p="4em" w="100%" height="100%">
        <Box w={1} color="white" pt="10%" pl="10%">
          <UnderlineTitle>{title}</UnderlineTitle>
          <Text fontWeight="bold">{short}</Text>
        </Box>
      </BubbleHover>
    </BubbleShape>
  </Box>
);

ProjectBubble.propTypes = {

}

export default ProjectBubble;
