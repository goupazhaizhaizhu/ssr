// src/client/router/index.js
//路由配置文件

import Layout from "./layout";
import React from "react";
import { Route, Routes } from "react-router-dom";

//服务端也会用到所以通过参数的方式将配置传递进来
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { routeList } = this.props;
    return (
      <Layout>
        <Routes>
          {routeList.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={
                  <item.component
                    initialData={item.initialData}
                  ></item.component>
                }
              ></Route>
            );
          })}
        </Routes>
      </Layout>
    );
  }
}
