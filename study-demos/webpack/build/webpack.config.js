const path=require('path');
const changeIndexName = require('./../plugin/changeIndexName.js');
const HtmlWebpackPlugin = require('./../plugin/clean-webpack-plugin.js');
const FileListPlugin = require('./../plugin/FileListPlugin.js');
module.exports={
    mode: 'development',
    entry:path.resolve(__dirname,'./../source/entry1.js'),
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'my-first-webpack.build.js'
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
        new HtmlWebpackPlugin(),
        //new changeIndexName({name:'2333'}),
        new FileListPlugin()
    ]
}