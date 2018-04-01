import React from 'react';
// import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';

const fileds = [
  { key: 'name', label: '姓名' },
  { key: 'email', label: '信箱' },
  {
    key: 'message',
    label: '留言',
    is: 'textarea',
    rows: 6,
  },
];

const Contact = (props) => (
  <Box px={['1em', '10%']} pt={[0, '10%']} {...props}>
    <form>
      {fileds.map(({ key, label, ...rest }) => (
        <Flex key={key} color="white" my="1em">
          <Text w="4em">{label}</Text>
          <Box mx="1em" flex={1}>
            <Input.bubble w={1} name={key} borderColor="white" {...rest} />
          </Box>
        </Flex>
      ))}
    </form>
    <Box align="right" pr="1em">
      <Button>SEND</Button>
    </Box>
  </Box>
);

// Contact.propTypes = {
//   features: PropTypes.arrayOf(PropTypes.shape()),
// };

export default Contact;
