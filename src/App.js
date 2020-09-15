import React, { Component } from 'react';

// ルーティング関連の機能をインポート
import { BrowserRouter as Router, NavLink, Link, Route, Switch } from "react-router-dom"

// ルーティングで利用するコンポーネントをインポート
import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle from './MyArticle';

export default class App extends Component {
  render() {
    const current = { color: 'Red' }
    return (
      <Router>
        <div>
          {/* ルーティング経由のリンクリストを準備 */}
          <ul>
            <li><NavLink exact to="/" activeStyle={current}>トップ</NavLink></li>
            <li><NavLink exact to="/hello" activeStyle={current}>Hello</NavLink></li>
            <li><NavLink exact to="/article/13" activeStyle={current}>記事No.13</NavLink></li>
            <li><NavLink exact to="/article/108" activeStyle={current}>記事No.108</NavLink></li>
          </ul>
          <hr />
          {/* ルーティング設定（条件にマッチしたコンポーネントを出力） */}
          <Switch>
            <Route exact path="/" component={MyTop} />
            <Route path="/hello" component={MyHello} />
            <Route path="/article/:id" component={MyArticle} />
            <Route component={MyTop} />
          </Switch>
        </div>
      </Router>
    )
  }
}



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Reactへようこそ！
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
