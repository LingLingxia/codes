const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');;
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports= (env) => {

return {
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
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module:{
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
  // resolve:{
  //   alias:{
  //     xyz: "modu/dir"
  //   }
  // }
}


};
