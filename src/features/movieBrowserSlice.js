import { createSlice } from '@reduxjs/toolkit';

const movieBrowserSlice = createSlice({
  name: "movieBrowser",
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
} = movieBrowserSlice.actions;

const selectMovieBrowserState = state => state.movieBrowser;

export const selectMovies = state => selectMovieBrowserState(state).movies;
export const selectMoviesStatus = state => selectMovieBrowserState(state).status;

export default movieBrowserSlice.reducer;