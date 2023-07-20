import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_INCREMENT,
  countIncrementAction,
  ASYNC_DECREMENT,
  countDecrementAction,
} from "../store/countReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(countIncrementAction());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(countDecrementAction());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
