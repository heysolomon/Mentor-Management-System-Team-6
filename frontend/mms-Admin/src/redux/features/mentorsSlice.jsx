/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const mentorsSlice = createSlice({
  name: 'mentors',
  initialState: {
    mentors: null,
    isLoading: false,
    isMentorClicked: false,
    clickedMentor: null,
    error: false,
  },
  reducers: {
    // reducers for the login page
    getMentorsStart: (state) => {
      state.isLoading = true;
    },
    getMentorsSuccess: (state, action) => {
      state.mentors = action.payload;
      state.error = false;
      state.isLoading = false;
    },
    getMentorsFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    mentorInfoOpen: (state, action) => {
      state.isMentorClicked = true;
      state.clickedMentor = action.payload;
    },
  },
});

export default mentorsSlice.reducer;
export const {
  getMentorsStart,
  getMentorsSuccess,
  getMentorsFailure,
  mentorInfoOpen,
} = mentorsSlice.actions;
