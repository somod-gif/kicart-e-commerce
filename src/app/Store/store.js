import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Ensure you import storage correctly
import cartReducer from './Cartslice'; // Adjust if needed to match your file path

// Persist configuration for cart
const persistConfig = {
  key: 'cart', // Key for persistence storage
  storage, // Use localStorage for storage
};

// Apply persistReducer to cart slice
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Create store with persisted reducer
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer, // Use the persisted reducer
  },
});

// Create a persistor to manage the persistence state
export const persistor = persistStore(store);
