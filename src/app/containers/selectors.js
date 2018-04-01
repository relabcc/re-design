import { createSelector } from 'reselect';

const selectMain = (state) => state.get('main');

const makeSelectHeaderIconActive = () => createSelector(
  selectMain,
  (sate) => sate.get('headerIconActive')
);

const makeSelectSocialColor = () => createSelector(
  selectMain,
  (sate) => sate.get('socialColor')
);

export {
  selectMain,
  makeSelectHeaderIconActive,
  makeSelectSocialColor,
};
