import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  border,
  borderWidth,
  borderColor,
} from 'styled-system';

import Box from './Box';
import FreeBackground from './FreeBackground';

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

export const parseApex = ({ apex }) => Array(4).fill('50%')
  .map((a, index) => index === apex ? '0' : a)
  .join(' ');

const Wrapper = styled(Box)`
  border-radius: ${parseApex};
  transform-origin: ${parseOrigin};
  box-sizing: border-box;
  overflow: hidden;
  ${border}
  ${borderWidth}
  ${borderColor}
`;

const ForceAbsCenter = styled(Box.absolute)`
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  & > * {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const formatChildren = (children) => {
  if (typeof children === 'string'
    || typeof children === 'number'
    || React.Children.count(children) > 1
  ) return <div>{children}</div>;
  return children;
};

const BubbleShape = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Box.relative pb="100%">
      <ForceAbsCenter>
        {formatChildren(children)}
      </ForceAbsCenter>
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

BubbleShape.bg = (props) => (
  <BubbleShape
    is={FreeBackground}
    bg="lightGray"
    {...props}
  />);

export default BubbleShape;
