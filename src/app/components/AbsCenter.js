import React from 'react';
import Box from './Box';

export default (props) => (
  <Box.absolute
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    {...props}
  />
);
