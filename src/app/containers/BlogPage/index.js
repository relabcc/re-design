import React from 'react';
import { connect } from 'react-redux';
import App from '../App';

import Container from '../../components/Container';
import SideSocials from '../../components/SideSocials';
import Patterns from '../../components/Patterns';
import SectionTitle from '../../components/SectionTitle';
import Filters from '../Filters';
import ArticlePreview from './ArticlePreview';
import articles from '../../data/articles';

import { toggleFilter, toggleAll } from './reducer';
import { makeSelectFilter } from './selectors';

const filters = [
  { key: 'food', label: '食物' },
  { key: 'gov', label: '政府' },
];

const BlogPage = ({ dispatch, browser, filterOptions }) => (
  <div>
    <Patterns.gray minHeight="100vh" headerPadding>
      <Container mt="2em">
        <SectionTitle>BLOG</SectionTitle>
        <Filters
          filters={filters.map((filter) => ({ ...filter, active: filterOptions.get(filter.key) }))}
          onToggle={(key) => () => dispatch(toggleFilter(key))}
          unsetAll={() => dispatch(toggleAll())}
        />
        {articles.map((article, index) => (
          <ArticlePreview key={article.slug} isFirst={index === 0} {...article} />
        ))}
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
