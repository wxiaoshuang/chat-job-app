import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
// import { countReducers } from './store/index'
import reducers from './store/reducers';
import App from './App';
import './config';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import About from './About';
import Info from './Info';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={App}>
             </Route>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root'));
registerServiceWorker();
