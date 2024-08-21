export const SET_QUESTIONS = 'SET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';
export const UPDATE_QUESTION_VIEWS = 'UPDATE_QUESTION_VIEWS';

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  payload: questions,
});

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: question,
});

export const addAnswer = (did, answer) => ({
  type: ADD_ANSWER,
  payload: { did, answer },
});

export const updateQuestionViews = (did) => ({
  type: UPDATE_QUESTION_VIEWS,
  payload: did,
});
