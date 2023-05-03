/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    loggingIn: false,
    error: false,
    changePassword: false,
    changePasswordError: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loggingIn = true;
    },
    loginSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.error = false;
      state.loggingIn = false;
    },
    loginFailure: (state) => {
      state.loggingIn = false;
      state.error = true;
    },
    changePasswordStart: (state) => {
      state.changePassword = true;
    },
    changePasswordSuccess: (state) => {
      state.changePasswordError = false;
      state.changePassword = false;
    },
    changePasswordFailure: (state) => {
      state.changePassword = false;
      state.changePasswordError = true;
    },
  },
});

export default userSlice.reducer;
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  changePasswordStart,
  changePasswordSuccess,
  changePasswordFailure,
} = userSlice.actions;
