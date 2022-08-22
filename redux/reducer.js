import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptoStats: null,
  cryptoCoins: null,
  cryptoNews: null,
  isOpen: false,
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

    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, assignCryptoStats, assignCryptoCoins, getNews } =
  appSlice.actions;

export default appSlice.reducer;
