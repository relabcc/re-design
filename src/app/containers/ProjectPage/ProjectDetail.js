import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Image from '../../components/Image';
import Text from '../../components/Text';

import SectionTitle from './SectionTitle';
import Highlights, { propTypes as highlightsPropTypes } from './Highlights';
import Participants, { propTypes as participantsPropTypes } from './Participants';

const ProjectDetail = ({
  images,
  long,
  highlights,
  participants,
}) => (
  <Box py="2em">
    <Box>
      {images.map((src, index) => (
        <Image my="2em" src={src} key={index} />
      ))}
    </Box>
    <SectionTitle>作品簡介</SectionTitle>
    <Text>{long}</Text>
    <SectionTitle>設計重點</SectionTitle>
    <Highlights list={highlights} />
    <SectionTitle>製作團隊</SectionTitle>
    <Participants list={participants} />
  </Box>
);

ProjectDetail.propTypes = {
  highlights: highlightsPropTypes,
  participants: participantsPropTypes,
  images: PropTypes.arrayOf(PropTypes.string),
  long: PropTypes.string,
};

export default ProjectDetail;
