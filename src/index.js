import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
