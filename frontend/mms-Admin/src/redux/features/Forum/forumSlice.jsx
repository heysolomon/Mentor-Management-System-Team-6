/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    newTopicModal: (state) => {
      state.isOpen = true;
    },
    closeNewTopicModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { newTopicModal, closeNewTopicModal } = forumSlice.actions;

export default forumSlice.reducer;
