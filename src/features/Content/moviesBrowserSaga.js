import { put, takeLatest, delay, call } from "redux-saga/effects";
import { getMovies, getPeople } from "./moviesBrowserApi";
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess, fetchPeople, fetchPeopleError, fetchPeopleSuccess } from "./moviesBrowserSlice";

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
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
};

