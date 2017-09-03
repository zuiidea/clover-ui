const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTemplate = require('html-webpack-template')
const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')

const sourcePath = path.join(__dirname, 'src')
const staticPath = path.join(__dirname, 'dist')

module.exports = function(env) {
  const production = env === 'production'
  const plugins = [new HtmlWebpackPlugin({
      hash: true,
      mobile: true,
      title: 'clover-ui',
      inject: false,
      appMountId: 'root',
      // template: `!!ejs-loader!${HtmlWebpackTemplate}`,
      template: HtmlWebpackTemplate,
      minify: {
        collapseWhitespace: true
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no'
        }
      ]
    })]

    if (production) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
    }))
  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return {
    plugins,
    devtool: production
      ? 'source-map'
      : 'eval',
    context: sourcePath,
    entry: './index.js',
    output: {
      path: staticPath,
      filename: '[name].[hash:5].js'
    },
    module: {
      rules: [
        {
          test: /\.(css|less)$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[hash:base64:4]'
              }
            }, {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  pxtorem({
                    rootValue: 75,
                    propList: ['*']
                  }),
                  autoprefixer()
                ]
              }
            }
          ]
        }, {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }, {
          test: /\.(ejs)$/,
          use: 'ejs-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js'],
      modules: [
        'node_modules', sourcePath
      ],
      alias: {
        pages: path.resolve(__dirname, 'src/pages'),
        components: path.resolve(__dirname, 'src/components'),
        theme: path.resolve(__dirname, 'src/theme')
      }
    },
    devServer: {
      contentBase: staticPath,
      historyApiFallback: true,
      port: 8004,
      compress: production,
      hot: !production,
      stats: {
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true
      }
    }
  }
}
