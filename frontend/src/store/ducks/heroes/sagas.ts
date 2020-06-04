import { call, put } from "redux-saga/effects";

import api from "../../../services/api";
import { loadSeccess, loadFailure } from "../heroes/actions";

export function* load() {
  try {
    const response = yield call(api.get, "/heroes");

    yield put(loadSeccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
