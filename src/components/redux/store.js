import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./Counterslice";

export const store = configureStore({
  reducer: {
    //reducer should be in a key value pair
    counterReducer: Counterslice,
  },
});
