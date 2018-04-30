
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