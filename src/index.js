import React            from 'react';
import ReactDOM         from 'react-dom';
import { Provider }     from 'react-redux';
import App              from './components/App';
import reducers         from './reducers'
import thunk            from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
