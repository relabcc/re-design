import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { SET_SECTION_IN } from './mainReducer';
import { selectMain } from './selectors';

function* onSectionActive({ payload }) {
  console.log(payload);
  const state = yield select(selectMain);
  console.log(state.get(payload));
}

function* rootSaga() {
  yield takeLatest(SET_SECTION_IN, onSectionActive);
}

export default rootSaga;
