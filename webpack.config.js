
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
            name: 'runtime'
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
             allChunks: true
         })
   ]
}


