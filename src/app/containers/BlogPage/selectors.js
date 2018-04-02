import { createSelector } from 'reselect';

const selectBlog = (state) => state.get('blog');

const makeSelectFilter = () => createSelector(
  selectBlog,
  (sate) => sate.get('filter')
);

export {
  selectBlog,
  makeSelectFilter,
};
