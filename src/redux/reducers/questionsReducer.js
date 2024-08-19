
import { ADD_QUESTION, SET_QUESTIONS } from '../actions/questionsActions';

const initialState = {
  questions: [],
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    default:
      return state;
  }
};

export default questionsReducer;