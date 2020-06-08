import { action } from "typesafe-actions";
import { Hero, HeroesTypes, HeroTypes } from "./types";

/** Load */
export const loadRequest = () => action(HeroesTypes.LOAD_REQUEST);
export const loadSuccess = (data: Hero[]) =>
  action(HeroesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(HeroesTypes.LOAD_FAILURE);

/** Store */
export const storeRequest = (hero: Hero) => ({
  type: HeroesTypes.STORE_REQUEST,
  hero,
});
export const storeSuccess = () => ({ type: HeroesTypes.STORE_SUCCESS });
export const storeFailure = () => ({ type: HeroesTypes.STORE_FAILURE });

/** Toggle */
export const toggleRequest = (hero: Hero) => ({
  type: HeroTypes.TOGGLE_REQUEST,
  hero,
});
