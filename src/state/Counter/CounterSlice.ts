import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {state.value++;},
    decrement: (state) => {state.value--;},
    increment2X: (state) => {state.value += 2;},
  },
});

export const {increment, decrement, increment2X} = counterSlice.actions;
export default counterSlice.reducer;