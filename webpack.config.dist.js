const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const writesvg = require('postcss-write-svg')
const adaptive = require('postcss-adaptive')

const modulesPath = path.resolve(__dirname, 'node_modules')
const staticPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: staticPath,
    filename: 'clover-ui.min.js',
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  adaptive({ remUnit: 75 }),
                  autoprefixer(),
                  writesvg(),
                ],
              },
            },
            'less-loader',
          ],
        }),
      }, {
        test: /\.(js|jsx)$/,
        exclude: modulesPath,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new ExtractTextPlugin('clover-ui.min.css'),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    extensions: ['.js'],
  },
}
