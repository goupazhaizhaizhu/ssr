const express = require('express');
const path = require('path');
const reactSsr = require('./src/server/index.js').default;

const app = express();

// 静态文件处理
app.use(express.static(path.join(__dirname, '../public')));
// 将打包好的静态文件也放到静态文件服务下
app.use(express.static(
    path.join(__dirname, 'static')
));

app.get("/favicon.ico", (req, res) => {
  res.status(404).send("Favicon not found");
});

// 前端页面
app.get("*", reactSsr);

app.listen(8081,  function () {
    console.log("服务启动完毕");
});