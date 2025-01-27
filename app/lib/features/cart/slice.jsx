import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = {
        ...action.payload, // Spread the product object
        id: nanoid(), // Add a unique ID for each cart item
      };
      state.cart.push(product);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== action.payload);
    },
    
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
