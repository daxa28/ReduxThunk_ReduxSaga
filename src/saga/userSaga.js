import { put, takeEvery, call } from "redux-saga/effects";
import { setUsersAction } from "../store/userReducer";

const fetchUsersFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users");

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsersAction(json));
}

export function* userWatcher() {
  yield takeEvery("FETCH_USERS", fetchUserWorker);
}
