import React, { Component } from 'react';
export default class MyEvent extends Component {
  // 入力ボックス変更時にメッセージを出力
  show(e) {
    // 3. greetプロパティ、入力値に基づいて、メッセージを生成するメソッド
    console.log(`${this.props.greet}, ${e.target.value}!!`);
  }
  render() {
    return (
      <form>
        <label htmlFor="txtName">名前：</label>
        {/* 1. 2. 入力内容変更時にshowメソッドを呼び出す */}
        <input id="txtName" type="text" onChange={this.show.bind(this)} />
      </form>
    );
  }
}