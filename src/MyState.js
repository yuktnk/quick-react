import React, { Component } from 'react';
export default class MyState extends Component {
  constructor(props) {
    // Dateの初期値を設定する
    super(props);
    this.state = {
      current: new Date()
    };
    // 1000ミリ秒おきに値Stateを更新
    setInterval(()=>{
      this.setState({
        current: new Date()
      })
    }, 1000);
  }
  render() {
    return (
      // currentの値をビューに反映
      <div>
        現在時刻は、{this.state.current.toLocaleString()}です。
      </div>
    )
  }
}