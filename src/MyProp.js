import React, { Component } from 'react';
import propTypes from 'prop-types';
export class Menber {}
export default class MyProp extends Component {
  render(){
    console.log(this.props);
    return <p>結果はコンソールで確認</p>;
  }
}
MyProp.propTypes = {
  // 1. Menber型のプロパティ
  prop1: propTypes.instanceOf(Menber),
  // 2. 男、女、不明のどれか
  prop2: propTypes.oneOf(['男','女','不明']),
  // 3. 文字列、数値、真偽値のいずれか
  prop3: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.bool,
  ]),
  // 4. 数値型の配列
  prop4: propTypes.arrayOf(propTypes.number),
  // 5. name,age,sexプロパティを持つオブジェクト
  prop5 :propTypes.shape({
    name: propTypes.string.isRequired,
    age: propTypes.number,
    sex: propTypes.oneOf(['男', '女', '不明']),
  })
};