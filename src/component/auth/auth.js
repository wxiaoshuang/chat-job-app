import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {loadUserData, errorMsg} from "../../redux/user.redux"
import {connect} from 'react-redux'
// Auth本身并不是一个路由组件,利用withRouter装饰后，将路由对象注入组件的props中
@withRouter
@connect (
    null, {loadUserData, errorMsg}
)
class Auth extends React.Component {
    constructor(props) {
        super(props);
    }
    // 获取用户信息
    // 是否登陆,
    componentDidMount() {

        // 如果本身访问的是登陆或者注册页面，那么不需要再获取用户信息来跳路由，
        // 这两个页面有自己的处理规则
        const list = ['/login', '/register'];
        const presentUrl = this.props.location.pathname;
        if (list.indexOf(presentUrl) > -1) {
            return null;
        }
        this.getUserInfo();
    }
    render() {
        return null;
    }
    // dispatch action更新state
    getUserInfo() {
        axios.get('/user/info').then(r => {
            if (r.data.code === 0) {
                console.log('auth', r.data)
                // 在redux存储用户的信息
                this.props.loadUserData(r.data.data)
            } else {
                // 无用户信息，如果是非登陆页，那么就需要跳转到登陆页
                this.props.history.push('/login')
            }
        })
    }
}
export default Auth