import React from 'react';
import { connect } from 'react-redux';
import App from '../App';

import SideSocials from '../../components/SideSocials';
import Patterns from '../../components/Patterns';
import SectionTitle from '../../components/SectionTitle';

import { toggleFilter } from './reducer';
import { makeSelectFilter } from './selectors';

const PortfolioPage = ({ dispatch, browser }) => (
  <div>
    <Patterns.gray headerPadding>
      <SectionTitle>PROTFOLIO</SectionTitle>
    </Patterns.gray>
    {browser.greaterThan.xs && <SideSocials />}
  </div>
);

const Connected = connect((state) => ({
  browser: state.get('browser'),
  filter: makeSelectFilter()(state),
}))(PortfolioPage);

export default () => <App noHide><Connected /></App>;
