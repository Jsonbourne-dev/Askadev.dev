import { v4 as uuidv4 } from 'uuid';

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER_MESSAGE = 'ADD_ANSWER_MESSAGE';
export const UPDATE_QUESTION_VIEWS = 'UPDATE_QUESTION_VIEWS';
export const UPDATE_QUESTION_VOTES = 'UPDATE_QUESTION_VOTES';
export const UPDATE_ANSWER_VOTES = 'UPDATE_ANSWER_VOTES'; 

// Action to set all questions (filtered by user UUID if necessary)
export const setQuestions = (questions, userUuid) => ({
    type: SET_QUESTIONS,
    payload: questions
        .filter(question => question.userUuid === userUuid)  // Filter by user UUID
        .map(question => ({
            ...question,
            answers: question.answers || [], 
            views: question.views || 0, 
            votes: question.votes || 0, 
        })),
});

// Action to add a new question (with user UUID)
export const addQuestion = (question, userUuid) => ({
    type: ADD_QUESTION,
    payload: { 
        ...question, 
        uuid: uuidv4(), 
        userUuid,  // Adding user UUID to the question
        answers: [], 
        views: 0, 
        votes: 0, 
    },
});

// Action to add an answer to a question (with user UUID)
export const addAnswerMessage = (questionUuid, user, answerMessage) => {
    return {
        type: ADD_ANSWER_MESSAGE,
        payload: {
            questionUuid,
            answer: {
                uuid: uuidv4(),
                user: String(user), 
                answerMessage: String(answerMessage), 
                votes: 0, 
                createdAt: new Date().toISOString(), 
            },
        },
    };
};

// Action to update the number of views on a question
export const updateQuestionViews = (uuid) => ({
    type: UPDATE_QUESTION_VIEWS,
    payload: { uuid },
});

// Action to update the number of votes on a question
export const updateQuestionVotes = (uuid, newVoteCount) => ({
    type: UPDATE_QUESTION_VOTES,
    payload: {
        uuid,
        votes: newVoteCount,
    },
});

// Action to update the number of votes on an answer
export const updateAnswerVotes = (questionUuid, answerUuid, newVoteCount) => ({
    type: UPDATE_ANSWER_VOTES,
    payload: {
        questionUuid,
        answerUuid,
        votes: newVoteCount,
    },
});
