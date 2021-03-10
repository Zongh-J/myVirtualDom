/*
 * @Author: your name
 * @Date: 2021-03-04 23:42:10
 * @LastEditTime: 2021-03-06 16:23:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \virtual-dom\webpack.config.js
 */
const path = require('path');

module.exports = {
  //入口文件
  entry: './src/index.js',
  //出口文件
  output: {
    publicPath: '/xu_ni',
    //打包出来的文件名
    filename: 'bundle.js',
  },
  devServer: {
    port: '9000',
    index: 'index.html'
  }
};
