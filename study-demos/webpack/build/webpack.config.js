const path=require('path');

module.exports={
    entry:'./file.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'my-first-webpack.build.js'
    },
    mode:'development',
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
        new webpack.optimise.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template:'./src/index.html'})
    ]
}