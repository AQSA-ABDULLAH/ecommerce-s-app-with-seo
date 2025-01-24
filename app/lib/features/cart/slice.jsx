import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cart = {
        id: nanoid(),
        text: action.payload,
      };
      state.cart.push(cart)
    },
    removeFormCart: (state, action) => {
        state.cart = state.cart.filter((cart) => 
        cart.id !== action.payload)
    }
  },
});

export const {addToCart, removeFormCart} = cartSlice.actions;

export default cartSlice.reducer;