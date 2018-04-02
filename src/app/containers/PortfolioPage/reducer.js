import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const TOGGLE_FILTER = 'Re-design/PortfolioReducer/TOGGLE_FILTER';

export const toggleFilter = createAction(TOGGLE_FILTER);

const initialState = fromJS({
  filter: {},
});

export default handleActions({
  [TOGGLE_FILTER](state, { payload }) {
    const fPath = ['filter', payload];
    return state.setIn(fPath, !state.getIn(fPath));
  },
}, initialState);
