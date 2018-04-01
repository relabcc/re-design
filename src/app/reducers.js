import { combineReducers } from 'redux-immutable';
import { createResponsiveStateReducer } from 'redux-responsive';

import { breakpoints } from './components/ThemeProvider/theme';
import mainReducer from './containers/mainReducer';

const keys = [
  'xs',
  'sm',
  'md',
];

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default combineReducers({
  main: mainReducer,
  browser: createResponsiveStateReducer(keys.reduce((obj, key, index) => Object.assign(obj, {
    [key]: breakpoints[index],
  }), {})),
});
