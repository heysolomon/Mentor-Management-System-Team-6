/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formValues: null,
};

const formSlice = createSlice({
  name: 'formikValues',
  initialState,
  reducers: {
    setValues: (state, action) => {
      state.formValues = action.payload;
    },
    pushOptions: (state, action) => {
      state.formValues.values.options.push(action.payload);
    },
  },
});

export const { setValues, pushOptions } = formSlice.actions;

export default formSlice.reducer;
