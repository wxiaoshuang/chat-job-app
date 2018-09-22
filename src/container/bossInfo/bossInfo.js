import React from 'react';
import {Redirect} from 'react-router-dom'
import { NavBar, TextareaItem ,InputItem, List, Button } from 'antd-mobile';
import AvatarSelector  from '../../component/avatarSelector/avatarSelector'
import { connect } from 'react-redux'
import {login} from "../../redux/user.redux"
@connect(state => state.user, {login})
class BossInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: '', // 头像
        }
    }
    selectAvatar(ele) {
        console.log('ele', ele);
        this.setState({
            icon: ele.icon
        })
    }
    render() {
        const gridHeader = this.state.icon
            ? (<div>
                <span>已选择头像: </span>
                <img style={{width:20}} src={this.state.icon} alt=""/>
            </div>)
            : '请选择头像'
        return (
            <div>
                <NavBar>这是boss详情页面</NavBar>
                <List renderHeader = {() => gridHeader}>
                    <AvatarSelector selectAvatar={(ele) => this.selectAvatar(ele)}></AvatarSelector>
                    <InputItem>公司名称</InputItem>
                    <InputItem>职位名称</InputItem>
                    <InputItem>公司简介</InputItem>
                    <TextareaItem 	rows={3}
                                     autoHeight
                                     title='职位要求'>
                    </TextareaItem>
                    <Button type='primary'>保存</Button>
                </List>

            </div>
           )
    }
}
export default BossInfo;