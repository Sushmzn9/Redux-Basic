import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
const store = configureStore({
  reducer: {
    counterData: CounterReducer,
  },
});
export default store;
