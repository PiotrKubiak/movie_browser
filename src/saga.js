import { all } from "redux-saga/effects";
import { moviesBrowserSaga } from "./features/Content/MoviesList/moviesBrowserSaga";

export default function* saga() {
    yield all([
        moviesBrowserSaga(),
    ]);
};