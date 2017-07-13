const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/handler.js',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: 'handler.js',
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  externals: { 'aws-sdk': 'aws-sdk' },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  devtool: '#source-map',
};
