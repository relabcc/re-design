import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  border,
  borderWidth,
  borderColor,
} from 'styled-system';

import Box from './Box';
import AbsCenter from './AbsCenter';

const parseOrigin = ({ apex }) => {
  switch (apex) {
    case 2:
      return '100% 100%';
    case 3:
      return '0% 100%';
    case 1:
      return '100% 0%';
    case 0:
    default:
      return '0% 0%';
  }
};

const parseApex = ({ apex }) => Array(4).fill('50%')
  .map((a, index) => index === apex ? '0' : a)
  .join(' ');

const Wrapper = styled(Box)`
  border-radius: ${parseApex};
  transform-origin: ${parseOrigin};
  box-sizing: border-box;
  ${border}
  ${borderWidth}
  ${borderColor}
`;

const BubbleShape = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Box.relative pb="100%">
      <Box.absolute top="0" left="0" right="0" bottom="0">
        <AbsCenter>
          {children}
        </AbsCenter>
      </Box.absolute>
    </Box.relative>
  </Wrapper>
);

BubbleShape.defaultProps = {
  apex: 2,
};

BubbleShape.border = (props) => (
  <BubbleShape
    border="0.5em solid"
    bg="transparent"
    {...props}
  />);

export default BubbleShape;
