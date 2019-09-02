import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './containers/App';
import songsReducer from './reducers/songs';
import notificationReducer from './reducers/notification';
import songsSaga from './sagas/songs';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  songs: songsReducer,
  notification: notificationReducer
});
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(songsSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);