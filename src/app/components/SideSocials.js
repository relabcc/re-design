import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import SocialBubble from './SocialBubble';

const keys = [
  'facebook',
  'pinterest',
  'twitter',
];

const SideSocials = ({ white, ...props }) => (
  <Box.fixed right="1em" top="50%" transform="translateY(-50%)" {...props}>
    {keys.map((key) => {
      const Bubble = SocialBubble[key];
      return <Bubble key={key} my="0.5em" white={white} size="2em" />;
    })}
  </Box.fixed>
);

SideSocials.propTypes = {
  white: PropTypes.bool,
};

export default SideSocials;
