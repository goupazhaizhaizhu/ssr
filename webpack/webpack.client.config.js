const path = require('path');
const webpack = require("webpack");


//定一个通用的路径转换方法
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

module.exports = {
  mode: "development",
  entry: {
    index: resolvePath("../src/client/app/index.js"),
  }, //入口文件
  output: {
    filename: "[name].js", //设置打包后的文件名
    path: resolvePath("../dist/static"), //设置构建结果的输出目录
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], //表示这几个文件的后缀名可以省略不写
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
          // MiniCssExtractPlugin.loader,
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
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
    }),
  ],
};
