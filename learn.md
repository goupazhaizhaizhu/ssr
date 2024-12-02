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

node本来只能编译commonjs代码，需要使用babel-loader的@babel/preset-env插件将其改为es module

### hydrate和renderToString

### Routes组件、StaticRouter组件和BrowserRouter组件作用

### 数据脱水（用一个display的textarea传客户端）

### 数据注水（在hydrate前获取textarea数据，通过props传递给组件）

### 服务端的数据也可以通过props的方式传递给组件

### 补漏：组件的继承，类组件的静态方法

## 2024.12.02

### TDK的含义以及同构

### style-loader、css-loader的用法

### webpack打包和babel打包的不同

### postcss的用法、如何使用sass和module.scss

### isomorphic-style-loader的用法

### css同构的方案
