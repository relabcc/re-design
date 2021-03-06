import React from 'react';
import PropTypes from 'prop-types';
import padStart from 'lodash/padStart';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';

const SectionLayout = ({
  children,
  index,
  title,
  description,
  color,
  ...props
}) => (
  <section>
    <Box py={['10vh', '25vh']} {...props}>
      <Container>
        <Flex>
          <Box w={[1, 1 / 3]} align="center" pb={['2em', 0]}>
            <Text.h4 f="2.75em" pb={[0, '7rem']} color={color} letterSpacing="0.1em">{padStart(index, 2, 0)}</Text.h4>
            <SectionTitle color={color}>{title}</SectionTitle>
            <Box maxWidth="20rem" mx="auto">
              <Text align="left">{description}</Text>
            </Box>
          </Box>
          <Box w={[1, 2 / 3]}>
            {children}
          </Box>
        </Flex>
      </Container>
    </Box>
  </section>
);

SectionLayout.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
};

export default SectionLayout;
