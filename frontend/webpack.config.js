const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, 'node_modules')
    }
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [
      {
        test: /.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader', 'style-loader') },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
}
