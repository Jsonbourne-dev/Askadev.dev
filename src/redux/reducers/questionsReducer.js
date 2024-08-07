const initialState = {
    questions: [],
  };
  
  const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_QUESTIONS':
        return {
          ...state,
          questions: action.payload,
        };
      case 'ADD_ANSWER':
        return {
          ...state,
          questions: state.questions.map(question =>
            question.DID === action.payload.did
              ? { ...question, answers: [...question.answers, action.payload.answer] }
              : question
          ),
        };
      default:
        return state;
    }
  };
  
  export default questionsReducer;
  