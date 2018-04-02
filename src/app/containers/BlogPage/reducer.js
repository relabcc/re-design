import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const TOGGLE_ALL = 'Re-design/BlogReducer/TOGGLE_ALL';
export const TOGGLE_FILTER = 'Re-design/BlogReducer/TOGGLE_FILTER';

export const toggleFilter = createAction(TOGGLE_FILTER);
export const toggleAll = createAction(TOGGLE_ALL);

const initialState = fromJS({
  filter: {},
});

export default handleActions({
  [TOGGLE_FILTER](state, { payload }) {
    const fPath = ['filter', payload];
    return state.setIn(fPath, !state.getIn(fPath));
  },
  [TOGGLE_ALL]() {
    return initialState;
  },
}, initialState);
