import React, { Component } from 'react';
export default class MyArticle extends Component {
  render(){
    return (
      // dt,dd要素を括るダミーの要素
      <React.Fragment>
        <dt>
          <a href={this.props.url}>
            {this.props.title}
          </a>
        </dt>
        <dd>
          {this.props.description}
        </dd>
      </React.Fragment>
    );
  }
}