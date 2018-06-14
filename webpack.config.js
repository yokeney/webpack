const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  devtool: 'eval-source-map',
  mode: 'production',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新

},
module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        },
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
         new webpack.BannerPlugin('版权所有，翻版必究'),
         new HtmlWebpackPlugin({template: __dirname + "/app/index.tmpl.html"}),//new 一个这个插件的实例，并传入相关的参数
        //  new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
}
