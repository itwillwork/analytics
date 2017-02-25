import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux'

import './main.css';
import "babel-polyfill";
import reducer from './redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);