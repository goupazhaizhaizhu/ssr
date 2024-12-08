// ./src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件,组件在服务端渲染的逻辑都在这个文件内

//引入Index 组件
import React from 'react';
//引入index 组件
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router";
import { Provider } from "mobx-react";
import routeList from "../client/router/route-config.js";
import App from "../client/router/index.js";
import { matchRoute } from "../share/matchRoute.js";
import { Helmet } from "react-helmet";
import StyleContext from 'isomorphic-style-loader/StyleContext';
import storeMap from "../client/pages/storeMap.ts"
import { toString } from "../client/pages/storeUtils.ts"
 
export default async (req, res) => {
  //获得请求的 path
  const path = req.path;

  //查找到的目标路由对象
  let { targetRoute } = matchRoute(path, routeList);

  //数据预取 -> fetchResult
  let fetchDataFn = targetRoute.component.getInitialProps;
  let fetchResult = {};
  if (fetchDataFn) {
    fetchResult = await fetchDataFn();
  }
    
  targetRoute.initialData = fetchResult;
  const css = new Set();
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getCss()));

  const stores = {}
  Object.keys(storeMap).forEach(key => { 
    stores[key] = new storeMap[key]();
  })

  const storeStr = toString(stores);

  const html = renderToString(
    <Provider {...stores}>
      <StyleContext.Provider value={{ insertCss }}>
        <StaticRouter location={path}>
          <App routeList={routeList}></App>
        </StaticRouter>
      </StyleContext.Provider>
    </Provider>
  );
  
  const helmet = Helmet.renderStatic();

  res.end(`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>${[...css].join("")}</style>
    </head>
    <body>
        <div id="root">
           ${html}
        </div>
    </body>
    <script>
      window.__PRELOADED_STATE__ = ${storeStr};
    </script>
    <textarea id="ssrTextInitData" style="display:none;">
    ${JSON.stringify(fetchResult)}
    </textarea>
    <script type="text/javascript"  src="index.js"></script>
    </html>`);
};
