import React from 'react';
import { Grid } from 'antd-mobile';
export default class AvatarSelector extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
            .split(',')
            .map(v=>({
                icon:require(`../../static/images/${v}.png`),
                text:v
            }))
        return (<div>
            <Grid data = {avatarList}  columnNum={5} onClick={(ele) => this.props.selectAvatar(ele)}></Grid>
        </div>)
    }

}