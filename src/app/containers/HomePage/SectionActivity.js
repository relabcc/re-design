import React from 'react';
// import PropTypes from 'prop-types';

import Box from '../../components/Box';
import ActivityCarousel from '../../components/ActivityCarousel';

const activities = Array(3).fill({
  image: '//loremflickr.com/1200/630',
  title: '活動主題名稱',
  description: '活動內容敘述活動內容敘述，活動內容敘述，活動內容敘述活動內容敘述，活動內容敘述，活動內容敘述活動內容敘述。',
  startDate: '2018-10-22',
  endDate: '2018-10-27',
});

const About = (props) => (
  <Box px={['1em', '10%']} {...props}>
    <ActivityCarousel items={activities} />
  </Box>
);

// About.propTypes = {
//   features: PropTypes.arrayOf(PropTypes.shape()),
// };

export default About;
