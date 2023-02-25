import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    increaseAmount: (state, action) => {
      const itemID = action.payload;
      state.cartItems.map((item) => {
        if (item.id == itemID) {
          item.amount = item.amount + 1;
        }
      });
    },
    decreseAmount: (state, action) => {
      const itemID = action.payload;
      state.cartItems.map((item) => {
        if (item.id == itemID) {
          if (item.amount == 1) {
            state.cartItems = state.cartItems.filter(
              (item) => item.id !== itemID
            );
          } else item.amount = item.amount - 1;
        }
      });
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.amount;
      });

      state.total = total;
    },
  },
});

export const {
  addItem,
  increaseAmount,
  decreseAmount,
  removeItem,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
