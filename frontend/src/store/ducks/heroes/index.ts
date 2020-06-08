import { Reducer } from "redux";
import { HeroesState, HeroesTypes, HeroTypes, HeroState } from "./types";

const INITIAL_STATE_HERO: HeroesState = {
  data: [],
  loading: false,
  error: false,
};

const INITIAL_STATE_IMG: HeroState = {
  data: {
    id: 0,
    name: "OK",
    imgSrc:
      "https://2.bp.blogspot.com/-mHR5Tqgk1Tg/Tx3kRd7ylFI/AAAAAAAABMw/yuQwKhGg280/s1600/ok.jpg",
  },
};

/** Load */
const reducerHero: Reducer<HeroesState> = (
  state = INITIAL_STATE_HERO,
  action
) => {
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

    case HeroesTypes.STORE_REQUEST:
      return { ...state, loading: true };

    case HeroesTypes.STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case HeroesTypes.STORE_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

/** Toggle */
const reducerImg: Reducer<HeroState> = (state = INITIAL_STATE_IMG, action) => {
  switch (action.type) {
    case HeroTypes.TOGGLE_REQUEST:
      return { ...state, data: action.hero };

    default:
      return state;
  }
};

export { reducerHero, reducerImg };
