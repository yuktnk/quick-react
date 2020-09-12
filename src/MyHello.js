import React, { Component } from 'react';
import './MyHello.css';
export default class MyHello extends Component {
  // プロパティ値を元に出力を生成
  render(){
    return <div>
            <h1 className="Red">挨拶</h1>
            <p>こんにちは、{this.props.name}さん！</p>
            <p>元気ですか？？</p>
          </div>;
  }
}