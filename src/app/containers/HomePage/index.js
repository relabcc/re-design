import React from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import App from '../App';

import SectionIntro from './SectionIntro';
import SectionAbout from './SectionAbout';
import SideSocials from '../../components/SideSocials';
import SectionLayout from '../../components/SectionLayout';
import PatternGray from '../../components/Patterns/Gray';

import { setSectionIn, setSectionOut } from '../mainReducer';

const description = '任白眾我的己，角富兒風驚有等入新生其氣好年；光病當個法的發。是子設小，每靈市：';

const firstSections = [
  { key: 'intro', Comp: SectionIntro },
  {
    key: 'about',
    title: 'ABOUT',
    index: 1,
    description,
    color: 'teal',
    Comp: SectionLayout,
    children: <SectionAbout />,
  },
];

const generateSection = (dispatch) => ({ key, Comp, ...rest }) => (
  <Waypoint
    key={key}
    onEnter={() => dispatch(setSectionIn(key))}
    onLeave={() => dispatch(setSectionOut(key))}
  >
    <Comp {...rest} />
  </Waypoint>
);

const HomePage = ({ dispatch }) => (
  <div>
    <PatternGray>
      {firstSections.map(generateSection(dispatch))}
    </PatternGray>
    <SideSocials />
  </div>
);

const ConnectedHome = connect()(HomePage);

export default () => <App><ConnectedHome /></App>;
