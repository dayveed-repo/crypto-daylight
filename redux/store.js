import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import appReducer from "./reducer";

export const store = configureStore({
  reducer: {
    appReducer,
  },
});

const makeStore = () => store;

const wrapper = createWrapper(makeStore);
export default wrapper;
