import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import moviesBrowserReducer from "./features/Content/moviesBrowserSlice";
import genresReducer from "./features/Content/MoviesList/genresSlice";

import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        moviesBrowser: moviesBrowserReducer,
        genres: genresReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);
export default store;