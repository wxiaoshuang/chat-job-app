import React, { Component } from 'react';
import {Button} from 'antd-mobile';
// 组件之间用props传递数据
class App extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: ['javascript', 'css', 'html']
    } ;
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  addSubject() {
    // 不能修改状态，而是返回新的状态
      this.setState({
        subject: [...this.state.subject, 'hello'+Date.now()]
      })
  }
  render() {
    const name = 'hello';
    console.log('render');
    return (<div>
      {/* 事件绑定，this引用的问题 */}
      <button onClick={()=>{this.addSubject()}}>添加学科</button>
      这是aPP,{name}
      <Button type="primary">antd-mobile的按钮</Button>
      <Child className={name}></Child>
      {this.state.subject.map(v => {
        return (<li key={v}>{v}</li>);
      })}
      </div>)
  }
}
class Child extends Component {
  componentWillMount() {
    console.log('child-componentWillMount');
  }
  componentDidMount() {
    console.log('child-componentDidMount');
  }
  render() {
    console.log('child-render');
    return <div>{this.props.className}</div>
  }
}
export default App;
