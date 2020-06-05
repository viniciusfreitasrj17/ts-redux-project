import { ActionType } from "typesafe-actions";
import * as Actions from "./actions";
/**
 * Action Types
 */
export enum HeroesTypes {
  LOAD_REQUEST = "@heroes/LOAD_REQUEST",
  LOAD_SUCCESS = "@heroes/LOAD_SUCCESS",
  LOAD_FAILURE = "@heroes/LOAD_FAILURE",
}

export enum HeroTypes {
  TOGGLE_REQUEST = "@heroes/TOGGLE_REQUEST",
}

export type Types =
  | HeroesTypes.LOAD_REQUEST
  | HeroesTypes.LOAD_SUCCESS
  | HeroesTypes.LOAD_FAILURE
  | HeroTypes.TOGGLE_REQUEST;

// export interface HeroToggle {
//   type: Types;
//   data?: any;
// }

export type DemoActions = ActionType<typeof Actions>;

/**
 * Data Types
 */
export interface Hero {
  id: number;
  name: string;
  imgSrc: string;
}

// export interface Img {
//   imgSrc: string;
// }

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
