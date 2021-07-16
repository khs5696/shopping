// Nav.js 네비게이션 역할

import React from "react";
import "./Nav.css";
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