import { put, takeLatest, delay, call } from "redux-saga/effects";
import { getMovies } from "./Content/MoviesList/movieBrowserApi";
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess } from "./movieBrowserSlice";

function* fetchMovieBorwserHendler() {
    try{
        yield delay(2_000);
        const movies = yield call(getMovies);
        yield put(fetchMoviesSuccess(movies));
    }catch (error) {
        yield put(fetchMoviesError());
    }
}

export function* movieBrowserSaga() {
    yield takeLatest(fetchMovies.type, fetchMovieBorwserHendler);
}