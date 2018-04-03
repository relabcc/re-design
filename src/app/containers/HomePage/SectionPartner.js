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
        <Box key={index} w={[1 / 3, 1 / 4]} px="0.5em" my="1em">
          <Circle maxWidth="6em" bg="yellow" color="white" mx="auto">
            {logo}
          </Circle>
        </Box>
      ))}
    </Flex>
  </Box>
);

// About.propTypes = {
//   features: PropTypes.arrayOf(PropTypes.shape()),
// };

export default About;
