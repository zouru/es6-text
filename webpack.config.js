/**
 * Created by yu on 2017/2/15.
 */
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './entry.js',//入口文件
    output: {
        filename: './bundle.js',//出口
    },
    devtool: "source-map",
    devServer: {
        port: 8080,
        inline: true,
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,//node_modules下的不会进行es6编译
                query: {
                    presets: ['es2015']//使用es2015预设
                }
            }
        ]
    },
    resolve: {
        "extensions": ['.js', '.css', '.json']
    },
    plugins: [
          new OpenBrowserPlugin({ url: 'http://localhost:8081' }),
          new webpack.HotModuleReplacementPlugin()
      ]
}
