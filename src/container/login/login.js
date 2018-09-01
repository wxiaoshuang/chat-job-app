import React from 'react';
import Logo from '../../component/logo/logo';
import {Redirect} from 'react-router-dom'
import { WingBlank, WhiteSpace,InputItem,Button } from 'antd-mobile';
import { connect } from 'react-redux'
import {login} from "../../redux/user.redux"
@connect(state => state.user, {login})
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: ''
        }
    }
    register() {
        this.props.history.push('/register');
    }
    handleLogin() {
        this.props.login(this.state)
    }
    handleChange(key,v) {
        this.setState({
            [key]:v
        })
    }
    render() {
        return (<div>
            {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
            <Logo></Logo>
            <WingBlank>
            <WhiteSpace />
            <InputItem  onChange={(v) => this.handleChange('user',v)}
                        placeholder='请输入用户名'>用户名</InputItem>
            <WhiteSpace />
            <InputItem onChange={(v) => this.handleChange('pwd',v)}>密码</InputItem>
            <WhiteSpace />
            <Button type="primary"  onClick={()=> this.handleLogin()}>登陆</Button>
            <WhiteSpace />
            <Button type="primary" onClick={()=> this.register()}>注册</Button>
            <WhiteSpace />
            </WingBlank>
        </div>)
    }
}
export default Login;