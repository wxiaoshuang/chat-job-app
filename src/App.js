import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
// 组件之间用props传递数据
import { addCount, removeCount, addCountAsync } from './store/index';
@connect(state => {return {num: state }}, { addCount, removeCount, addCountAsync })
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: ['javascript', 'css', 'html']
    };
  }
  render() {
    return (<div>
      <Button type="primary" onClick={this.props.addCount}>add</Button>
      <br/>
      <Button type="primary" onClick={this.props.removeCount}>remove</Button>
      <Button type="primary" onClick={this.props.addCountAsync}>addAsync</Button>
     数量是{this.props.num}
    </div>)
  }
}
export default App;
