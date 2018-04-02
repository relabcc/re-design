import React from 'react';
import { connect } from 'react-redux';
import chunk from 'lodash/chunk';

import App from '../App';

import Container from '../../components/Container';
import SideSocials from '../../components/SideSocials';
import Patterns from '../../components/Patterns';
import SectionTitle from '../../components/SectionTitle';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import ProjectBubble from '../../components/ProjectBubble';
import Filters from '../Filters';

import projects from '../../data/projects';

import { toggleFilter, toggleAll } from './reducer';
import { makeSelectFilter } from './selectors';

const filters = [
  { key: 'food', label: '食物' },
  { key: 'gov', label: '政府' },
];

const render = (right) => (([l, r]) => {
  const project = right ? r : l;
  if (!project) return null;
  return (
    <Box key={project.slug} p="2em">
      <ProjectBubble right={right} {...project} />
    </Box>
  );
});

const ProjectsPage = ({ dispatch, browser, filterOptions }) => {
  const chunks = chunk(projects, 2);
  return (
    <div>
      <Patterns.gray minHeight="100vh" headerPadding>
        <Container mt="2em">
          <SectionTitle>PROJECTS</SectionTitle>
          <Filters
            filters={filters.map((filter) => ({ ...filter, active: filterOptions.get(filter.key) }))}
            onToggle={(key) => () => dispatch(toggleFilter(key))}
            unsetAll={() => dispatch(toggleAll())}
          />
          <Flex>
            <Box w={1 / 2}>
              {chunks.map(render())}
            </Box>
            <Box w={1 / 2} pt="10vh">
              {chunks.map(render(true))}
            </Box>
          </Flex>
        </Container>
      </Patterns.gray>
      {browser.greaterThan.xs && <SideSocials />}
    </div>
  );
};

const Connected = connect((state) => ({
  browser: state.get('browser'),
  filterOptions: makeSelectFilter()(state),
}))(ProjectsPage);

export default () => <App noHide><Connected /></App>;
