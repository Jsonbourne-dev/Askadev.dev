export const setQuestions = (questions) => {
    console.log('Action: SET_QUESTIONS', { questions });
    return {
      type: 'SET_QUESTIONS',
      payload: questions,
    };
  };
  
  export const addAnswer = (did, answer) => {
    console.log('Action: ADD_ANSWER', { did, answer });
    return {
      type: 'ADD_ANSWER',
      payload: { did, answer },
    };
  };