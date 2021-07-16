import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Main from "./components/Main/Main";
import Item from "./components/Item/Item";
import data from "MOCK_DATA.json"; // https://mockaroo.com/로부터 Dummy 데이터를 받아온다.

// App.js에서 dummy data를 불러옴으로써 최상단 컴포넌트로 잡고
// state를 결정하기 위해 class 컴포넌트로 변경한다.
class App extends Component {
  constructor() {
    super();
    this.state = {
      // dummy data를 state로 지정
      products: data
    };
  };

  // React의 life cycle과 관련된 메소드로
  // 컴포넌트가 DOM에 마운트 된 후 실행된다.
  // App 컴포넌트가 실행될 때 어떠한 기능을 실행할지 결정
  componentDidMount() {
    console.log(this.state.products)
  };

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path = "/"  component = {Main} />
          <Route exact path = "/cart" component = {Cart} />
        </Switch>
      </div>
    );
  };
};

export default App;