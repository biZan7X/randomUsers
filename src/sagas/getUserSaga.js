import {call, takeEvery, put} from '@redux-saga/core/effects';

import {fetchUsers} from '../apis/getUser';
import {getUser, setUser} from '../actions/index';

function* workerGetUsers() {
  const user = yield call(fetchUsers);
  yield put(setUser(user));
}

function* watcherGetUsers() {
  yield takeEvery(getUser, workerGetUsers);
}

export default watcherGetUsers();
