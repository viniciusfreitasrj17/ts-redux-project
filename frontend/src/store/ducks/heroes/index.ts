import { Reducer } from "redux";
import { HeroesState, HeroesTypes } from "./types";

const INITIAL_STATE: HeroesState = {
  data: [{ id: 1, name: "Hero", imgSrc: "..." }],
  loading: false,
  error: false,
};

const reducer: Reducer<HeroesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeroesTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case HeroesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case HeroesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export default reducer;