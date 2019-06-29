const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    // chainWebpack:config=>{
    //     config.plugin('html')
    //         .tap(arg=>{
    //             arg[0].template = './src/pages/a/index.html';
    //             return arg;
    //         })
    // }
    pages:{
        index:{
            entry:'src/main.js',
            template:'src/pages/a/index.html',
            filename:'index.html',
            title:'lalala',
            chunks:['chunk-vendors','chunk-common','index']
        },
        home:{
            entry:'src/main.js',
            template:'src/pages/b/index.html',
            filename:'index.html',
            title:'233333',
            chunks:['chunk-vendors','chunk-common','home']
        }
    }
  }