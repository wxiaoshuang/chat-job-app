import React from 'react'
import Logo from '../../component/logo/logo'
import {Redirect} from 'react-router-dom'
import { WingBlank, WhiteSpace, InputItem, Button, Radio, List, Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import {register} from "../../redux/user.redux"
@connect(state => state.user, {register})
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            rePwd: '',
            isAllTrue: false,
            type: 'genius',
            isUserError: false,
            userErrorMsg: '',
            isPwdError: false,
            pwdErrorMsg: '',
            isRepwdError: false,
            rePwdErrorMsg: '',
        }
    }
    register() {
        debugger;
        let isAllTrue = !this.state.isUserError && !this.state.isPwdError && !this.state.isRepwdError
        if(isAllTrue) {
            console.log(this.props);
            this.props.register(this.state)
        }else {
            Toast.info('请按照要求填写注册信息')
        }
    }
    login() {
        this.props.history.push('/login')
    }
    handleChange(key,v) {
        this.setState({
            [key]:v
        });
        switch(key) {
            case 'user':
                let reg = /^[A-Za-z1-9]{2,20}$/
                if (reg.test(v)) {
                    this.setState({
                        isUserError: false,
                        userErrorMsg: ''
                    })
                } else {
                    this.setState({
                        isUserError: true,
                        userErrorMsg: '请输入2到20位的英文字母和数字的组合'
                    })
                }
                break
            case 'pwd':
                let reg1 = /^[A-Za-z0-9]{6,20}$/
                if (reg1.test(v)) {
                    this.setState({
                        isPwdError: false,
                        pwdErrorMsg: ''
                    })
                } else {
                    this.setState({
                        isPwdError: true,
                        pwdErrorMsg: '请输入6到20位的英文字母和数字的组合'
                    })
                }
                break
            case 'rePwd':
                let reg2 = /^[A-Za-z0-9]{6,20}$/
                if (reg2.test(v)) {
                    if(v !== this.state.pwd) {
                        this.setState({
                            isRepwdError: true,
                            rePwdErrorMsg: '两次输入的密码不一致，请重新输入'
                        })
                    } else {
                        this.setState({
                            isRepwdError: false,
                            rePwdErrorMsg: ''
                        })
                    }
                } else {
                    this.setState({
                        isRepwdError: true,
                        rePwdErrorMsg: '请输入6到20位的英文字母和数字的组合'
                    })
                break
            }
        }
    }
    onErrorClick(msg) {
        Toast.info(msg)
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (<div>
            {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
            <Logo></Logo>
            <WingBlank>
                <List>
                    <InputItem
                        onChange={(v) => this.handleChange('user',v)}
                        placeholder='请输入用户名'
                        error={this.state.isUserError}
                        onErrorClick={() => this.onErrorClick(this.state.userErrorMsg)}
                        value={this.state.user}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={(v) => this.handleChange('pwd',v)}
                        error={this.state.isPwdError}
                        placeholder='请输入密码'
                        onErrorClick={() => this.onErrorClick(this.state.pwdErrorMsg)}
                        value={this.state.pwd}
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={(v) => this.handleChange('rePwd',v)}
                        error={this.state.isRepwdError}
                        placeholder='请再次输入密码'
                        onErrorClick={() => this.onErrorClick(this.state.rePwdErrorMsg)}
                        value={this.state.rePwd}
                    >确认密码</InputItem>
                    <RadioItem checked={this.state.type === 'genius'} onChange={() => this.handleChange('type','genius')}>牛人</RadioItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type === 'boss'} onChange={() => this.handleChange('type','boss')}>Boss</RadioItem>   
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.register()}>注册</Button>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.login()}>登陆</Button>
                <WhiteSpace />


            </WingBlank>
        </div>)
    }
}
export default Login;