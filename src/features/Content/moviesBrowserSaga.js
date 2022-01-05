import { put, takeLatest, delay, call, debounce } from "redux-saga/effects";
import { getGenres, getMovies, getPeople } from "./moviesBrowserApi";
import {
  fetchPopularMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  fetchMoviesByQuery,
} from "./moviesBrowserSlice";
import {
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
} from "./MoviesList/genresSlice";

const loadingDelay = 500;

function* fetchPopularMoviesHandler() {
  try {
    yield delay(loadingDelay);
    const movies = yield call(getMovies);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}
function* fetchMoviesByQueryHandler(parameters) {
  try {
    const { query } = parameters;
    console.log(parameters);
    const movies = yield call(getMoviesByQuery, query);
    yield put(fetchMoviesSuccess(movies));
  } catch (e) {
    console.log(e.message);
  }
}

function* fetchGenresHandler() {
  try {
    yield delay(loadingDelay - 1_000);
    const genres = yield call(getGenres);
    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

function* fetchPeopleHandler() {
  try {
    yield delay(loadingDelay);
    const people = yield call(getPeople);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* moviesBrowserSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
  yield debounce(500, fetchMoviesByQuery.type, fetchMoviesByQueryHandler);
}
