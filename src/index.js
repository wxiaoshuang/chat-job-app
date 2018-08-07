import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {countReducers} from './store/index'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(countReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>), 
    document.getElementById('root'));
registerServiceWorker();
