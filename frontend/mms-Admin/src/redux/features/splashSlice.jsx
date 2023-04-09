/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoaded: false,
};
const splashSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    stopLoader: (state) => {
      state.isLoaded = false;
    },
  },
});

export const { stopLoader } = splashSlice.actions;

export default splashSlice.reducer;
