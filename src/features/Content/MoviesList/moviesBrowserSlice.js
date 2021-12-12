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
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} = moviesBrowserSlice.actions;

const selectMoviesBrowserState = state => state.moviesBrowser;

export const selectMovies = state => selectMoviesBrowserState(state).movies;
export const selectMovieStatus = state => selectMoviesBrowserState(state).status;

export default moviesBrowserSlice.reducer;