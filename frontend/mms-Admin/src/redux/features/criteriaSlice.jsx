/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const criteriaSlice = createSlice({
  name: 'criteria',
  initialState: {
    criteriaQuestions: [],
    initialCriteriaQuestions: {
      multipleInputQuestions: [],
    },
  },
  reducers: {
    addQ(state, action) {
      const newQuestion = {
        id: uuidv4(),
        ...action.payload,
      };

      // Create a new draft state
      const draftState = {
        ...state,
      };

      // Update criteriaQuestions array
      draftState.criteriaQuestions.push(newQuestion);
      const multipleQuestions = draftState.initialCriteriaQuestions.multipleInputQuestions;

      // Update initialCriteriaQuestions object based on question type
      if (newQuestion.type === 'singleInput') {
        draftState.initialCriteriaQuestions[`question_${newQuestion.id}`] = newQuestion.question;
        draftState.initialCriteriaQuestions[`answer_${newQuestion.id}`] = '';
      }

      if (newQuestion.type === 'multipleInput') {
        newQuestion.questions.forEach((x) => {
          const question = {
            id: x.id,
            question: x.question,
            input: x.input,
            firstAnswer: '',
            secondAnswer: '',
            thirdAnswer: '',
          };
          multipleQuestions.push(question);
        });
      }

      // Do not return anything
    },
  },
});

export default criteriaSlice.reducer;
export const { addQ } = criteriaSlice.actions;
