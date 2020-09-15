import React, { Component } from 'react';

// ルーティング関連の機能をインポート
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"

// ルーティングで利用するコンポーネントをインポート
import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle from './MyArticle';

export default class App extends Component {
  render() {
    // Router（BrowserRouter）でルーティング機能を有効か
    return (
      <Router>
        <div>
          {/* ルーティング経由のリンクリストを準備 */}
          <ul>
            <li><Link to="/">トップ</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/article/13">記事No.13</Link></li>
            <li><Link to="/article/108">記事No.108</Link></li>
          </ul>
          <hr />
          {/* ルーティング設定（条件にマッチしたコンポーネントを出力） */}
          <Switch>
            <Route exact path="/" component={MyTop} />
            <Route path="/hello" component={MyHello} />
            <Route path="/article/:id" component={MyArticle} />
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
