import { put, takeLatest, delay, call } from "redux-saga/effects";
import { getMovies } from "./moviesBrowserApi"; 
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess } from "./moviesBrowserSlice";

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

export function* moviesBrowserSaga() {
     yield takeLatest(fetchMovies.type, fetchMoviesHandler);
};