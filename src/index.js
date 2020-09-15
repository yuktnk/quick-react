//1.React関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom';

//2.アプリ固有のファイルをインポート
import './index.css';
import App from './App';
// import MyHello from './MyHello';
// import MyType from './MyType';
// import MyAttrMulti from './MyAttrMulti';
// import MyHelloContent from './MyHelloContent';
// import MyBook from './MyBook';
// import MyProp, {Menber} from './MyProp';
// import MyHelloDef from './MyHelloDef';
// import MyArticle from './MyArticle';
// import MyEvent from './MyEvent';
// import MyPool from './MyPool';
// import MyState from './MyState';
// import MyParent from './MyParent';
// import MyForm from './MyForm';
// import MyFormUn from './MyFormUn';
// import MyTextarea from './MyTextarea';
// import MySelect from './MySelect';
// import MyList from './MyList';
// import MyRadio from './MyRadio';
// import MyCheck from './MyCheck';
// import MyCheckMulti from './MyCheckMulti';
// import MyFile from './MyFile';
// import MyLife from './MyLife';

//3.キャッシュのためのサービスをインポート
import * as serviceWorker from './serviceWorker';

// const data = {
//   name: '山田権左衛門',
//   age: 18,
//   sex: '男',
// };
// const book = {
//   isbn: 'WGS-JST-001',
//   title: '速習 webpack',
//   price: 454,
//   published: 'WINGSプロジェクト',
// };

// const articles = [
//   {
//     url:'https://www.atmarkit.co.jp/ait/series/9383/',
//     title:'AngularTIPS',
//     description:'人気のJavaScriptフレームワーク「Angular」の目的別リファレンス',
//     isNew:true
//   },
//   {
//     url:'hoge',
//     title:'hoge',
//     description:'hogehogehoge',
//     isNew:false
//   },
//   {
//     url:'fuga',
//     title:'fuga',
//     description:'fugafugafuga',
//     isNew:true
//   },
// ];
// const list = articles.map((article, index) =>
//   <MyArticle {...article} key={index} />);

//4.Appコンポーネントを実行
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//5.サービスを有効化
serviceWorker.unregister();
