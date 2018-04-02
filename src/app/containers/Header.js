import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Link from '../components/Link';
import Box from '../components/Box';
import Flex from '../components/Flex';
import Input from '../components/Input';
import Logo from '../components/Logo';
import theme from '../components/ThemeProvider/theme';

import { makeSelectHeaderIconActive } from './HomePage/selectors';

const searchWidth = '15em';

const Header = ({ headerIconVisible, noHide }) => {
  const show = headerIconVisible || noHide;
  return (
    <Box.fixed is="header" w={1} zIndex={99}>
      <Flex justify="space-between" align="center" height={theme.headerHeight} bg={show ? 'fade.white.70' : null} is={Box.transition}>
        <Box w={searchWidth} display={['none', 'none', 'block']} />
        <Box px="1em" opacity={Number(show)}>
          <Link href="/">
            <Logo.horizontal w="12em" is={Box.transition} />
          </Link>
        </Box>
        <Box w={searchWidth} pr="1em">
          <Input.search />
        </Box>
      </Flex>
    </Box.fixed>
  );
};

Header.propTypes = {
  headerIconVisible: PropTypes.bool,
  noHide: PropTypes.bool,
};

Header.defaultProps = {
  noHide: false,
};

const mapStateToProps = createStructuredSelector({
  headerIconVisible: makeSelectHeaderIconActive(),
});

export default connect(mapStateToProps)(Header);
