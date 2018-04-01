import React from 'react';
// import PropTypes from 'prop-types';

import FaTwitter from 'react-icons/lib/fa/twitter';
import FaPinterest from 'react-icons/lib/fa/pinterest-p';
import FaFacebook from 'react-icons/lib/fa/facebook';

import AbsCenter from './AbsCenter';
import BubbleButton from './BubbleButton';

const GetSocialBubble = (Icon) => ({ size, white, ...props }) => (
  <BubbleButton
    f={size || '3em'}
    w="1em"
    bg={white ? 'white' : 'text'}
    border="none"
    color={white ? 'text' : 'white'}
    hoverBg="teal"
    hoverColor="white"
    apex={1}
    {...props}
  >
    <AbsCenter is={Icon} w="0.5em" />
  </BubbleButton>
);

export default {
  twitter: GetSocialBubble(FaTwitter),
  pinterest: GetSocialBubble(FaPinterest),
  facebook: GetSocialBubble(FaFacebook),
};
