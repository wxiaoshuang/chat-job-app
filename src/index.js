import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
// import { countReducers } from './store/index'
import reducers from './store/reducers';
import App from './App';
import './config'; //拦截器
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './container/login/login';
import Register from './container/register/register';
import Auth from './component/auth/auth';
require('./style/index.css');
const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <Auth ></Auth>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root'));
registerServiceWorker();
