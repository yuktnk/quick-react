import React, { Component } from 'react';
export default class MyPool extends Component {
  // ボタンクリック時にログ出力
  show(e) {
    e.persist();
    console.log(e.type); //  結果：click
    setTimeout(()=>{
      console.log(e.type); // 結果：null
    }, 1000);
  }
  render() {
    return (
      <button type="button" onClick={this.show.bind(this)}>イベント情報</button>
    );
  }
}