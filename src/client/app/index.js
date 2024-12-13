// ./src/client/app/index.js

//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from '../router/index.js';
import routeList from '../router/route-config';//路由配置
import { matchRoute } from "../../share/matchRoute.js"; 
import StyleContext from "isomorphic-style-loader/StyleContext";
import { Provider } from 'mobx-react';
import { toStore } from "../pages/storeUtils.ts";

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}

let initialData = JSON.parse(document.getElementById("ssrTextInitData").value);

//查找路由
let { targetRoute } = matchRoute(document.location.pathname, routeList);

//设置组件初始化数据 [关键点]
targetRoute.initialData = initialData;

const preloadedState = window.__PRELOADED_STATE__;
const stores = toStore(preloadedState);

//渲染入口
ReactDom.hydrate(
  <Provider {...stores}>
    <StyleContext.Provider value={{ insertCss }}>
      <BrowserRouter>
        <App routeList={routeList} />
      </BrowserRouter>
    </StyleContext.Provider>
  </Provider>,
  document.getElementById("root")
);
