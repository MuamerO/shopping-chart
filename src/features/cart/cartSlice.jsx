import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem(`cartItems`)
    ? JSON.parse(localStorage.getItem(`cartItems`))
    : [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem(`cartItems`, JSON.stringify(state.cartItems));
    },

    removeItem: (state, action) => {
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
      localStorage.setItem(`cartItems`, JSON.stringify(state.cartItems));
    },
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem(`cartItems`, JSON.stringify(state.cartItems));
    },
    increaseAmount: (state, action) => {
      const itemID = action.payload;
      state.cartItems.map((item) => {
        if (item.id == itemID) {
          item.amount = item.amount + 1;
        }
      });
      localStorage.setItem(`cartItems`, JSON.stringify(state.cartItems));
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
      localStorage.setItem(`cartItems`, JSON.stringify(state.cartItems));
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
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
