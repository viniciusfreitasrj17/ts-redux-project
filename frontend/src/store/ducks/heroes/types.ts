/**
 * Action Types
 */
export enum HeroesTypes {
  LOAD_REQUEST = "@heroes/LOAD_REQUEST",
  LOAD_SUCCESS = "@heroes/LOAD_SUCCESS",
  LOAD_FAILURE = "@heroes/LOAD_FAILURE",
}

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
