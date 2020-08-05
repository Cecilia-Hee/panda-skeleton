/*
 * @Author: Helijun
 * @Date: 2020-07-20 18:16:09
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-05 13:56:53
 * @Description: 
 */ 
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',  // 打包后的文件名
    path: path.resolve(__dirname, './dist'), // dirname: 表示当前webpack所在的绝对路径， 与后面的dist结合起来，就是打包路径
    // path也可以不写，默认打包路径是当前项目下
    publicPath: ''
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    open: false,
    port: '8888',
    publicPath: '/',
    overlay: true,
    proxy: {},
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: '使用HtmlWebpackPlugin',
      // filename: 'asset/index.html',

    }),
    new CleanWebpackPlugin()
  ]
}