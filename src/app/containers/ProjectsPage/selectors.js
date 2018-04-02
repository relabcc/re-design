import { createSelector } from 'reselect';

const selectProjects = (state) => state.get('projects');

const makeSelectFilter = () => createSelector(
  selectProjects,
  (sate) => sate.get('filter')
);

export {
  selectProjects,
  makeSelectFilter,
};
