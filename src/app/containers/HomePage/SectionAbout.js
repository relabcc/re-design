import React from 'react';
// import PropTypes from 'prop-types';

import Text from '../../components/Text';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Circle from '../../components/Circle';

const features = Array(3).fill({
  icon: 'ICON',
  label: '標語理念',
});

const About = (props) => (
  <Box px={['1em', '15%']} {...props}>
    <Flex mt="5vh" mb="2em" justify="space-between">
      {features.map(({ icon, label }, index) => (
        <Box key={index} w="7em" align="center">
          <Circle bg="teal">{icon}</Circle>
          <Text my="1em" color="teal" f="1.25em" fontWeight="bold">{label}</Text>
        </Box>
      ))}
    </Flex>
    <Text fontWeight="semiBold">方的想求光到，表民一，風雄全就極角議展明一麼人愛，友長速都為元以年業的何她制共學笑子院格也眼之，不必消。方的想求光到，表民一，風雄全就極角議展明一麼人愛，友長速都為元以年業的何她制共學笑子院格也眼之，不必消。</Text>
  </Box>
);

// About.propTypes = {
//   features: PropTypes.arrayOf(PropTypes.shape()),
// };

export default About;
