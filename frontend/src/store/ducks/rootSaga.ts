import { all, takeLatest } from "redux-saga/effects";

import { HeroesTypes } from "./heroes/types";
import { load } from "./heroes/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(HeroesTypes.LOAD_REQUEST, load)]);
}
