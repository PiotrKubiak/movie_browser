import { createSlice } from "@reduxjs/toolkit";

const moviesBrowserSlice = createSlice({
  name: "moviesBrowser",
  initialState: {
    data: null,
    status: "initial",
    page: "1",
    allPages: "500",
  },
  reducers: {
    fetchMovies: () => ({
      status: "loading",
      data: null,
    }),
    fetchMoviesSuccess: (_, { payload: data }) => ({
      status: "success",
      data,
    }),
    fetchMoviesError: () => ({
      status: "error",
      data: null,
    }),
    fetchPeople: () => ({
      status: "loading",
      data: null,
    }),
    fetchPeopleSuccess: (_, { payload: data }) => ({
      status: "success",
      data,
    }),
    fetchPeopleError: () => ({
      status: "error",
      data: null,
    }),
    setPage: (state, { payload: page }) => {
      Number(page) < 1 && (page = "1");
      state.isError = false;
      state.page = page.toString();
    },
    selectAllPages: (state, { payload: pagesAmount }) => {
      state.allPages = pagesAmount.toString();
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleError,
  setPage,
  selectAllPages,
} = moviesBrowserSlice.actions;

const selectMoviesBrowserState = (state) => state.moviesBrowser;

export const selectMovies = (state) => selectMoviesBrowserState(state).data;
export const selectMovieBrowserStatus = (state) =>
  selectMoviesBrowserState(state).status;
export const selectSearchQuery = (state) =>
  selectMoviesBrowserState(state).searchQuery;
export const selectPage = (state) => selectMoviesBrowserState(state).page;
export const selectType = (state) => selectMoviesBrowserState(state).tape;

export default moviesBrowserSlice.reducer;
