import { all, put, select, takeLatest } from 'redux-saga/effects';

import {
  SET_SECTION_IN,
  showHeaderIcon,
  hideHeaderIcon,
  setSocialColor,
} from './mainReducer';
import { makeSelectPrevSection } from './selectors';

// const seq = [
//   'intro',
//   'about',
//   'activities',
//   'partners',
//   'contact',
// ].reduce((obj, key, index) => ({ ...obj, [key]: index }));

function* onSectionActive({ payload: activeSection }) {
  const prevSection = yield select(makeSelectPrevSection());
  if (activeSection === 'intro') yield put(hideHeaderIcon());
  if (prevSection === 'intro') yield put(showHeaderIcon());
  if (activeSection === 'contact') yield put(setSocialColor('white'));
  if (prevSection === 'contact') yield put(setSocialColor('black'));
}

function* rootSaga() {
  yield all([
    takeLatest(SET_SECTION_IN, onSectionActive),
  ]);
}

export default rootSaga;
