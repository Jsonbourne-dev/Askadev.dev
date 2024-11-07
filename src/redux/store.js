import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import questionsReducer from './reducers/questionsReducer';
import userReducer from './reducers/userReducer';
import axios from 'axios';

const SET_QUESTIONS = 'SET_QUESTIONS';
const INIT_STORE = 'INIT_STORE';

const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  payload: questions,
});

const apiMiddleware = (store) => (next) => async (action) => {
  if (action.type === INIT_STORE) {
    try {
      const response = await axios.get('http://localhost:5000/api/questions');
      store.dispatch(setQuestions(response.data));
      console.log('Fetched questions successfully:', response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  }
  
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  questions: questionsReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(apiMiddleware))
);

const fetchQuestionsPeriodically = () => {
  store.dispatch({ type: INIT_STORE });
  setInterval(() => {
    store.dispatch({ type: INIT_STORE });
  }, 10000); 
};

fetchQuestionsPeriodically();

export default store;
