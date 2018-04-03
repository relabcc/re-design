import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

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
  ${({ active }) => active && 'opacity: 1;'}
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
  tags,
  addedAt,
  active,
  iamges,
  long,
  participants,
  ...props
}) => {
  const apex = right ? 3 : 2;
  return (
    <Box {...props}>
      <BubbleShape.bg
        apex={apex}
        src={preview}
        p={['1em', null, null, '2em']}
        boxShadow={2}
      >
        <BubbleHover
          apex={apex}
          bg="fade.yellow.70"
          p={['1em', '2em', null, '4em']}
          w="100%"
          height="100%"
          active={active}
        >
          <Link style={{ width: '100%' }} href={`/projects/${slug}`}>
            <Box w={1} color="white" pt="10%" pl={!right && '10%'} pr={right && '10%'}>
              <UnderlineTitle>{title}</UnderlineTitle>
              <Text fontWeight="bold">{short}</Text>
            </Box>
          </Link>
        </BubbleHover>
      </BubbleShape.bg>
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
