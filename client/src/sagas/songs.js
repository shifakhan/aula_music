import {takeEvery, call, put} from 'redux-saga/effects';
import * as songsActions from '../actions/songs';
import * as notificationActions from '../actions/notification';
import {SONGS} from '../actions/songs';
import songsApi from '../services/songs';

// Workers
function* fetchSongs(action) {
  const response = yield call(songsApi.getSongs, action.params);
  if (response && response.data) {
    yield put(songsActions.fetchSongsSuccess(response));
  } else {
    yield put(songsActions.fetchSongsFailure(response));
    yield put(notificationActions.notifyAlert(response));
  }
}

// Watchers
export default function* watchFetchSongs() {
  yield takeEvery(SONGS.FETCH, fetchSongs);
}
