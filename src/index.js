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

//4.Appコンポーネントを実行
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* name="山田"としなければならない。 */}
    <MyHello /> 

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
    <MyBook info={book}/>,

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//5.サービスを有効化
serviceWorker.unregister();
