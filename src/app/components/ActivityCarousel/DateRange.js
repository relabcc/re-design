import React from 'react';
// import PropTypes from 'prop-types';
import format from 'date-fns/format';

import Border from '../Border';
import Flex from '../Flex';
import Text from '../Text';

const foramtDate = (date) => format(date, 'MMM.DD');
const foramtDateWithYear = (date) => format(date, 'YYYY-MM-DD');

const DateString = ({ children, ...props }) => (
  <Text color="teal" title={foramtDateWithYear(children)} {...props}>
    {foramtDate(children)}
  </Text>
);

const DateRange = ({ start, end, ...props }) => (
  <Flex align="center" {...props}>
    <DateString>{start}</DateString>
    <Border mx="1em" w="2em" border="1px solid" borderColor="teal" />
    <DateString>{end}</DateString>
  </Flex>
);

export default DateRange;
