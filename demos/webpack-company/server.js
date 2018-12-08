const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
  publicPath:config.output.publicPath
}));

app.listen(3000,function(){
  console.log('example app listening on port 3000\n');
})

// const config = require('./webpack.config.js');
// const webpack = require('webpack');
// const middleware = require('webpack-dev-middleware');
// const compiler = webpack(config);
// const express = require('express');
// const app = express();
 
// app.use(middleware(compiler, {
//   publicPath:'/'
// }));
 
// app.listen(3000, () => console.log('Example app listening on port 3000!'))