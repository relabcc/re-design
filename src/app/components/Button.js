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
} from 'styled-system';
import tag from 'clean-tag';

import { getColorByPropKey } from './utils/getColor';
import { fontWeight } from './utils/customProps';

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
  appearance: none;
  -webkit-appearance: none;
  transition: all ${themeGet('duration')}ms;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  &:focus {
    outline: none;
  }
  &:hover,
  &:focus {
    color: ${getColorByPropKey('hoverColor')};
    background-color: ${getColorByPropKey('hoverBg')};
  }
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
  px: '1em',
  py: '0.5em',
  borderRadius: '1.5em',
  fontWeight: 'bold',
};

export default Button;
