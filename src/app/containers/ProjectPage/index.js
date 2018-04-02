import React from 'react';
import find from 'lodash/find';

import App from '../App';

import Link from '../../components/Link';
import Logo from '../../components/Logo';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Border from '../../components/Border';
import Text from '../../components/Text';
import DateString from '../../components/DateString';
import HeartButton from '../../components/HeartButton';
import BubbleTag from '../../components/BubbleTag';
import SideSocials from '../../components/SideSocials';

import projects from '../../data/projects';

const ProjectsPage = ({ url: { query: { id } } }) => {
  const project = find(projects, 'slug', id);
  return (
    <Flex minHeight="100vh">
      <Box w={2 / 3}>
        {id}
      </Box>
      <Box w={1 / 3} bg="#f1f1f1" px="5%" pt="2em">
        <Box w="10em" mb="4em">
          <Link href="/">
            <Logo.horizontal />
          </Link>
        </Box>
        <DateString>{project.addedAt}</DateString>
        <Text.h3>{project.title}</Text.h3>
        <Border w="4em" borderBottom="1px solid" my="2em" />
        <Text f="0.8em">{project.short}</Text>
        <Box pt="2em" pb="6em">
          <HeartButton mx="auto" />
        </Box>
        <Box>
          {project.tags.map((tag) => (
            <BubbleTag key={tag.key} mx="0.5em">{tag.label}</BubbleTag>
          ))}
        </Box>
        <SideSocials.horizontal pt="3em" mx="auto" />
      </Box>
    </Flex>
  );
};

export default (props) => <App noHeader><ProjectsPage {...props} /></App>;
