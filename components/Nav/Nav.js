// Nav.js 네비게이션 역할

import React from "react";
import "./Nav.css";

// ReactRouter의 내장 component인 Link component를 불러온다.
// Link를 사용하면 a 태그 사용 시 전체 페이지의 reloading을 막을 수 있다.
import { Link } from "react-router-dom";

const Navigation = (props, context) = (
    <div className = "navigation">
        <div className = "inner">
            <Link to="/">Shopping Mall</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </div>
);

export default Navigation;