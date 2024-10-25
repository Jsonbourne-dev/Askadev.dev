import React from 'react';
import ReactDOM from 'react-dom';
import RouterPage from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <RouterPage />
  </Provider>,
  document.getElementById('root')
);
