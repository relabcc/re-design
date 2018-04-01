import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Box from '../components/Box';
import Flex from '../components/Flex';
import Input from '../components/Input';
import Logo from '../components/Logo';
import theme from '../components/ThemeProvider/theme';

import { makeSelectHeaderIconActive } from './selectors';

const searchWidth = '15em';

const Header = ({ headerIconVisible }) => (
  <Box.fixed is="header" w={1} zIndex={99}>
    <Flex justify="space-between" align="center" height={theme.headerHeight} bg={headerIconVisible ? 'fade.white.50' : null}>
      <Box w={searchWidth} display={['none', 'none', 'block']} />
      <Box px="1em">
        <Logo.horizontal w="12em" opacity={Number(headerIconVisible)} />
      </Box>
      <Box w={searchWidth} pr="1em">
        <Input.search />
      </Box>
    </Flex>
  </Box.fixed>
);

Header.propTypes = {
  headerIconVisible: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  headerIconVisible: makeSelectHeaderIconActive(),
});

export default connect(mapStateToProps)(Header);
