import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cartslice';  // Make sure the path matches your structure

// Create store without persistence
export const store = configureStore({
  reducer: {
    cart: cartReducer,  // Use the simple cart reducer without persistence
  },
});
