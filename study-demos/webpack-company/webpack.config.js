const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports= (env) => {

return {
  mode:'development',
  entry:{
     bundle: './src/main.js',
    // another:'./src/another-entry.js'
    },
  output:{
    filename:'[name].js',
    path:__dirname+'/dist',
    chunkLoadTimeout:1,
    //chunkFilename:'[id].bundle.js'
   // publicPath:'/',
    // auxiliaryComment:{
    //   root: "Root Comment",
    //   commonjs: "CommonJS Comment",
    //   commonjs2: "CommonJS2 Comment",
    //   amd: "AMD Comment"
    // },
    // library: "someLibName",
    // libraryTarget: "umd"
  },
  devtool:'inline-source-map',
  devServer: {
       contentBase: './dist',
       hot:true,
       allowedHosts:['baidu.com']
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new WorkboxPlugin.GenerateSW({
    //     clientsClaim:true,
    //     skipWaiting:true
    // })
  ],
  module:{
   // noParse:/test\.png\.jpg/,
    rules:[
      {
         test: /\.css$/,
         use:['style-loader','css-loader',],
         enforce:'post'
      },
      {
        test:/\.(png|jpg|bmp|gif)$/,
        use:['file-loader']
      },
    ]
  },
  resolve:{
    alias:{
      xyz: "modu/dir"
    }
  }
}


};

// module.exports = [{
//   output: {
//     filename: './dist-amd.js',
//     libraryTarget: 'amd'
//   },
//   entry: './src/main.js',
//   mode: 'production',
// }, {
//   output: {
//     filename: './dist-commonjs.js',
//     libraryTarget: 'commonjs'
//   },
//   entry: './src/main.js',
//   mode: 'production',
// }]