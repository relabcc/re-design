import { createSelector } from 'reselect';

const selectPortfolio = (state) => state.get('portfolio');

const makeSelectFilter = () => createSelector(
  selectPortfolio,
  (sate) => sate.get('filter')
);

export {
  selectPortfolio,
  makeSelectFilter,
};
