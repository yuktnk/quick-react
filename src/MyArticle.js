import React, { Component } from 'react';
import MyNew from './MyNew';
export default class MyArticle extends Component {
  // 条件分岐にるコード
  renderIfNew(isNew) {
    if (isNew) {
      return < MyNew />
    }
  }
  // コンポーネントによる出力全体
  render(){
    return (
      // dt,dd要素を括るダミーの要素
      <React.Fragment>
        <dt>
          <a href={this.props.url}>
            {this.props.title}
          </a>
          {/* 1. 「?:」演算子（条件演算子）を使用した場合 */}
          { this.props.isNew ? <MyNew /> : null }
          {/* 1. 「&&」演算子を使用した場合 */}
          { this.props.isNew && <MyNew /> }
          {/* 2. 即時関数を使用した場合 */}
          {(()=>{
            if ( this.props.isNew ) {
              return < MyNew />
            }
          })()}
          {/* 3. 関数／メソッドの場合 */}
          { this.renderIfNew(this.props.isNew) }
        </dt>
        <dd>
          {this.props.description}
        </dd>
      </React.Fragment>
    );
  }
}