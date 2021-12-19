import { createSlice } from "@reduxjs/toolkit";

const moviesBrowserSlice = createSlice({
  name: "moviesBrowser",
  initialState: {
    data: null,
    status: "initial",
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
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleError,
} = moviesBrowserSlice.actions;

const selectMoviesBrowserState = (state) => state.moviesBrowser;

export const selectMovies = (state) => selectMoviesBrowserState(state).data;
export const selectMovieBrowserStatus = (state) => selectMoviesBrowserState(state).status;

export default moviesBrowserSlice.reducer;
