import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice"; // Correct path to Cartslice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
