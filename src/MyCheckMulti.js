import React, { Component } from 'react';

export default class MyCheckMulti extends Component {
  constructor(props) {
    super(props);
    // Stateを初期化
    this.state = {
      fruit: ['apple', 'melon'],
    };
    this.handleChangeMulti = this.handleChangeMulti.bind(this);
    this.show = this.show.bind(this);
  }
  // チェックボックス変更時にチェック項目をStateに反映する
  handleChangeMulti(e) {
    const fs = this.state.fruit;
    // チェック時は追加、非チェック時は削除
    if (e.target.checked) {
      fs.push(e.target.value);
    } else {
      fs.splice(fs.indexOf(e.target.value),1);
    }
    this.setState({
      [e.target.name]: fs
    });
  }
  // 送信ボタンクリック時にチェック状態をログ出力
  show() {
    console.log(`好きな果物：${this.state.fruit}`);
  }
  render() {
    // チェックボックスのリストを生成
    return (
      <form>
        <fieldset>
          <legend>好きな果物：</legend>
          {/* チェック状態を反映 */}
          <label htmlFor="fruit_apple">りんご</label>
          <input id="fruit_apple" name="fruit" type="checkbox" value="apple"
          checked={this.state.fruit.includes('apple')}
          onChange={this.handleChangeMulti} />
          <br />
          <label htmlFor="fruit_orange">オレンジ</label>
          <input id="fruit_" name="fruit" type="checkbox" value="orange"
          checked={this.state.fruit.includes('orange')}
          onChange={this.handleChangeMulti} />
          <br />
          <label htmlFor="fruit_melon">メロン</label>
          <input id="fruit_" name="fruit" type="checkbox" value="melon"
          checked={this.state.fruit.includes('melon')}
          onChange={this.handleChangeMulti} />
          <br />
          <label htmlFor="fruit_grape">葡萄</label>
          <input id="fruit_" name="fruit" type="checkbox" value="grape"
          checked={this.state.fruit.includes('grape')}
          onChange={this.handleChangeMulti} />
          <br />
          <label htmlFor="fruit_strawberry">苺</label>
          <input id="fruit_" name="fruit" type="checkbox" value="strawberry"
          checked={this.state.fruit.includes('strawberry')}
          onChange={this.handleChangeMulti} />
        </fieldset>
        <button type="button" onClick={this.show}>送信</button>
      </form>
    )
  }
}