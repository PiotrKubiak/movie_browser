import { createSlice } from '@reduxjs/toolkit';

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: null,
    status: "initial",
  },
  reducers: {
    fetchGenres: () => ({
      status: "loading",
      genres: null,
    }),
    fetchGenresSuccess: (_, { payload: genres }) => ({
      status: "success",
      genres,
    }),
    fetchGenresError: () => ({
      status: "error",
      genres: null,
    }),
  },
});

export const {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} = genresSlice.actions;

const selectGenresState = state => state.genres;

export const selectGenres = state => selectGenresState(state).genres;
export const selectGenresStatus = state => selectGenresState(state).status;

export default genresSlice.reducer;