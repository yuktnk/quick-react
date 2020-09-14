import React, { Component } from 'react';
import MyChild from './MyChild';

export default class MyParent extends Component {
  constructor(props) {
    super(props);
    // Stateを初期化
    this.state = {
      data: null
    };
  }
  // 自身のStateを更新するupdateメソッド・・・②
  update(state) {
    this.setState(state);
  }
  render() {
    return (
      <React.Fragment>
        <p>MyParent: {this.state.data}</p>
        {/* updateメソッドを子コンポーネントに引き渡す。・・・① */}
        <MyChild onUpdate={this.update.bind(this)} />
      </React.Fragment>
    );
  }
}