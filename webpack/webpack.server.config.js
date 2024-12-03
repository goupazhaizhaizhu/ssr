const path = require("path");
const nodeExternals = require("webpack-node-externals");

//定一个通用的路径转换方法
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

module.exports = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  node: {
    __dirname: false,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], //表示这几个文件的后缀名可以省略不写
  },
  entry: resolvePath("../app.js"), //入口文件
  output: {
    filename: "app.js", //设置打包后的文件名
    path: resolvePath("../dist"), //设置构建结果的输出目录
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css?$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
