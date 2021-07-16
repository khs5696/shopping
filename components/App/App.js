import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Main from "./components/Main/Main";

// 다수의 component를 렌더링 하기 위해, 배열 형태로 component를 작성
const App = props => [
  <Nav key = {1} />,
  <Routes key = {2} />
];

const Routes = props => (
  // Switch : 처음 매칭되는 Component만을 랜더링한다.
  // Route : path의 url로 이동할 경우, 어떤 component를 랜더링할지 결정
  <Switch>
    <Route exact path = "/"  component = {Main} />
    <Route exact path = "/cart" component = {Cart} />
  </Switch>
)

export default App;