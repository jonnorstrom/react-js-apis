import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers/getUsers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Async from './middlewares/async';

import registerServiceWorker from './registerServiceWorker';

const storeWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider  store={storeWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
