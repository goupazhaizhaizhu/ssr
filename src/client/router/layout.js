// ./src/client/app/layout.js

import React from "react";
import { Link } from "react-router-dom";
import withStyles from "isomorphic-style-loader/withStyles";
import * as s from "./layout.css";
const ShowComponent = class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={s.page}>
        <Link to="/index">首页</Link> <Link to="/list">列表页</Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default withStyles(s)(ShowComponent);