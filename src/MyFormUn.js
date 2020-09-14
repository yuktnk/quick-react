import React, { Component } from 'react';
export default class MyForm extends Component {
  constructor(props) {
    super(props);
    // React要素に紐付ける参照を準備
    this.name = React.createRef();
    this.email = React.createRef();
  }


  // 参照経由で入力値を取得する
  show() {
    console.log(`name: ${this.name.current.value}`);
    console.log(`email: ${this.email.current.value}`);
  }

  // フォームを描画
  render() {
    return (
      <form>
        {/* 準備した参照を個々の要素に紐付け */}
        <div>
          <label htmlFor="name">名前</label>
          <input id="name" name="name" type="text" 
          ref={this.name} defaultValue="山田次郎" />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" name="email" type="mail" 
          ref={this.email} defaultValue="jyamada@example.com" />
        </div>
        <div>
          <button type="button" onClick={this.show.bind(this)}>送信</button>
        </div>
      </form>
    );
  }
}