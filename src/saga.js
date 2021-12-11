import { all } from "redux-saga/effects";
import { movieBrowserSaga } from "./features/movieBrowserSaga";

export default function* saga() {
    yield all([
        movieBrowserSaga(),
    ]);
};