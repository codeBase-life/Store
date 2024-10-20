import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import sellerReducer from "./Seller";

const store = configureStore({
  reducer: {
    cartSlice,
    Seller: sellerReducer,
  },
});

export default store;
