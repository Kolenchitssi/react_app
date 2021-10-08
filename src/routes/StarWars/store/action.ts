import { createAction } from "../../../store/utils";

export const GET_STAR_WARS = " GET_STAR_WARS";
export const SET_PEOPLE_STAR_WARS = " SET_PEOPLE_STAR_WARS";
export const SET_PLANETS_STAR_WARS = " SET_PLANETS_STAR_WARS";

export const getStarWars = createAction<void>(GET_STAR_WARS);
export const setPeopleStarWars = createAction<object>(SET_PEOPLE_STAR_WARS);
export const setPlanetsStarWars = createAction<object>(SET_PLANETS_STAR_WARS);
