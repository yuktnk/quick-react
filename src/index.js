//1.React関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom';

//2.アプリ固有のファイルをインポート
import './index.css';
import App from './App';
import MyHello from './MyHello';
import MyType from './MyType';
import MyAttrMulti from './MyAttrMulti';
import MyHelloContent from './MyHelloContent';
import MyBook from './MyBook';
import MyProp, {Menber} from './MyProp';
import MyHelloDef from './MyHelloDef';
import MyArticle from './MyArticle';
import MyEvent from './MyEvent';
import MyPool from './MyPool';
import MyState from './MyState';
import MyParent from './MyParent';
import MyForm from './MyForm';
import MyTextarea from './MyTextarea';
import MySelect from './MySelect';
import MyList from './MyList';

//3.キャッシュのためのサービスをインポート
import * as serviceWorker from './serviceWorker';

const data = {
  name: '山田権左衛門',
  age: 18,
  sex: '男',
};
const book = {
  isbn: 'WGS-JST-001',
  title: '速習 webpack',
  price: 454,
  published: 'WINGSプロジェクト',
};

const articles = [
  {
    url:'https://www.atmarkit.co.jp/ait/series/9383/',
    title:'AngularTIPS',
    description:'人気のJavaScriptフレームワーク「Angular」の目的別リファレンス',
    isNew:true
  },
  {
    url:'hoge',
    title:'hoge',
    description:'hogehogehoge',
    isNew:false
  },
  {
    url:'fuga',
    title:'fuga',
    description:'fugafugafuga',
    isNew:true
  },
];
const list = articles.map((article, index) =>
  <MyArticle {...article} key={index} />);

//4.Appコンポーネントを実行
ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyHello name="山田" /> 
    {/* 文字列 （{...}を使用しない場合） */}
    < MyType value="山田" />
    {/* {/* 文字列 */}
    < MyType value={'鈴木'} />
    {/* 数値 */}
    < MyType value={ 108 } />
    {/* 真偽値 */}
    < MyType value={ true } />
    {/* 配列 */}
    < MyType value={ ['うめ', 'もも', 'さくら'] } />
    {/* オブジェクト */}
    < MyType value={ {name: "山田太郎", age: 40} } />
    {/* 関数 */}
    < MyType value={ ()=> console.log('Hoge')} />
    < MyAttrMulti{...data} />
    <MyHelloContent>
      <b>山田</b>
    </MyHelloContent>
    <MyBook info={book}/>
    {/* ↓ は正しい型、エラーを確認する場合は誤った型にする */}
    <MyProp prop1={new Menber()} prop2="男" prop3="山田太郎" prop4= {[10, 20]} prop5={{name: '山田', age: 40, sex: '男'}}/>,
    <MyHelloDef />
    <dl>{list}</dl>
    <MyEvent greet="Hello" />
    <MyPool />
    <MyState />
    <MyParent />
    <MyForm />
    <MyTextarea />
    <MySelect />
    <MyList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//5.サービスを有効化
serviceWorker.unregister();
