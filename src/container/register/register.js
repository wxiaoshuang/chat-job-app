import React from 'react';
import Logo from '../../component/logo/logo';
import { WingBlank, WhiteSpace, InputItem, Button, Radio, List } from 'antd-mobile';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'genius'
        }
    }
    register() {
        console.log('注册');
    }
    login() {
        this.props.history.push('/login');
    }
    // 角色是内部的状态
    selectRole(type) {
        this.setState = {
            type: type
        };
    }
    render() {
        const RadioItem = Radio.RadioItem;
        return (<div>
            <Logo></Logo>
            <WingBlank>
                <List>
                    <InputItem>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <InputItem>确认密码</InputItem>

                    <RadioItem checked={this.state.type === 'genius'} onChange={() => this.selectRole('genius')}>牛人</RadioItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type === 'boss'} onChange={() => this.selectRole('boss')}>Boss</RadioItem>   
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.login()}>登陆</Button>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.register()}>注册</Button>
                <WhiteSpace />


            </WingBlank>
        </div>)
    }
}
export default Login;