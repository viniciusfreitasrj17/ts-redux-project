import { ActionType } from "typesafe-actions";
import * as Actions from "./actions";
/**
 * Action Types
 */
export enum HeroesTypes {
  LOAD_REQUEST = "@heroes/LOAD_REQUEST",
  LOAD_SUCCESS = "@heroes/LOAD_SUCCESS",
  LOAD_FAILURE = "@heroes/LOAD_FAILURE",

  STORE_REQUEST = "@heroes/STORE_REQUEST",
  STORE_SUCCESS = "@heroes/STORE_SUCCESS",
  STORE_FAILURE = "@heroes/STORE_FAILURE",
}

export enum HeroTypes {
  TOGGLE_REQUEST = "@heroes/TOGGLE_REQUEST",
}

export type DemoActions = ActionType<typeof Actions>;

/**
 * Data Types
 */
export interface Hero {
  id: number;
  name: string;
  imgSrc: string;
}

/**
 * State Types
 */
export interface HeroesState {
  readonly data: Hero[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface HeroState {
  readonly data: Hero;
}
