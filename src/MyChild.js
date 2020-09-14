import React, { Component } from 'react';

export default class MyChild extends Component {
  constructor(props) {
    super(props);
    // stateを初期化
    this.state = {
      data: 'child data'
    };
    // 親コンポーネントのupdateメソッドを呼び出す
    this.props.onUpdate(this.state);
  }
  render() {
    return (
      <p>MyChild: {this.state.data}</p>
    );
  }
}
