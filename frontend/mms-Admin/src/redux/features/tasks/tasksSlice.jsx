/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    openDeleteModal: (state) => {
      state.isOpen = true;
    },
    closeDeleteModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDeleteModal, closeDeleteModal } = tasksSlice.actions;

export default tasksSlice.reducer;
