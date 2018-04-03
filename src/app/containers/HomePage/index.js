import React from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import App from '../App';

import SectionIntro from './SectionIntro';
import SectionAbout from './SectionAbout';
import SectionActivity from './SectionActivity';
import SectionPartner from './SectionPartner';
import SectionContact from './SectionContact';
import SideSocials from '../../components/SideSocials';
import Patterns from '../../components/Patterns';

import SectionLayout from './SectionLayout';
import HomeButtons from './HomeButtons';

import { setSectionIn, setSectionOut } from './reducer';
import { makeSelectSocialColor } from './selectors';

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

const restSections = [
  {
    key: 'activities',
    title: 'ACTIVITIES',
    index: 2,
    description,
    color: 'white',
    Comp: SectionLayout,
    children: <SectionActivity />,
    pattern: 'yellow',
  },
  {
    key: 'partners',
    title: 'PARTNERS',
    index: 3,
    description,
    color: 'yellow',
    Comp: SectionLayout,
    children: <SectionPartner />,
    pattern: 'white',
  },
  {
    key: 'contact',
    title: 'CONTACT',
    index: 4,
    description,
    color: 'teal',
    Comp: SectionLayout,
    children: <SectionContact />,
    pattern: 'black',
  },
];

const generateSection = (dispatch) => ({
  key,
  Comp,
  pattern,
  ...rest
}) => {
  const content = <Comp {...rest} />;
  const Pattern = Patterns[pattern];
  return (
    <Waypoint
      key={key}
      onEnter={() => dispatch(setSectionIn(key))}
      onLeave={() => dispatch(setSectionOut(key))}
      bottomOffset="50%"
      topOffset="49%"
    >
      {pattern ? <Pattern>{content}</Pattern> : content}
    </Waypoint>
  );
};

const HomePage = ({ dispatch, browser, socialColor }) => (
  <div>
    <Patterns.gray>
      {firstSections.map(generateSection(dispatch))}
    </Patterns.gray>
    {restSections.map(generateSection(dispatch))}
    <HomeButtons />
    {browser.greaterThan.xs && <SideSocials white={socialColor === 'white'} />}
  </div>
);

const Connected = connect((state) => ({
  browser: state.get('browser'),
  socialColor: makeSelectSocialColor()(state),
}))(HomePage);

export default () => <App><Connected /></App>;
