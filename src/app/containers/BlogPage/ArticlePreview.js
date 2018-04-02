import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import Link from '../../components/Link';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Border from '../../components/Border';
import BackgroundImage from '../../components/BackgroundImage';
import Text from '../../components/Text';
import BubbleTag from '../../components/BubbleTag';
import Button from '../../components/Button';

import { numberOrString } from '../../components/utils/propTypes';

const ArticlePreview = ({
  date,
  title,
  cover,
  tags,
  short,
  slug,
  isFirst,
  ...props
}) => (
  <Border py="2em" borderTop={!isFirst && '1px solid'} is="article" {...props}>
    <Flex>
      <Box w={1 / 2} px="1em">
        <BackgroundImage src={cover} ratio={3 / 4} />
      </Box>
      <Box w={1 / 2} px="1em">
        <Text f="1.25em" color="teal">{format(date, 'MMM.DD, YYYY')}</Text>
        <Text.h3>{title}</Text.h3>
        <Box mt="0.5em" mb="4em">
          {tags.map((tag) => (
            <BubbleTag key={tag.key} mx="0.5em">{tag.label}</BubbleTag>
          ))}
        </Box>
        <Text>{short}</Text>
        <Box mt="1.5em" align="center">
          <Link href={`/article/${slug}`}>
            <Button.yellow letterSpacing="0.2em" px="2em">READ</Button.yellow>
          </Link>
        </Box>
      </Box>
    </Flex>
  </Border>
);

ArticlePreview.propTypes = {
  date: numberOrString,
  title: PropTypes.string,
  cover: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
  })),
  short: PropTypes.string,
  slug: PropTypes.string,
  isFirst: PropTypes.bool,
};

export default ArticlePreview;
