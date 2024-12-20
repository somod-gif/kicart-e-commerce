import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [], // Initial state: empty favourites list
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      // Avoid duplicates
      const exists = state.favourites.some(item => item.id === action.payload.id);
      if (!exists) {
        state.favourites.push(action.payload);
      }
    },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
