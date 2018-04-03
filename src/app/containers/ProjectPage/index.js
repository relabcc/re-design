import React from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';

import App from '../App';

import Container from '../../components/Container';
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

import ProjectDetail from './ProjectDetail';

const ProjectsPage = ({ url: { query: { id } }, browser }) => {
  const project = find(projects, 'slug', id);
  const projectInfo = (
    <Box w={1}>
      <DateString>{project.addedAt}</DateString>
      <Text.h3>{project.title}</Text.h3>
      <Border w="4em" border="1px solid" borderColor="lightGray" my="2em" />
      <Text f="0.8em">{project.short}</Text>
      <Box pt="2em" pb={['2em', null, '6em']}>
        <HeartButton mx="auto" />
      </Box>
      <Box>
        {project.tags.map((tag) => (
          <BubbleTag key={tag.key} m="0.5em">{tag.label}</BubbleTag>
        ))}
      </Box>
      <SideSocials.horizontal pt="3em" mx="auto" />
    </Box>
  );
  return (
    <Box>
      {!browser.greaterThan.sm && (
        <Box px="2em" pb="2em" headerPadding bg="#f1f1f1">
          <Box.fixed top="0" left="0" right="0" bg="fade.white.50">
            <Box w="12em" mx="auto">
              <Link href="/">
                <Logo.horizontal />
              </Link>
            </Box>
          </Box.fixed>
          {projectInfo}
        </Box>
      )}
      <Flex minHeight="100vh">
        <Container flex={1}>
          <ProjectDetail {...project} />
        </Container>
        {browser.greaterThan.sm && (
          <Box.relative w="26em" bg="#f1f1f1">
            <Box.fixed px="4em" pt="2em">
              <Box w="12em" mb="4em">
                <Link href="/">
                  <Logo.horizontal />
                </Link>
              </Box>
              {projectInfo}
            </Box.fixed>
          </Box.relative>
        )}
      </Flex>
    </Box>
  );
};

const Connected = connect((state) => ({ browser: state.get('browser') }))(ProjectsPage);

export default (props) => <App noHeader><Connected {...props} /></App>;
