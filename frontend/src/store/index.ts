import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import { HeroesState, HeroState } from "./ducks/heroes/types";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

interface ApplicationStateHeroes {
  heroes: HeroesState;
}

interface ApplicationStateHero {
  hero: HeroState;
}

export type ApplicationState = ApplicationStateHero & ApplicationStateHeroes;

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

sagaMiddleware.run(rootSaga);

export default store;
