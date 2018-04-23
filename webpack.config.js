/*
* @Author: Administrator
* @Date:   2018-04-22 20:33:35
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-22 21:07:29
*/
var path = require('path');
var config = {
  entry: {
  	'index':['./src/page/index/index.js'],
  	'login':['./src/page/login/index.js'],
  },
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename:'js/[name].js'
  }
};
module.exports = config ;