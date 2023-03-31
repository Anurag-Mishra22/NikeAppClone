import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./ProductSlice";

export const store = configureStore({
  //reducer are function that update our state
  reducer: {
    products: productsSlice.reducer,
  },
});
