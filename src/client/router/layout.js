// ./src/client/app/layout.js

import React from "react";
import { Link } from "react-router-dom";
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Link to="/index">首页</Link> <Link to="/list">列表页</Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
