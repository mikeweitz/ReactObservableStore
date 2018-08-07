// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'example/src'),
  JS: path.resolve(__dirname, 'example/src/js'),
};

// Webpack configuration
module.exports = {
  entry: {
    store: path.join(paths.JS, 'store/index.js'),
    bar: path.join(paths.JS, 'apps/bar/index.js'),
    foo: path.join(paths.JS, 'apps/foo/index.js')
  },
  output: {
    path: paths.DIST,
    filename: '[name].bundle.js',
    library: '[name]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  // So we can write: import MyComponent from './my-component';
  // Instead of: import MyComponent from './my-component.jsx';
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
