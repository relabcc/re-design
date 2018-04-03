import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import ListBubbleShape from '../../components/ListBubbleShape';
import BubbleShape from '../../components/BubbleShape';

const Highlights = ({ list, ...props }) => (
  <Box {...props}>
    <Flex mb="2em">
      {list.map(({ icon }, index) => (
        <ListBubbleShape
          key={index}
          w={1 / 3}
          index={index + 1}
          src={icon}
          mx="1rem"
        />
      ))}
    </Flex>
    {list.map(({ content }, index) => (
      <Flex key={index} my="3em">
        <Box w="4em">
          <BubbleShape bg="yellow" color="white" apex={0} f="2em" fontWeight="bold">
            {index + 1}
          </BubbleShape>
        </Box>
        <Box ml="1em" flex={1}>
          <Text>{content}</Text>
        </Box>
      </Flex>
    ))}
  </Box>
);

export const propTypes = PropTypes.arrayOf(PropTypes.shape({
  icon: PropTypes.string,
  content: PropTypes.string,
}));

Highlights.propTypes = {
  list: PropTypes.node,
};

export default Highlights;
