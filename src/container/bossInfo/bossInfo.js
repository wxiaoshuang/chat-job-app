import React from 'react';
import {Redirect} from 'react-router-dom'
import { WingBlank, WhiteSpace,InputItem,Button } from 'antd-mobile';
import { connect } from 'react-redux'
import {login} from "../../redux/user.redux"
@connect(state => state.user, {login})
class BossInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            type: ''
        }
    }
    render() {
        return (<div>这是boss详情页面</div>)
    }
}
export default BossInfo;