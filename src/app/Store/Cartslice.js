import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Store cart items here
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = []; // Empty the cart
    },
  },
});

// Make sure clearCart is correctly exported
export const { addToCart, removeItem, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer; // Export the reducer
