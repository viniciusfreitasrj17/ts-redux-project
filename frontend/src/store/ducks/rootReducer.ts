import { combineReducers } from "redux";

import { reducerHero, reducerImg } from "./heroes";

export default combineReducers({
  heroes: reducerHero,
  hero: reducerImg,
});
