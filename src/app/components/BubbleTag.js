import styled from 'styled-components';
import { themeGet } from 'styled-system';

import Button from './Button';
// import { getColorByPropKey } from './utils/getColor';

const BubbleTag = styled(Button)`
  border-radius: 0 2em 2em 2em;
  display: inline-block;
  position: relative;
  line-height: 1;
  font-weight: ${themeGet('bold')};
  transition: all ${themeGet('duration')}ms;
  &::after {
    content: '○';
    position: absolute;
    top: 0;
    left: 0.25rem;
  }
`;

BubbleTag.defaultProps = {
  border: '1px solid',
  borderColor: 'text',
  bg: 'transparent',
  color: 'text',
  hoverColor: 'white',
  hoverBg: 'teal',
  hoverBorder: 'teal',
  pl: '1.5em',
  pr: '1em',
  py: '0.5em',
  f: '0.8em',
  letterSpacing: '0.1em',
};

export default BubbleTag;
