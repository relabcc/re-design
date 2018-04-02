import React from 'react';

import styled, { css } from 'styled-components';
import {
  themeGet,
  fontSize,
  space,
  color,
  width,
  border,
  borderColor,
  borderRadius,
  letterSpacing,
} from 'styled-system';
import tag from 'clean-tag';

import { getColorByPropKey } from './utils/getColor';
import { fontWeight } from './utils/customProps';

const active = css`
  color: ${getColorByPropKey('hoverColor')};
  background-color: ${getColorByPropKey('hoverBg')};
  border-color: ${getColorByPropKey('hoverBorder')};
`;

export const buttonStyle = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  border: none;
  font-size: 1em;
  font-family: inherit;
  line-height: 1;
  ${fontSize}
  ${space}
  ${color}
  ${width}
  ${border}
  ${borderColor}
  ${borderRadius}
  ${fontWeight}
  ${letterSpacing}
  appearance: none;
  -webkit-appearance: none;
  transition: all ${themeGet('duration')}ms;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  &:focus {
    outline: none;
  }
  &:hover,
  &:focus {
    ${active}
  }
  ${(props) => props.active && active}
`;

const Button = styled(tag.button)`
  ${buttonStyle}
`;

Button.defaultProps = {
  border: '0.25em solid',
  borderColor: 'teal',
  bg: 'teal',
  color: 'white',
  hoverColor: 'teal',
  hoverBg: 'white',
  pl: '1em',
  pr: '1em',
  py: '0.5em',
  borderRadius: '1.5em',
  fontWeight: 'bold',
};

Button.filter = (props) => (
  <Button
    borderRadius="0"
    border="2px solid"
    borderColor="text"
    bg="transparent"
    color="text"
    hoverBg="teal"
    hoverColor="white"
    hoverBorder="teal"
    f="0.9em"
    px="2em"
    {...props}
  />
);

Button.yellow = (props) => (
  <Button
    borderColor="yellow"
    bg="yellow"
    hoverColor="yellow"
    {...props}
  />
);

export default Button;
