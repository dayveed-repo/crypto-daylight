import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptoStats: null,
  cryptoCoins: null,
};

export const appSlice = createSlice({
  name: "cryptoApp",
  initialState,
  reducers: {
    assignCryptoStats: (state, action) => {
      state.cryptoStats = action.payload;
    },

    assignCryptoCoins: (state, action) => {
      state.cryptoCoins = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { assignCryptoStats, assignCryptoCoins } = appSlice.actions;

export default appSlice.reducer;
