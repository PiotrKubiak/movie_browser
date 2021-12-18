import { put, takeLatest, delay, call } from "redux-saga/effects";
import { getGenres, getMovies, getPeople } from "./moviesBrowserApi";
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess, fetchPeople, fetchPeopleError, fetchPeopleSuccess } from "./moviesBrowserSlice";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./MoviesList/genresSlice";

const loadingDelay = 500;

function* fetchMoviesHandler() {
    try {
        yield delay(loadingDelay);
        const movies = yield call(getMovies);
        yield put(fetchMoviesSuccess(movies));
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

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
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
};

