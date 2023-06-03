/* eslint-disable no-restricted-syntax */
/* eslint-disable no-case-declarations */

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

/* eslint-disable no-param-reassign */
const criteriaSlice = createSlice({
  name: 'criteria',
  initialState: {
    criteriaQuestions: [],
    initialCriteriaQuestions: {
      multipleInputQuestions: [],
    },
  },
  reducers: {
    addQ: (state, action) => {
      const newQuestion = {
        id: uuidv4(),
        ...action.payload,
      };

      state.criteriaQuestions.push(newQuestion);

      switch (newQuestion.type) {
        case 'singleInput':
          const obj = {
            [`question_${newQuestion.id}`]: newQuestion.question,
            [`answer_${newQuestion.id}`]: '',
          };
          state.initialCriteriaQuestions = {
            ...obj,
            ...state.initialCriteriaQuestions,
          };
          break;
        case 'multipleInput':
          state.initialCriteriaQuestions.multipleInputQuestions.push(
            ...newQuestion.questions.map((x) => ({
              id: x.id,
              question: x.question,
              input: x.input,
              answer1: '',
              answer2: '',
              answer3: '',
            })),
          );
          break;

        default:
          break;
      }

      return state;
    },

    prepare: (payload) => ({
 payload,
    }),
  },
});

export default criteriaSlice.reducer;
export const { addQ } = criteriaSlice.actions;
