import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import { Link, Route,Redirect } from 'react-router-dom';
import About from './About';
import Info from './Info';
// 组件之间用props传递数据
import { addCount, removeCount, addCountAsync } from './redux/counter';
import {getUserData} from './redux/auth';
// import axios from 'axios';
@connect(state => state.auth, { addCount, removeCount, addCountAsync, getUserData })
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     subject: ['javascript', 'css', 'html']
  //   };
  // }
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    console.log(this.props);
    return (<div>
      <div>用户名是{this.props.name}。年龄是{this.props.age}</div>
      <Link to='/about'>关于</Link>
      <Link to='/info'>信息</Link>
      {this.props.num}
      {/* <Button type='primary' onClick={this.props.}>登录</Button> */}
      <Route path='/about' component={About}></Route>
      <Route path='/info' component={Info}></Route>
    </div>)
  }
}
export default App;
