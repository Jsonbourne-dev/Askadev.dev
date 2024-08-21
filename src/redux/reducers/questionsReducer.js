import { SET_QUESTIONS, ADD_QUESTION, ADD_ANSWER, UPDATE_QUESTION_VIEWS } from '../actions/questionsActions';

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

    case ADD_ANSWER:
      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.DID === action.payload.did) {
            const updatedAnswers = question.answers ? [...question.answers, action.payload.answer] : [action.payload.answer];
            return { ...question, answers: updatedAnswers };
          }
          return question;
        }),
      };

    case UPDATE_QUESTION_VIEWS:
      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.DID === action.payload) {
            return { ...question, views: (question.views || 0) + 1 };
          }
          return question;
        }),
      };

    default:
      return state;
  }
};

export default questionsReducer;
