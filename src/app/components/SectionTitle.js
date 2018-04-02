import React from 'react';

import Text from './Text';

const SectionTitle = (props) => (
  <Text.h2
    f="3em"
    py="2rem"
    letterSpacing="0.1em"
    color="teal"
    align="center"
    {...props}
  />
);

export default SectionTitle;
