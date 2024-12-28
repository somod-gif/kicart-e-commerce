import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  items: [], // Wrap the cart items in 'items' field
};

// Cart slice definition
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingProduct = state.items.find(item => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
  },
});

// Export the actions from the slice
export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
