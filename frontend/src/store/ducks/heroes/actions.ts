import { action } from "typesafe-actions";
import { Hero, HeroesTypes } from "./types";

export const loadRequest = () => action(HeroesTypes.LOAD_REQUEST);
export const loadSeccess = (data: Hero[]) =>
  action(HeroesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(HeroesTypes.LOAD_FAILURE);
