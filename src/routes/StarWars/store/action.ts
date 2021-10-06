import { createAction } from "../../../store/utils";

export const GET_STAR_WARS: string = " GET_STAR_WARS";

export const getStarWars: object = createAction<object>(GET_STAR_WARS);
