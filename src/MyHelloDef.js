import React, { Component } from 'react';
import propTypes from 'prop-types';
export default class MyHelloDef extends Component {
  // プロパティ値を元に出力を生成
  render(){
    return <div>
            <p>こんにちは、{this.props.name}さん！</p>
          </div>;
  }
}
//  型情報の定義
MyHelloDef.propTypes = {
  name: propTypes.string
};
//  既定値の定義
MyHelloDef.defaultProps = {
  name: '名無権衛門'
};