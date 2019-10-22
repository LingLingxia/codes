const path=require('path');
// const allHooks = require('./../plugin/all-hooks.js');
const htmlWebpackPluginDemo= require('../plugin/html-webpack-plugin-demo');

const webpack = require('webpack');
module.exports={
    mode: 'development',
    // entry:{
    //   app:path.resolve(__dirname,'./../source/entry1.js'),
    //   vendor:path.resolve(__dirname,'./../source/entry2.js')
    // },
    // output:{
    //     path:path.resolve(__dirname,'../dist'),
    //     filename:'js/[name].[hash].js',
    // },
    entry:path.resolve(__dirname,'./../module-test/output.js'),
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'output.js',
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
    plugins:[
        //new allHooks()
        new htmlWebpackPluginDemo(),
        
    ],
    optimization: {
        splitChunks: {
            chunks:'all',
            name:'common'
        }
      }
}