import { 
    SET_QUESTIONS, 
    ADD_QUESTION, 
    ADD_ANSWER_MESSAGE, 
    UPDATE_QUESTION_VIEWS, 
    UPDATE_QUESTION_VOTES, 
    UPDATE_ANSWER_VOTES 
} from '../actions/questionsActions';

const initialState = {
    questions: [],
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                ...state,
                questions: action.payload.map(question => ({
                    ...question,
                    answers: question.answers || [], 
                    views: question.views || 0,
                    votes: question.votes || 0, 
                })),
            };

        case ADD_QUESTION:
            return {
                ...state,
                questions: [
                    ...state.questions, 
                    { 
                        ...action.payload, 
                        answers: [],
                        views: 0, 
                        votes: 0, 
                    }
                ],
            };

        case ADD_ANSWER_MESSAGE:
            return {
                ...state,
                questions: state.questions.map((question) => 
                    question.uuid === action.payload.questionUuid
                        ? { 
                            ...question, 
                            answers: [...(question.answers || []), action.payload.answer] 
                          }
                        : question
                ),
            };

        case UPDATE_QUESTION_VIEWS:
            return {
                ...state,
                questions: state.questions.map((question) =>
                    question.uuid === action.payload.uuid
                        ? { ...question, views: (question.views || 0) + 1 } 
                        : question
                ),
            };

        case UPDATE_QUESTION_VOTES:
            return {
                ...state,
                questions: state.questions.map((question) =>
                    question.uuid === action.payload.uuid
                        ? { ...question, votes: action.payload.votes }
                        : question
                ),
            };

        case UPDATE_ANSWER_VOTES:  
            return {
                ...state,
                questions: state.questions.map((question) =>
                    question.uuid === action.payload.questionUuid
                        ? {
                            ...question,
                            answers: question.answers.map(answer =>
                                answer.uuid === action.payload.answerUuid
                                    ? { ...answer, votes: action.payload.votes } 
                                    : answer
                            ),
                        }
                        : question
                ),
            };

        default:
            return state;
    }
};

export default questionsReducer;
