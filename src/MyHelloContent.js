import React, { Component } from 'react';
export default class MyHelloContent extends Component {
	// 描画する内容を定義する
  render(){
    return <div>こんにちは、{this.props.children}さん！</div>;
  }
}