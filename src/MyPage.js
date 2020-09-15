import React, { Component } from 'react';

export default class MyPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>現在は、{this.props.match.params.page}ページです。</div>;
    }
}