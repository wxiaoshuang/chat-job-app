import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
// import { countReducers } from './store/index'
import reducers from './redux/reducers';
import BossInfo from './container/bossInfo/bossInfo';
import './config'; //拦截器
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './container/login/login';
import Register from './container/register/register';
import Auth from './component/auth/auth';
require('./style/index.css'); // 引入全局样式
const store = createStore(reducers, compose(applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f)); // 开启浏览器插件
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <Auth></Auth>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root'));
registerServiceWorker();
