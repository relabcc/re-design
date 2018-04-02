import styled from 'styled-components';
import { themeGet } from 'styled-system';

import BubbleShape from './BubbleShape';
import { buttonStyle } from './Button';

const BubbleButton = styled(BubbleShape)`
  ${buttonStyle}
  display: block;
  padding: 0;
  line-height: 1;
  font-weight: ${themeGet('bold')};
  transition: all ${themeGet('duration')}ms;
  &:hover,
  &:focus {
    ${({ scale, disabled }) => scale && !disabled && 'transform: scale(1.38);'}
  }
`;

BubbleButton.defaultProps = {
  border: '0.375em solid',
  hoverColor: 'white',
  hoverBg: 'teal',
  hoverBorder: 'teal',
};

export default BubbleButton;
