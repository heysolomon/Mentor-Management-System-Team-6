/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const criteriaSlice = createSlice({
  name: 'criteria',
  initialState: {
    criteriaQuestions: [],
  },
  reducers: {
    addQ: (state, action) => {
      const newQuestion = {
        id: uuidv4(),
        ...action.payload,
      };
      state.criteriaQuestions.push(newQuestion);
    },
  },
});

export default criteriaSlice.reducer;
export const { addQ } = criteriaSlice.actions;
