import React from 'react';
import styled from 'styled-components';
import {
  fontSize,
  lineHeight,
  space,
  color,
  display,
  textAlign,
  margin,
  letterSpacing,
} from 'styled-system';
import tag from 'clean-tag';
import range from 'lodash/range';

import blacklist from './utils/blacklist';
import { fontWeight } from './utils/customProps';

const Text = styled(tag.p)`
  margin: 0;
  ${display}
  ${fontSize}
  ${space}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${lineHeight}
  ${margin}
  ${letterSpacing}
`;

Text.defaultProps = {
  f: '1em',
  lineHeight: 1.75,
  my: 0,
  blacklist,
};

range(1, 7).forEach((key) => {
  const h = `h${key}`;
  Text[h] = (props) => (
    <Text
      is={h}
      f={`${1 + ((6 - key) * 0.125)}em`}
      fontWeight="bold"
      {...props}
    />
  );
});

export default Text;
