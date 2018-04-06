import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './containers/Main/Main';
import { HashRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './containers/Drag/rootReducer';


const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render((
  <HashRouter>
  <Provider store={store}>
    <Main />
    </Provider>
  </HashRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();
