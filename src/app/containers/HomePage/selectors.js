import { createSelector } from 'reselect';

const selectMain = (state) => state.get('home');

const makeSelectHeaderIconActive = () => createSelector(
  selectMain,
  (sate) => sate.get('headerIconActive')
);

const makeSelectSocialColor = () => createSelector(
  selectMain,
  (sate) => sate.get('socialColor')
);

const makeSelectActiveSection = () => createSelector(
  selectMain,
  (sate) => sate.get('activeSection')
);

const makeSelectPrevSection = () => createSelector(
  selectMain,
  (sate) => sate.get('prevSection')
);

export {
  selectMain,
  makeSelectHeaderIconActive,
  makeSelectSocialColor,
  makeSelectActiveSection,
  makeSelectPrevSection,
};
