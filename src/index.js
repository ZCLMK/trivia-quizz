import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import store from './store';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk';
import categories from './store/reducers/categories';
import quizInfo from './store/reducers/quizInfo';

const rootReducer = combineReducers({ categories: categories, quizInfo: quizInfo })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
ReactDOM.render(
    < Provider store={store} >
        <App />
    </ Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
