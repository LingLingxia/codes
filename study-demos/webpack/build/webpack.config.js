const path=require('path');
const changeIndexName = require('./../plugin/changeIndexName.js');
const HtmlWebpackPlugin = require('./../plugin/clean-webpack-plugin.js');
const FileListPlugin = require('./../plugin/FileListPlugin.js');
//const copyHtmlPlugin = require('copy-webpack-plugin');
const copyHtmlPlugin = require('./../plugin/copy/dist/index.js');
const allHooks = require('./../plugin/all-hooks.js');
module.exports={
    mode: 'development',
    entry:{
      app:path.resolve(__dirname,'./../source/entry1.js'),
      vendor:path.resolve(__dirname,'./../source/entry2.js')
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].build.js'
    },
    devtool:'inline-source-map',
    module:{//loader用于转换
        rules:[
            {test:/\.txt$/,use:'raw-loader'},
            {test:/\.css$/,use:[
                {loader:'style-loader'},
                {
                    loader:'css-loader',
                    options:{
                        modules:true
                    }
                }
            ]}
        ]
    },
    plugins:[//打包优化，压缩，重定义环境中的变量等
        //new webpack.optimise.UglifyJsPlugin(),
        //new HtmlWebpackPlugin(),
        //new changeIndexName({name:'2333'}),
        // new FileListPlugin(),
        // new copyHtmlPlugin([{
        //   from:path.resolve(__dirname,'./../config.js'),
        //   to:path.resolve(__dirname,'./../dist/')
        // }])
        new allHooks()
    ]
}