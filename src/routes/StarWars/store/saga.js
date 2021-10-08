import { call, fork, put, takeLatest } from "@redux-saga/core/effects"
import { object } from "yup/lib/locale";
import { GET_STAR_WARS, setPeopleStarWars, setPlanetsStarWars, setStarWars } from "./action";


async function getAnySW(way) {
  const request = await fetch(`https://swapi.dev/api/${way}`);
  const data = await request.json();
  return data.results;
}

function* loadPeople() {
  const peopleSW = yield call(getAnySW, "people");
  yield put(setPeopleStarWars(peopleSW));
}

function* loadPlanets() {
  const planetsSW = yield call(getAnySW, "planets");
  yield put(setPlanetsStarWars(planetsSW));
}

function* workClickSWSaga() {
  yield fork(loadPeople)
  yield fork(loadPlanets)

}

function* watchClickSWSaga() {
  yield takeLatest(GET_STAR_WARS, workClickSWSaga)
}

export function* rootStarWarsSaga() {
  yield watchClickSWSaga()
}
