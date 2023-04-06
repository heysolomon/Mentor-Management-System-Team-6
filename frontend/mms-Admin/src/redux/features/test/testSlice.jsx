import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Pharmalink Team",
  count: 0,
};
const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increase: (state) => {
      state.count = state.count + 5;
    },
    decrease: (state) => {
      state.count = state.count - 5;
    },
  },
});

export const { increase, decrease } = testSlice.actions;

export default testSlice.reducer;
