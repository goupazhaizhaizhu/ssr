const app = express();

// 首页
app.use("/" ,(req, res)=>{
    res.end("HELLO WORLD")
});

app.listen(8081,  function () {
    console.log("服务启动完毕");
});