import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import movieBrowserReducer from "./features/movieBrowserSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieBrowser: movieBrowserReducer,
    },
    middleware: [sagaMiddleware],
});


sagaMiddleware.run(saga);
export default store;