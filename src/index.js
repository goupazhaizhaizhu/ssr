//express_demo.js 文件
var express = require('express');
var app = express();
var mysql = require('mysql');

// 配置数据库连接参数
const connection = mysql.createConnection({
  host: '172.23.215.76', // 替换为你的阿里云服务器的IP地址
  user: 'root', // 替换为你的数据库用户名
  password: 'Goupazhai<123', // 替换为你的数据库密码
  database: 'performance_schema', // 替换为你的数据库名
  port: 3306 // MySQL的默认端口是3306
});
 
// 开启数据库连接
connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
 
  // 关闭数据库连接
  connection.end();
});
 
app.get('/', function (req, res) {
   res.send('Hello World1');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})