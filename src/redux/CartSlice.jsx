import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    removeItem(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);

      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;

      state.items = state.items.filter((i) => i.id !== id);
    },

    updateQuantity(state, action) {
      const { id, value } = action.payload;
      const item = state.items.find((i) => i.id === id);

      item.quantity += value;
      state.totalQuantity += value;
      state.totalPrice += item.price * value;

      if (item.quantity === 0) {
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;