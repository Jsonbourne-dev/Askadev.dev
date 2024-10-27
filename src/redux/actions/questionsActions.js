import { v4 as uuidv4 } from 'uuid';

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
  payload: { ...question, uuid: uuidv4() }, 
});

export const addAnswer = (uuid, answer) => ({ 
  type: ADD_ANSWER,
  payload: { uuid, answer }, 
});

export const updateQuestionViews = (uuid) => ({ 
  type: UPDATE_QUESTION_VIEWS,
  payload: { uuid }, 
});
