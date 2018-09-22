import React from 'react';
import {Redirect} from 'react-router-dom'
import { NavBar, TextareaItem ,InputItem, List, Button, Toast } from 'antd-mobile';
import AvatarSelector  from '../../component/avatarSelector/avatarSelector'
import { connect } from 'react-redux'
import {updateUserInfo} from "../../redux/user.redux"
@connect(state => state.user, {updateUserInfo})
class BossInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: '',  // 头像
            company: '',
            jobTitle: '',
            money: ''
        }
    }
    selectAvatar(ele) {
        console.log('ele', ele);
        this.setState({
            icon: ele.icon
        })
    }
    handleChange(key,v) {
        this.setState({
            [key]:v
        })
    }
    handelSave() {
        // 信息必须填写完整
        let isCompleted = Object.values(this.state).every(v => v);
        if(!isCompleted) {
            Toast.info('请将信息填写完整!!!', 2)
        } else {
            debugger;
            this.props.updateUserInfo(this.state)
        }
    }
    render() {
        const gridHeader = this.state.icon
            ? (<div>
                <span>已选择头像: </span>
                <img style={{width:20}} src={this.state.icon} alt=""/>
            </div>)
            : '请选择头像'
        const currPath = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        return (
            <div>
                {redirectTo && redirectTo!== currPath?<Redirect to={this.props.redirectTo}></Redirect>:null}
                <NavBar>这是boss详情页面</NavBar>
                <List renderHeader = {() => gridHeader}>
                    <AvatarSelector selectAvatar={(ele) => this.selectAvatar(ele)}></AvatarSelector>
                    <InputItem onChange={(v) => {this.handleChange('company', v)}}>公司名称</InputItem>
                    <InputItem onChange={(v) => {this.handleChange('jobTitle', v)}}>职位名称</InputItem>
                    <InputItem onChange={(v) => {this.handleChange('money', v)}}>职位薪资</InputItem>
                    <TextareaItem 	rows={3}
                                     autoHeight
                                     title='职位要求'
                                     onChange={(v) => {this.handleChange('desc', v)}}>
                    </TextareaItem>
                    <Button type='primary' onClick={() => this.handelSave()}>保存</Button>
                </List>

            </div>
           )
    }
}
export default BossInfo;