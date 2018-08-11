import React from 'react';
import { readdirSync } from 'fs';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// 利用withRouter装饰后，将路由信息注入组件中
@withRouter
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
        axios.get('/user/info').then(r => {
            // 有登陆信息
            if (r.data.code === 0) {

            } else {
                // 无登陆信息，如果是非登陆页，那么久需要跳转到登陆页
                this.props.history.push('/login')
            }
            console.log(r.data);
            console.log(this.props);
        })
    }
    render() {
        return null;
    }
}
export default Auth;