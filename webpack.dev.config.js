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

// const path = require("path");
// const webpack = require('webpack');

// const htmlWebpackPlugin = require('html-webpack-plugin');

// module.exports ={
//     entry:{
//         app: [
//             'react-hot-loader/patch',
//             path.join(__dirname,"./src/index.js")
//         ],
//         vendor: ['react','react-dom','react-redux','redux','react-router-dom']
//     },
//     output: {
//         path: path.join(__dirname,"./dist"),
//         filename: '[name].[hash].js',
//         chunkFilename: '[name].[chunkhash].js'
//     },
//     devtool: 'inline-source-map',
//     module: {
//         rules:[
//             {
//                 test: /\.js$/,
//                 use: ["babel-loader?cacheDirectory=true"],
//                 include: path.join(__dirname,"./src")
//             },
//             {
//                 test: /\.less$/,
//                 // use: ["style-loader","css-loader","less-loader"],
//                 use: ["style-loader","css-loader?modules&localIdentName=[name]-[hash:base64:5]","less-loader"],
//                 include: path.join(__dirname,"./src")
//             },
//             {
//                 test: /\.jpg|.png|.gif/,
//                 use:[{
//                     loader: 'url-loader',
//                     options: {
//                         limit: 8192
//                     }
//                 }]
//             }
//         ]
//     },
//     devServer: {
//         contentBase: path.join(__dirname,"./dist"),
//         historyApiFallback: true,
//         host:"0.0.0.0",
//         port: 8080,
//         hot: true
//         // color: true,   //报错
//     },
//     resolve: {
//         alias: {
//             pages: path.join(__dirname, "./src/pages"),
//             components: path.join(__dirname,"./src/components"),
//             router: path.join(__dirname, "./src/router"),
//             containers: path.join(__dirname,"./src/containers"),
//             actions: path.join(__dirname,"./src/actions"),
//             images: path.join(__dirname,"./src/static/images")
//         }
//     },
//     plugins:[
//         new webpack.HotModuleReplacementPlugin(),
//         new htmlWebpackPlugin({
//             template: "./index.html",
//             filename: "index.html"
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vendor'
//         })
//    ]
// }

const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    entry:{
        app: [
            'react-hot-loader/patch',
            path.join(__dirname,"./src/index.js")
        ],
    },
    output: {
         /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js',
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                test: /\.less$/,
                // use: ["style-loader","css-loader","less-loader"],
                use: ["style-loader","css-loader?modules&localIdentName=[name]-[hash:base64:5]","less-loader"],
                include: path.join(__dirname,"./src")
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname,"./dist"),
        historyApiFallback: true,
        host:"0.0.0.0",
        port: 8080,
        // hot: true  在package 中运行命令已经加了 --hot参数
    },
}
module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);