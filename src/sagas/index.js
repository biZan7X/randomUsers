import {all} from '@redux-saga/core/effects';

import getUserSaga from './getUserSaga';

export default function* () {
  yield all([getUserSaga]);
}
