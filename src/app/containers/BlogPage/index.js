import React from 'react';
import { connect } from 'react-redux';
import App from '../App';

import Container from '../../components/Container';
import SideSocials from '../../components/SideSocials';
import Patterns from '../../components/Patterns';
import SectionTitle from '../../components/SectionTitle';
import Filters from '../Filters';

import { toggleFilter, toggleAll } from './reducer';
import { makeSelectFilter } from './selectors';

const filters = [
  { key: 'food', label: '食物' },
  { key: 'gov', label: '政府' },
];

const BlogPage = ({ dispatch, browser, filterOptions }) => (
  <div>
    <Patterns.gray height="100vh" headerPadding>
      <Container>
        <SectionTitle>BLOG</SectionTitle>
        <Filters
          filters={filters.map((filter) => ({ ...filter, active: filterOptions.get(filter.key) }))}
          onToggle={(key) => () => dispatch(toggleFilter(key))}
          unsetAll={() => dispatch(toggleAll())}
        />
      </Container>
    </Patterns.gray>
    {browser.greaterThan.xs && <SideSocials />}
  </div>
);

const Connected = connect((state) => ({
  browser: state.get('browser'),
  filterOptions: makeSelectFilter()(state),
}))(BlogPage);

export default () => <App noHide><Connected /></App>;
