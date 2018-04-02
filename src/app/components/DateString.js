import React from 'react';
import format from 'date-fns/format';

import Text from './Text';

const DateString = ({ children, ...props }) => (
  <Text
    f="1.25em"
    color="teal"
    {...props}
  >
    {format(children, 'MMM.DD, YYYY')}
  </Text>
);

export default DateString;
