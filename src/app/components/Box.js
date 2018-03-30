import styled from 'styled-components';
import tag from 'clean-tag';
import {
  responsiveStyle,
  space,
  width,
  textAlign,
  height,
  top,
  left,
  right,
  bottom,
  style,
  color,
  fontSize,
  fontWeight,
  borderRadius,
  zIndex,
  flex,
  display,
  maxWidth,
  minHeight,
} from 'styled-system';

import blacklist from './utils/blacklist';

const transform = responsiveStyle({
  prop: 'transform',
  cssProperty: 'transform',
});

const opacity = style({
  prop: 'opacity',
  cssProperty: 'opacity',
  alias: 'alpha',
});

const Box = styled(tag)`
  font-size: 1em;
  margin: 0;
  padding: 0;
  ${space}
  ${width}
  ${height}
  ${color}
  ${fontSize}
  ${transform}
  ${opacity}
  ${textAlign}
  ${fontWeight}
  ${borderRadius}
  ${flex}
  ${display}
  ${maxWidth}
  ${minHeight}
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;

Box.defaultProps = {
  blacklist,
};

Box.inline = styled(Box)`
  display: inline-block;
`;

Box.relative = styled(Box)`
  position: relative;
  ${zIndex}
`;

Box.absolute = styled(Box.relative)`
  position: absolute;
  ${top}
  ${left}
  ${right}
  ${bottom}
`;

Box.fixed = styled(Box.absolute)`
  position: fixed;
`;

export default Box;
