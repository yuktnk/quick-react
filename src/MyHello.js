import React, { Component } from 'react';
export default class MyHello extends Component {
  // プロパティ値を元に出力を生成
  render(){
    return <div>こんにちは、{this.props.name}さん！</div>;
  }
}