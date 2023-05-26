/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const programsSlice = createSlice({
  name: 'programs',
  initialState: {
    programs: [],
    isLoading: false,
    isDeleting: false,
    isEditing: false,
    isProgramClicked: false,
    clickedProgram: {
    },
    error: false,
    deleteError: false,
    editError: false,
  },
  reducers: {
    // reducers for the login page
    getProgramsStart: (state) => {
      state.isLoading = true;
    },
    getProgramsSuccess: (state, action) => {
      state.programs = action.payload;
      state.error = false;
      state.isLoading = false;
    },
    getProgramsFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    createProgramStart: (state) => {
      state.isLoading = true;
    },
    createProgramSuccess: (state) => {
      state.error = false;
      state.isLoading = false;
    },
    createProgramFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    deleteProgramStart: (state) => {
      state.isDeleting = true;
    },
    deleteProgramSuccess: (state) => {
      state.deleteError = false;
      state.isDeleting = false;
      state.isTaskClicked = false;
    },
    deleteProgramFailure: (state) => {
      state.isDeleting = false;
      state.deleteError = true;
    },
    editProgramStart: (state) => {
      state.isEditing = true;
    },
    editProgramSuccess: (state) => {
      state.editError = false;
      state.isEditing = false;
    },
    editProgramFailure: (state) => {
      state.isEditing = false;
      state.editError = true;
    },
    programInfoOpen: (state, action) => {
      state.isProgramClicked = true;
      state.clickedProgram = action.payload;
    },
    saveProgramList: (state, action) => {
      state.program = action.payload;
    },
    setProgram: (state, action) => {
      state.program = action.payload;
    },
    editTask: (state, action) => {
      state.clickedProgram = action.payload;
    },
  },
});

export default programsSlice.reducer;
export const {
  getProgramsStart,
  getProgramsSuccess,
  getProgramsFailure,
  createProgramStart,
  createProgramSuccess,
  createProgramFailure,
  deleteProgramStart,
  deleteProgramSuccess,
  deleteProgramFailure,
  editProgramStart,
  editProgramSuccess,
  editProgramFailure,
  programInfoOpen,
  saveProgramList,
  setProgram,
} = programsSlice.actions;
