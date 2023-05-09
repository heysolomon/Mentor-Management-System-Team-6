/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const passwordResetSlice = createSlice({
  name: 'resetPassword',
  initialState: {
    userEmail: null,
    passwordResetToken: null,
    passwordReset: false,
    passwordResetError: false,
  },
  reducers: {
    // reducers for the password rest
    resetPasswordStart: (state) => {
      state.passwordResetError = false;
      state.passwordReset = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.passwordReset = false;
      state.passwordResetError = false;
      state.passwordResetToken = action.payload;
    },
    resetPasswordFailure: (state) => {
      state.passwordReset = false;
      state.passwordResetError = true;
      state.passwordResetToken = null;
      state.userEmail = null;
    },
    setEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

export default passwordResetSlice.reducer;
export const {
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
  setEmail,
} = passwordResetSlice.actions;
