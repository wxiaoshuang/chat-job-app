import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {countReducers} from './store/index'
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(countReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    (<Provider store={store}>
    <BrowserRouter>
       <Route path='/' component={App}>
        <Route path='/about' component={About}></Route>
        <Route path='/info' component={Info}></Route>
       </Route>
    </BrowserRouter> 
    </Provider>), 
    document.getElementById('root'));
registerServiceWorker();
