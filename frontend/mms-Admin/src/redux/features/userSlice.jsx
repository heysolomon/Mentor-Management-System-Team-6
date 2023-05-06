/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    // user response object is added here
    userInfo: null,
    // user profile id is added here
    userProfile: null,
    // for logging in to the application
    loggingIn: false,
    error: false,
    // for changing password in the settings part of the application
    changePassword: false,
    changePasswordError: false,
    // for creating user profile in the dashboard
    creatingProfile: false,
    creatingProfileError: false,
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
    createProfileStart: (state) => {
      state.creatingProfile = true;
    },
    createProfileSuccess: (state, action) => {
      state.userProfile = action.payload;
      state.creatingProfileError = false;
      state.creatingProfile = false;
    },
    createProfileFailure: (state) => {
      state.creatingProfile = false;
      state.creatingProfileError = true;
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
  createProfileStart,
  createProfileSuccess,
  createProfileFailure,
} = userSlice.actions;
