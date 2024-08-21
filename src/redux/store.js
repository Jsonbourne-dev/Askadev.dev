import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import questionsReducer from './reducers/questionsReducer';

const reducers = combineReducers({
  questions: questionsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()))

export default store;