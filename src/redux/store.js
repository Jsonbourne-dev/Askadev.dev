import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import questionsReducer from './reducers/questionsReducer'; 
import userReducer from './reducers/userReducer'; 

const reducers = combineReducers({
  questions: questionsReducer,
  user: userReducer, 
});

const saveStateToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  try {
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state));
  } catch (error) {
    console.error('Could not save state', error);
  }
  return result;
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Could not load state', error);
    return undefined;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadStateFromLocalStorage();

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(saveStateToLocalStorage))
);

export default store;
