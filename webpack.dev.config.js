 // webpack-dev-server --config webpack.dev.config.js --color --progress --hot
 //   上面可以实现热替换  或者使用以下方法，效果一样

 // webpack-dev-server --config webpack.dev.config.js --color --progress 
// const webpack = require('webpack');
// devServer: {
//     hot: true
// }

// plugins:[
//      new webpack.HotModuleReplacementPlugin()
// ]

const path = require("path");
const webpack = require('webpack');


module.exports ={
    entry:[
        'react-hot-loader/patch',
        path.join(__dirname,"./src/index.js")],
    output: {
        path: path.join(__dirname,"./dist"),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                use: ["babel-loader?cacheDirectory=true"],
                include: path.join(__dirname,"./src")
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname,"./dist"),
        historyApiFallback: true,
        host:"0.0.0.0",
        port: 8080,
        hot: true
        // color: true,   //报错
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
   ]
}

