import React from 'react';
import Heart from 'react-icons/lib/io/heart';

import BubbleButton from './BubbleButton';

const HeartButton = (props) => (
  <BubbleButton
    f="3em"
    w="1em"
    bg="white"
    color="yellow"
    border="none"
    hoverBg="yellow"
    hoverColor="white"
    {...props}
    apex={-1}
  >
    <Heart size="0.5em" />
  </BubbleButton>
);

export default HeartButton;
