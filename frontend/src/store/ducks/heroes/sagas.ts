import { call, put } from "redux-saga/effects";

import api from "../../../services/api";
import {
  loadSuccess,
  loadFailure,
  storeSuccess,
  storeFailure,
} from "../heroes/actions";
import { Hero } from "./types";

interface Params {
  hero: Hero;
  type: string;
}

export function* load() {
  try {
    const { data } = yield call(api.get, "/heroes");

    yield put(loadSuccess(data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* store({ hero }: Params) {
  try {
    const { data } = yield call(api.post, "/heroes", hero);

    if (data) {
      load();
      yield put(storeSuccess());
    }
  } catch (err) {
    yield put(storeFailure());
  }
}
