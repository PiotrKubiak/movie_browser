import { put, takeLatest, delay, call } from "redux-saga/effects";
import { getMovies, getGenres } from "./moviesBrowserApi";
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess } from "./moviesBrowserSlice";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./genresSlice";

const loadingDelay = 2_000;

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

export function* moviesBrowserSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
};