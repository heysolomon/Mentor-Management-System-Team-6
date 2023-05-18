/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    // user response object is added here
    userInfo: null,
    // user profile id is added here
    userProfile: null,

    profilePicture: null,

    uploadingProfilePicture: false,
    uploadingProfilePictureError: false,
    // for logging in to the application
    loggingIn: false,
    error: false,
    // for changing password in the settings part of the application
    changePassword: false,
    changePasswordError: false,

    // for creating user profile in the dashboard
    creatingProfile: false,
    creatingProfileError: false,

    // getting the user profile
    getProfile: false,
    getProfileError: false,
  },
  reducers: {
    // reducers for the login page
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
    // reducers for the settings change password
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
    // creating the user profile
    createProfileStart: (state) => {
      state.creatingProfile = true;
    },
    createProfileSuccess: (state) => {
      state.creatingProfileError = false;
      state.creatingProfile = false;
    },
    createProfileFailure: (state) => {
      state.creatingProfile = false;
      state.creatingProfileError = true;
    },

    // get the user profiles
    getProfileStart: (state) => {
      state.getProfile = true;
    },
    getProfileSuccess: (state, action) => {
      state.userProfile = action.payload;
      state.getProfileError = false;
      state.getProfile = false;
    },
    getProfileFailure: (state) => {
      state.getProfile = false;
      state.userProfile = null;
      state.getProfileError = true;
    },
    // uploading profile picture
    uploadProfilePictureStart: (state) => {
      state.uploadingProfilePicture = true;
    },
    uploadProfilePicture: (state) => {
      state.uploadingProfilePictureError = false;
      state.uploadingProfilePicture = false;
    },
    uploadProfilePictureSuccess: (state, action) => {
      state.profilePicture = action.payload;
      state.uploadingProfilePicture = false;
      state.uploadingProfilePictureError = false;
    },
    uploadProfilePictureFailure: (state) => {
      state.uploadingProfilePicture = false;
      state.uploadingProfilePictureError = true;
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
  getProfileStart,
  getProfileSuccess,
  getProfileFailure,
  uploadProfilePicture,
  uploadProfilePictureStart,
  uploadProfilePictureFailure,
  uploadProfilePictureSuccess,
} = userSlice.actions;
