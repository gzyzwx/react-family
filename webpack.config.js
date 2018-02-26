/*
const path = require("path");
const webpack = require('webpack');

const htmlWebpackPlugin = require('html-webpack-plugin');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const extractTextWebpackPugin = require('extract-text-webpack-plugin');

module.exports ={
    entry:{
        app: [
            'react-hot-loader/patch',
            path.join(__dirname,"./src/index.js")
        ],
        vendor: ['react','react-dom','react-redux','redux','react-router-dom']
    },
    output: {
        path: path.join(__dirname,"./dist"),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules:[
            {
                test: /\.js$/,
                use: ["babel-loader?cacheDirectory=true"],
                include: path.join(__dirname,"./src")
            },
            {
                test: /\.less$/,
                use: extractTextWebpackPugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader?modules&localIdentName=[name]-[hash:base64:5]","less-loader"]
                }),
                // use:["style-loader", "css-loader?modules","less-loader"],
                include: path.join(__dirname,"./src")
            },
            {
                test: /\.jpg|.png|.gif/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, "./src/pages"),
            components: path.join(__dirname,"./src/components"),
            router: path.join(__dirname, "./src/router"),
            containers: path.join(__dirname,"./src/containers"),
            actions: path.join(__dirname,"./src/actions"),
            images: path.join(__dirname,"./src/static/images")
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
            //, name: 'manifest'  这里的name好像可以随便改，可以保证vendorhash不变，
            // https://doc.webpack-china.org/guides/caching
            //main bundle 会随着自身的新增内容的修改，而发生变化。
            //vendor bundle 会随着自身的 module.id 的修改，而发生变化。
            //manifest bundle 会因为当前包含一个新模块的引用，而发生变化。
        }),
        new uglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
             }
         }),
         new webpack.HashedModuleIdsPlugin(),
         new cleanWebpackPlugin(['dist']),
         new extractTextWebpackPugin({
             filename: '[name].[contenthash:5].css',
             allChunks: true,
             //从所有额外的 chunk(additional chunk) 提取（默认情况下，
             //它仅从初始chunk(initial chunk) 中提取）
            //当使用 CommonsChunkPlugin 并且在公共 chunk 中有提取的 chunk
            //（来自ExtractTextPlugin.extract）时，allChunks **必须设置为 true

            // chunk type 块的类型大揭秘 https://github.com/ShowJoy-com/showjoy-blog/issues/7
         })
   ]
}
*/

// webpack merge
const path = require("path");
const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractTextWebpackPugin = require('extract-text-webpack-plugin');

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.less$/,
            use: extractTextWebpackPugin.extract({
                fallback: "style-loader",
                use: ["css-loader?modules&localIdentName=[name]-[hash:base64:5]","less-loader"]
            }),
            // use:["style-loader", "css-loader?modules","less-loader"],
            include: path.join(__dirname,"./src")
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new extractTextWebpackPugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]

};

module.exports = merge(commonConfig, publicConfig);