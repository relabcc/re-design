import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import BubbleShape from './BubbleShape';

const ListBubbleShape = ({
  src,
  index,
  children,
  ...props
}) => (
  <Box.relative {...props}>
    <Box pt="3em" pl="3em">
      <BubbleShape.bg apex={0} src={src} bg="gray" />
    </Box>
    <Box.absolute w="4em" top="0">
      <BubbleShape
        bg="yellow"
        color="white"
        fontWeight="bold"
        f="2em"
      >
        {index}
      </BubbleShape>
    </Box.absolute>
  </Box.relative>
);

ListBubbleShape.propTypes = {
  src: PropTypes.string,
  index: PropTypes.number,
  children: PropTypes.node,
};

export default ListBubbleShape;
