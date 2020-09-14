import React, { Component } from 'react';
export default class MyEvent extends Component {
  // 入力ボックス変更時にメッセージを出力
  show(suffix,e) {
    // 3. greetプロパティ、入力値に基づいて、メッセージを生成するメソッド
    console.log(`${this.props.greet}, ${e.target.value}${suffix}!!`);
  }
  constructor(props) {
    super(props)
    this.show = this.show.bind(this);
  }
  render() {
    return (
      <form>
        <label htmlFor="txtName">名前：</label>
        {/* 本当はidは一意じゃなきゃダメ。 */}

        {/* 1. 2. 入力内容変更時にshowメソッドを呼び出す */}
        <input id="txtName" type="text" onChange={this.show.bind(this,'さん')} />

        {/* コンストラクターでbind */}
        {/* < input id="txtName" type="text" onChange={this.show} /> */}

        {/* アロー関数 */}
        {/* < input id="txtName" type="text" onChange={(e)=>this.show(e)} /> */}
      </form>
    );
  }
}