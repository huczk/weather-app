const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: {
      js: './src/index.jsx',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist',
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.scss?/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            }, {
              loader: 'sass-loader',
              options: {
                minimize: true,
              },
            },
          ],
        }),
      }],
    },
    plugins: [
      new UglifyJSPlugin({ minimize: true }),
      CSSExtract,
    ],
  };
};
