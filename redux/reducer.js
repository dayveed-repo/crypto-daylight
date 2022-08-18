import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptoStats: null,
  cryptoCoins: null,
  cryptoNews: null,
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

    getNews: (state, action) => {
      state.cryptoNews = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { assignCryptoStats, assignCryptoCoins, getNews } =
  appSlice.actions;

export default appSlice.reducer;
