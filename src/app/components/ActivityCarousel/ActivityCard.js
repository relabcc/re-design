import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Border from '../Border';
import BackgroundImage from '../BackgroundImage';
import Text from '../Text';
import Button from '../Button';
import DateRange from './DateRange';

import { numberOrString } from '../utils/propTypes';

const ActivityCard = ({
  title,
  description,
  link,
  startDate,
  endDate,
  image,
  active,
  ...props
}) => (
  <Box pb="1em">
    <Border border={active && '2px solid white'} {...props} p="1em">
      <Box.relative is="section" bg="white" boxShadow={2} boxShadowBlur="4em">
        <BackgroundImage src={image} ratio={630 / 1200} />
        <Box px="2em" pt="2em" pb="3em" opacity={Number(active)}>
          <DateRange start={startDate} end={endDate} />
          <Text.h3>
            {title}
          </Text.h3>
          <Text>
            {description}
          </Text>
          <Box.absolute bottom="-1.5em" left="0" right="0" align="center">
            <Button disabled={!active}>我要報名</Button>
          </Box.absolute>
        </Box>
        {!active && <Box.absolute top="0" left="0" right="0" bottom="0" bg="fade.black.50" />}
      </Box.relative>
    </Border>
  </Box>
);

ActivityCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  startDate: numberOrString,
  endDate: numberOrString,
  image: PropTypes.string,
  active: PropTypes.bool,
};

ActivityCard.defaultProps = {
  active: false,
};

export default ActivityCard;
