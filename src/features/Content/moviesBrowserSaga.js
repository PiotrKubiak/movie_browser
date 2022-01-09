import { put, takeLatest, delay, call, debounce } from "redux-saga/effects";
import { getGenres, getMovies, getPeople, getMoviesByQuery, getPeopleByQuery } from "./moviesBrowserApi";
import {
    fetchPopularMovies,
    fetchMoviesByQuery,
    fetchMoviesByQuerySuccess,
    fetchMoviesByQueryError,
    fetchMoviesError,
    fetchMoviesSuccess,
    fetchPeople,
    fetchPeopleError,
    fetchPeopleSuccess,
    fetchPeopleByQuerySuccess,
    fetchPeopleByQueryError,
    fetchPeopleByQuery
} from "./moviesBrowserSlice";
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

function* fetchMoviesByQueryHandler({ payload: query }) {
    try {
        const movies = yield call(getMoviesByQuery, query);
        yield put(fetchMoviesByQuerySuccess(movies));
    } catch (error) {
        yield put(fetchMoviesByQueryError());
    }
};

function* fetchPeopleByQueryHandler({ payload: query }) {
    try {
        const movies = yield call(getPeopleByQuery, query);
        yield put(fetchPeopleByQuerySuccess(movies));
    } catch (error) {
        yield put(fetchPeopleByQueryError());
    }
};
function* fetchGenresHandler() {
    try {
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
    yield debounce(1000, fetchMoviesByQuery.type, fetchMoviesByQueryHandler);
    yield debounce(1000, fetchPeopleByQuery.type, fetchPeopleByQueryHandler);
};