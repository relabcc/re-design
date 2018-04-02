import { combineReducers } from 'redux-immutable';
import { createResponsiveStateReducer } from 'redux-responsive';

import { breakpoints } from './components/ThemeProvider/theme';
import homeReducer from './containers/HomePage/reducer';
import projectsReducer from './containers/ProjectsPage/reducer';
import blogReducer from './containers/BlogPage/reducer';

const keys = [
  'xs',
  'sm',
  'md',
];

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default combineReducers({
  home: homeReducer,
  projects: projectsReducer,
  blog: blogReducer,
  browser: createResponsiveStateReducer(keys.reduce((obj, key, index) => Object.assign(obj, {
    [key]: breakpoints[index],
  }), {})),
});
