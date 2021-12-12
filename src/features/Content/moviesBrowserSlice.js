import { createSlice } from '@reduxjs/toolkit';

const moviesBrowserSlice = createSlice({
  name: "moviesBrowser",
  initialState: {
    movies: null,
    status: "initial",
  },
  reducers: {
    fetchMovies: () => ({
      status: "loading",
      movies: null,
    }),
    fetchMoviesSuccess: (_, { payload: movies }) => ({
      status: "success",
      movies,
    }),
    fetchMoviesError: () => ({
      status: "error",
      movies: null,
    }),
    fetchPeople: () => ({
      status: "loading",
      movies: null,
    }),
    fetchPeopleSuccess: (_, { payload: movies }) => ({
      status: "success",
      movies,
    }),
    fetchPeopleError: () => ({
      status: "error",
      movies: null,
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

const selectMoviesBrowserState = state => state.moviesBrowser;

export const selectMovies = state => selectMoviesBrowserState(state).movies;
export const selectPeople = state => selectMoviesBrowserState(state).people;
export const selectMovieStatus = state => selectMoviesBrowserState(state).status;

export default moviesBrowserSlice.reducer;