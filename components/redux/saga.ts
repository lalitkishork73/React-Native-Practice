import {takeEvery, put} from 'redux-saga/effects';
import {User_List, SET_USERDATA} from './constants';

function* userList(): any {
  const url = 'https://dummyjson.com/user';
  let responce = yield fetch(url);
  let data = yield responce.json();
  yield put({type: SET_USERDATA, data});
  console.warn(data);
}

function* SagaDate() {
  yield takeEvery(User_List, userList);
}

export default SagaDate;
