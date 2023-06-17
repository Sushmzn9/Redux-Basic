import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },

  reducers: {
    handleOnIncrease: (state) => {
      state.counter = state.counter + 1;
    },
    handleOnDecrease: (state) => {
      state.counter = state.counter - 1;
    },
    handleOnTwice: (state) => {
      state.counter = state.counter + 2;
    },
  },
});

const { reducer, actions } = CounterSlice;
export const { handleOnIncrease, handleOnDecrease, handleOnTwice } = actions;
export default reducer;
