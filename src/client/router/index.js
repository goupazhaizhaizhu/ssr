// src/client/router/index.js
//路由配置文件

import Layout from "./layout";
import React from "react";
import { Route, Switch } from "react-router-dom";

//服务端也会用到所以通过参数的方式将配置传递进来
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { routeList } = this.props;
    return (
      <Layout>
        <Switch>
          {routeList.map((item) => {
            return item.initialData ? (
              <Route
                key={item.path}
                exact={item.exact}
                path={item.path}
                render={(props) => {
                  props.initialData = item.initialData;
                  return <item.component {...props} />;
                }}
              ></Route>
            ) : (
              <Route key={item.path} {...item}></Route>
            );
          })}
        </Switch>
      </Layout>
    );
  }
}
