import React from 'react';
import PropTypes from 'prop-types';

import Border from '../../components/Border';
import Text from '../../components/Text';

const SectionTitle = ({ children, ...props }) => (
  <Border borderBottom="1px solid" mb="2em" py="2em" {...props}>
    <Text.h4 align="center" color="teal">{children}</Text.h4>
  </Border>
);

SectionTitle.propTypes = {
  children: PropTypes.node,
};

export default SectionTitle;
