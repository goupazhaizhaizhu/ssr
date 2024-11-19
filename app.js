const express = require('express');
const path = require('path');
const reactSsr  = require('./dist/src/server/middlewares/react-ssr').default;

const app = express();

// 静态文件处理
app.use(express.static(path.join(__dirname, 'public')));
// 将打包好的静态文件也放到静态文件服务下
app.use(express.static(
    path.join(__dirname, './dist/static')
));

// 首页
app.use("/" ,reactSsr);

app.listen(8081,  function () {
    console.log("服务启动完毕");
});