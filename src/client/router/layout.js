// ./src/client/app/layout.js

import React from "react";
import { Link } from "react-router-dom";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./layout.css";
function Layout(props) {
    return (
      <div className={s.page}>
        <Link to="/index">首页</Link> <Link to="/list">列表页</Link>
        <div>{props.children}</div>
      </div>
    );
}

export default withStyles(s)(Layout);