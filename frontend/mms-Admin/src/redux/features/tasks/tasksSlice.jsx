/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  newtaskOpen: false,
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
    openModalNew: (state) => {
      state.newtaskOpen = true;
    },
    closeModalNew: (state) => {
      state.newtaskOpen = false;
    },
  },
});

export const {
  openDeleteModal, closeDeleteModal,
  openModalNew, closeModalNew,
} = tasksSlice.actions;

export default tasksSlice.reducer;
