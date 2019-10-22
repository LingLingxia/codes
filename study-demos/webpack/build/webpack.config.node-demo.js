const path=require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanHtmlPlugin = require('clean-webpack-plugin')
module.exports={
    mode: 'production',
    entry:path.resolve(__dirname,'./../module-test/output.js'),
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'output.js',
    },
    plugins:[
        new UglifyJsPlugin(),
        new CleanHtmlPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks:'all',
            name:'common'
        }
      }
}