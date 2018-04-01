import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import Box from '../Box';
import ActivityCard from './ActivityCard';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

class ActivityCarousel extends PureComponent {
  state = {}

  render() {
    const { items, ...props } = this.props;
    return (
      <Box {...props}>
        <Slider {...settings}>
          {items.map((item, key) => (
            <ActivityCard key={key} active {...item} />
          ))}
        </Slider>
      </Box>
    );
  }
}

ActivityCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
};

export default ActivityCarousel;
