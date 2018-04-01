import React from 'react';
// import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Circle from '../../components/Circle';

const partners = Array(12).fill({
  logo: 'Logo',
});

const About = (props) => (
  <Box px={['1em', '10%']} {...props}>
    <Flex flexWrap="wrap" justify="center">
      {partners.map(({ logo }, index) => (
        <Circle key={index} w="6em" mx="1.5em" my="1em" bg="yellow" color="white">
          {logo}
        </Circle>
      ))}
    </Flex>
  </Box>
);

// About.propTypes = {
//   features: PropTypes.arrayOf(PropTypes.shape()),
// };

export default About;
