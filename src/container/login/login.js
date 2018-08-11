import React from 'react';
import Logo from '../../component/logo/logo';
import { WingBlank, WhiteSpace,InputItem,Button } from 'antd-mobile';
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    register() {
        this.props.history.push('/register');
    }
    render() {
        return (<div>
            <Logo></Logo>
            <WingBlank>
            <WhiteSpace />
            <InputItem>用户名</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
            <WhiteSpace />
            <Button type="primary">登陆</Button>
            <WhiteSpace />
            <Button type="primary" onClick={()=> this.register()}>注册</Button>
            <WhiteSpace />
            </WingBlank>
        </div>)
    }
}
export default Login;