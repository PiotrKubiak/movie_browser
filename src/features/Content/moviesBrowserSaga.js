import { put, takeLatest, delay, call, debounce } from "redux-saga/effects";
import { getGenres, getMovies, getPeople, getMoviesByQuery } from "./moviesBrowserApi";
import { fetchPopularMovies, fetchMoviesByQuery, fetchMoviesByQuerySuccess,
    fetchMoviesByQueryError, fetchMoviesError, fetchMoviesSuccess, fetchPeople, fetchPeopleError, fetchPeopleSuccess } from "./moviesBrowserSlice";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./MoviesList/genresSlice";

const loadingDelay = 500;

function* fetchPopularMoviesHandler() {
    try {
        yield delay(loadingDelay);
        const movies = yield call(getMovies);
        yield put(fetchMoviesSuccess(movies));
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

function* fetchMoviesByQueryHandler({ payload: query}) {
    try {
    //   const { query } = param;
    //   console.log(parameters);
      const movies = yield call(getMoviesByQuery, query);
      yield put(fetchMoviesByQuerySuccess(movies));
    } catch (error) {
      yield put(fetchMoviesByQueryError());
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
};

function* fetchPeopleHandler() {
    try {
        yield delay(loadingDelay);
        const people = yield call(getPeople);
        yield put(fetchPeopleSuccess(people));
    } catch (error) {
        yield put(fetchPeopleError());
    }
};

export function* moviesBrowserSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
    yield debounce(500, fetchMoviesByQuery.type, fetchMoviesByQueryHandler);
};

