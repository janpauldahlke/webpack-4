const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.svg$/,
        loaders: ["url-loader"]
      }
    ]
  },
  plugins: [
    //https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new ExtractTextPlugin("styles.css")
  ]
};