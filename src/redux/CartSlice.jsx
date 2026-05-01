import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    increaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      item.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= item.price;

      if (item.quantity === 0) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },

    removeItem(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      state.items = state.items.filter((i) => i.id !== action.payload);
    }
  }
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem
} = cartSlice.actions;

export default cartSlice.reducer;