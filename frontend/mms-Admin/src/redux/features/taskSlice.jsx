/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    task: [],
    isLoading: false,
    isDeleting: false,
    isTaskClicked: false,
    clickedTask: null,
    error: false,
    deleteError: false,
  },
  reducers: {
    // reducers for the login page
    getTaskStart: (state) => {
      state.isLoading = true;
    },
    getTaskSuccess: (state, action) => {
      state.task = action.payload;
      state.error = false;
      state.isLoading = false;
    },
    getTaskFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    createTaskStart: (state) => {
      state.isLoading = true;
    },
    createTaskSuccess: (state) => {
      state.error = false;
      state.isLoading = false;
    },
    createTaskFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    deleteTaskStart: (state) => {
      state.isDeleting = true;
    },
    deleteTaskSuccess: (state) => {
      state.deleteError = false;
      state.isDeleting = false;
    },
    deleteTaskFailure: (state) => {
      state.isDeleting = false;
      state.deleteError = true;
    },
    taskInfoOpen: (state, action) => {
      state.isTaskClicked = true;
      state.clickedTask = action.payload;
    },
    saveTaskList: (state, action) => {
      state.task = action.payload;
    },
    setTask: (state, action) => {
      state.task = action.payload;
    },
  },
});

export default taskSlice.reducer;
export const {
  getTaskStart,
  getTaskSuccess,
  getTaskFailure,
  createTaskStart,
  createTaskSuccess,
  createTaskFailure,
  taskInfoOpen,
  saveTaskList,
  setTask,
  deleteTaskStart,
  deleteTaskSuccess,
  deleteTaskFailure,
} = taskSlice.actions;
