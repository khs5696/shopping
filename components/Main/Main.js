import React from "react";
import { Link } from 'react-router-dom';

const Main = props => {
    // product가 오류로 없는 경우 처리
    if(props.products) {
        return <RenderProducts products={props.products}/>
    } else {
        return <RenderLoading />
    }
}

const RenderProducts = props => {
    // map 함수를 사용하여 각 제품의 Link를 만든다.
    return props.products.map((product) => {
        return (
          <div className="product">
            <Link className="productImg" to={`/item/${product.id}`}><img src={product.image} alt="food"/></Link>
            <div className="productName">
              <p className="productTitle">{product.name}</p>
            </div>
            <hr />
            <p className="productPrice">{product.price.toLocaleString()} 원</p>
          </div>
        );
    })
};

const RenderLoading = props => (
    <div>Loading...</div>
);

export default Main;