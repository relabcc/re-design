import styled from 'styled-components';
import { themeGet } from 'styled-system';

import BubbleShape from './BubbleShape';
import { buttonStyle } from './Button';
import { getColorByPropKey } from './utils/getColor';

const BubbleButton = styled(BubbleShape)`
  ${buttonStyle}
  display: block;
  padding: 0;
  font-weight: ${themeGet('bold')};
  &:hover,
  &:focus {
    border-color: ${getColorByPropKey('hoverBg')};
    ${({ scale, disabled }) => scale && !disabled && 'transform: scale(1.38);'}
  }
`;

BubbleButton.defaultProps = {
  border: '0.5em solid',
  hoverColor: 'white',
  hoverBg: 'teal',
};

export default BubbleButton;
