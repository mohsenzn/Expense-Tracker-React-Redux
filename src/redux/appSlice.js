import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    transactions: [],
  },
  reducers: {
    removeTransactions: (state, action) => {
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    },
    addTransactions: (state, action) => {
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    },
  },
});

export const { removeTransactions, addTransactions } = appSlice.actions;

export default appSlice.reducer;
