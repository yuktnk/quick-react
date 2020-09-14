import React, { Component } from 'react';
export default class MyPool extends Component {
  // ボタンクリック時にログ出力
  show(e) {
    console.log(e.type); //  結果：click・・・①
    setTimeout(()=>{
      console.log(e.type); // 結果：null・・・②
    }, 1000);
  }
  render() {
    return (
      <button type="button" onClick={this.show.bind(this)}>イベント情報</button>
    );
  }
}