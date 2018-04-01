import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const SHOW_HEADER_ICON = 'Re-design/MainReducer/SHOW_HEADER_ICON';
export const HIDE_HEADER_ICON = 'Re-design/MainReducer/HIDE_HEADER_ICON';
export const SET_SOCIAL_COLOR = 'Re-design/MainReducer/SET_SOCIAL_COLOR';
export const SET_SECTION_IN = 'Re-design/MainReducer/SET_SECTION_IN';
export const SET_SECTION_OUT = 'Re-design/MainReducer/SET_SECTION_OUT';

export const showHeaderIcon = createAction(SHOW_HEADER_ICON);
export const hideHeaderIcon = createAction(HIDE_HEADER_ICON);
export const setSocialColor = createAction(SET_SOCIAL_COLOR);
export const setSectionIn = createAction(SET_SECTION_IN);
export const setSectionOut = createAction(SET_SECTION_OUT);

const initialState = fromJS({
  headerIconActive: false,
  socialColor: 'dark',
  activeSection: 'intro',
});

export default handleActions({
  [SHOW_HEADER_ICON](state) {
    return state.set('headerIconActive', true);
  },
  [HIDE_HEADER_ICON](state) {
    return state.set('headerIconActive', false);
  },
  [SET_SOCIAL_COLOR](state, { payload }) {
    return state.set('socialColor', payload);
  },
  [SET_SECTION_IN](state, { payload }) {
    return state
      .set('prevSection', state.get('activeSection'))
      .set('activeSection', payload);
  },
}, initialState);
