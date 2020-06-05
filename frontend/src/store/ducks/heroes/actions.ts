import { action } from "typesafe-actions";
import { Hero, HeroesTypes, HeroTypes } from "./types";

/** Load */
export const loadRequest = () => action(HeroesTypes.LOAD_REQUEST);
export const loadSuccess = (data: Hero[]) =>
  action(HeroesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(HeroesTypes.LOAD_FAILURE);

/** Toggle */
// export const toggleRequest = (hero: Hero) =>
//   action(HeroTypes.TOGGLE_REQUEST, hero);

export const toggleRequest = (hero: Hero) => ({
  type: HeroTypes.TOGGLE_REQUEST,
  hero,
});
