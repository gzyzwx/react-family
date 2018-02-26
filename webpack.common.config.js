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

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry:{
        app: [
            path.join(__dirname,"./src/index.js")
        ],
        vendor: ['react','react-dom','react-redux','redux','react-router-dom']
    },
    output: {
        path: path.join(__dirname,"./dist"),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"
    },

    module: {
        rules:[
            {
                test: /\.js$/,
                use: ["babel-loader?cacheDirectory=true"],
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
        // new webpack.HotModuleReplacementPlugin(),
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
         new webpack.HashedModuleIdsPlugin(),
   ]
}

