import React from 'react';
import styled from 'styled-components';
import tag from 'clean-tag';
import {
  width,
  space,
  fontSize,
  themeGet,
  borderColor,
} from 'styled-system';
import FaSearch from 'react-icons/lib/fa/search';

import Box from './Box';

const Input = styled(tag.input)`
  ${space}
  ${fontSize}
  ${width}
  border: 1px solid ${themeGet('colors.text')};
  line-height: 2;
  border-radius: 2em;
  box-sizing: border-box;
  ${borderColor}
  &:focus {
    outline: none;
  }
`;

Input.defaultProps = {
  pl: '1em',
  pr: '1em',
};

Input.search = ({
  onChange,
  ...props
}) => (
  <Box.relative {...props}>
    <Input w={1} pr="2.5em" onChange={onChange} />
    <Box.absolute top="0.5em" right="1em">
      <FaSearch size="1em" />
    </Box.absolute>
  </Box.relative>
);

Input.bubble = styled(Input)`
  border-radius: 0 2em 2em 2em;
`;

export default Input;
