import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { tasksReducer } from './containers/state';

const storedTasks = localStorage.getItem('tasks') || '[]';

const store = createStore(combineReducers({ tasks: tasksReducer }), {tasks: JSON.parse(storedTasks)});

store.subscribe(() => { 
  localStorage.setItem('tasks', JSON.stringify((store.getState() as any).tasks));
});

(window as any).store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
