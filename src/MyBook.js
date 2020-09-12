import React, { Component } from 'react';
// 子コンポーネントをインポートする
import MyCover from './MyCover';
export default class MyBook extends Component {
  // 描画する内容を定義する
  render(){
    return(
      <div>
        {/* MyCoverコンポーネントを呼び出す */}
        <MyCover isbn={this.props.info.isbn} title={this.props.info.title} />
        <ul>
          <li>書名：{this.props.info.title}</li>
          <li>価格：{this.props.info.price}</li>
          <li>出版社：{this.props.info.published}</li>
        </ul>
      </div>
    );
  }
}