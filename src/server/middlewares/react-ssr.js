// ./src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件,组件在服务端渲染的逻辑都在这个文件内

//引入Index 组件
import React from 'react';
//引入index 组件
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router";
import routeList from "../../client/router/route-config";
import App from "../../client/router/index.js";
import { matchRoute } from "../../share/matchRoute.js";
import { Helmet } from "react-helmet";

export default async(req, res) => {
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


    const html = renderToString(
        <StaticRouter location={path}>
            <App routeList={routeList}></App>
        </StaticRouter>
    );
  
  const helmet = Helmet.renderStatic();

  res.end(`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
    </head>
    <body>
        <div id="root">
           ${html}
        </div>
    </body>
    <textarea id="ssrTextInitData" style="display:none;">
    ${JSON.stringify(fetchResult)}
    </textarea>
    <script type="text/javascript"  src="index.js"></script>
    </html>`);
};
