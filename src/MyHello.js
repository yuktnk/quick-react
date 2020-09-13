import React, { Component } from 'react';
import './MyHello.css';
import propTypes from 'prop-types';
export default class MyHello extends Component {
  // プロパティ値を元に出力を生成
  render(){
    return <div>
            <p>こんにちは、{this.props.name}さん！</p>
          </div>;
  }
}
MyHello.propTypes = {
  name: propTypes.string.isRequired
};