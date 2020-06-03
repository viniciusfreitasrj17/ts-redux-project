import { createStore, Store } from "redux";
import { HeroesState } from "./ducks/heroes/types";

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  heroes: HeroesState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
