import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Main from "./components/Main/Main";
import Item from "./components/Item/Item";
import data from "MOCK_DATA.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data
    };
    this.renderFoodDetail = this.renderFoodDetail.bind(this);
  };

  // map 함수를 통해 각 제품의 url을 생성한다. `/item/${product.id}`
  // 각 제품의 item 컴포넌트에 props를 전달한다.
  renderFoodDetail() {
    return this.state.products.map(product => {
      return (
        <Route
          exact path = {`/item/${product.id}`}
          render = {props => {
            return (
              <Item
                imgage = {product.image}
                name = {product.name}
                price = {product.price}
                id = {product.id}
                key = {product.id}
              />
            )
          }}
        />
      );
    });
  }


  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route 
            exact path = "/"  
            render = {props => {
              // App 컴포넌트에서 Main 컴포넌트로 props 전달
              return (<Main products = {this.state.products}/>);
            }}  
          />
          {this.renderFoodDetail()}
        </Switch>
      </div>
    );
  };
};

export default App;