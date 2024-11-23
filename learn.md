# learn

## 2024.4.14

### linux文件的操作是有权限管控的

1. 改变目录的所有者

> sudo chown -R ecs-user:ecs-user /home/ecs-user/node/ssr

2. 改变目录的权限

> sudo chmod -R a+w /home/ecs-user/node/ssr

### sh文件中使用npm需要添加 npm 到 PATH

> 在sh文件中添加一行：source ~/.nvm/nvm.sh

### 阿里云ip和端口号问题

1. 启动服务时ip指定0.0.0.0，访问时用公网IP。
2. 也可以使用私网id，用于内部调用
3. 公网port需要暴露出来

## 2024.11.23

### node端如何使用es module

### hydrate和renderToString

### Routes组件、StaticRouter组件和BrowserRouter组件作用

### props.staticContext的使用
