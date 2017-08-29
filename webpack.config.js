const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    js: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({ minimize: true }),
  ],
};

module.exports = config;
