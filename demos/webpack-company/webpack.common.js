const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
  entry:{
    app:'./src/main.js'
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'production'
    })
  ],
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
         test: /\.css$/,
         use:['style-loader','css-loader',] 
      },
      {
        test:/\.(png|jpg|bmp|gif)$/,
        use:['file-loader']
      },
    ]
  },
};