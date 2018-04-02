import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import FreeBackground from './FreeBackground';
import BubbleShape from './BubbleShape';
import Text from './Text';
import Box from './Box';
import Link from './Link';

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
  slug,
  ...props
}) => {
  const apex = right ? 3 : 2;
  return (
    <Box {...props}>
      <BubbleShape apex={apex} is={FreeBackground} src={preview} p="2em">
        <BubbleHover apex={apex} bg="fade.yellow.70" p="4em" w="100%" height="100%">
          <Link href={`/projects/${slug}`}>
            <Box w={1} color="white" pt="10%" pl="10%">
              <UnderlineTitle>{title}</UnderlineTitle>
              <Text fontWeight="bold">{short}</Text>
            </Box>
          </Link>
        </BubbleHover>
      </BubbleShape>
    </Box>
  );
};

ProjectBubble.propTypes = {
  right: PropTypes.bool,
  title: PropTypes.string,
  preview: PropTypes.string,
  short: PropTypes.string,
  slug: PropTypes.string,
};

export default ProjectBubble;
