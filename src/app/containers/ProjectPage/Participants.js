import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import BubbleShape from '../../components/BubbleShape';

const Participants = ({ list, ...props }) => (
  <Flex mb="4em" flexWrap="wrap" {...props}>
    {list.map(({ avatar, name, positions }, index) => (
      <Box w={1 / 5} px="1em" key={index} align="center">
        <BubbleShape.bg src={avatar} apex={-1} />
        <Text>{name}</Text>
        <Text color="teal">{positions.join('、')}</Text>
      </Box>
    ))}
  </Flex>
);

export const propTypes = PropTypes.arrayOf(PropTypes.shape({
  avatar: PropTypes.string,
  name: PropTypes.string,
  positions: PropTypes.arrayOf(PropTypes.string),
}));

Participants.propTypes = {
  list: propTypes,
};

export default Participants;
