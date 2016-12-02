const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/handler.js',
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist'),
    library: 'handler',
    filename: 'handler.js',
    sourceMapFilename: 'handler.map.js',
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
    // new webpack.optimize.DedupePlugin(),
  ],
  devtool: '#source-map',
};
