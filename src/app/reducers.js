import { combineReducers } from 'redux-immutable';
import { createResponsiveStateReducer } from 'redux-responsive';

import { breakpoints } from './components/ThemeProvider/theme';
import homeReducer from './containers/HomePage/reducer';
import portfolioReducer from './containers/PortfolioPage/reducer';

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
  portfolio: portfolioReducer,
  browser: createResponsiveStateReducer(keys.reduce((obj, key, index) => Object.assign(obj, {
    [key]: breakpoints[index],
  }), {})),
});
