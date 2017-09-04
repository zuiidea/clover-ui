const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')

const sourcePath = path.resolve(__dirname, 'src')
const staticPath = path.resolve(__dirname, 'dist')
const modulesPath = path.resolve(__dirname, 'node_modules')
const componentsPath = path.resolve(__dirname, 'src/components')

module.exports = function (env) {
  const production = env === 'production'
  const plugins = [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.ejs'),
    minify: {
      collapseWhitespace: true,
    },
  })]

  if (production) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
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
          join_vars: true,
        },
        output: {
          comments: false,
        },
      }))
  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }


  const cssuse = [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: production ? '[hash:base64:4]' : '[local]__[hash:base64:2]',
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [
          pxtorem({
            rootValue: 75,
            propList: ['*'],
          }),
          autoprefixer(),
        ],
      },
    },
    'less-loader',
  ]

  return {
    plugins,
    devtool: production
      ? 'source-map'
      : 'eval',
    context: sourcePath,
    entry: './index.js',
    output: {
      path: staticPath,
      filename: '[name].[hash:5].js',
    },
    module: {
      rules: [
        {
          test: /\.(css|less)$/,
          exclude: [
            componentsPath,
            modulesPath,
          ],
          use: cssuse,
        },
        {
          test: /\.(css|less)$/,
          include: componentsPath,
          use: cssuse.map((item) => {
            if (item instanceof Object && item.loader === 'css-loader') {
              return {
                loader: 'css-loader',
                options: {
                  modules: false,
                },
              }
            }
            return item
          }),
        },
        {
          test: /\.(js|jsx)$/,
          exclude: modulesPath,
          use: 'babel-loader',
        }, {
          test: /\.(ejs)$/,
          use: 'ejs-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      modules: [
        'node_modules', sourcePath,
      ],
      alias: {
        components: componentsPath,
        pages: path.resolve(__dirname, 'src/pages'),
        theme: path.resolve(__dirname, 'src/theme'),
        utils: path.resolve(__dirname, 'src/utils'),
      },
    },
    devServer: {
      contentBase: staticPath,
      historyApiFallback: true,
      port: 8004,
      host: '0.0.0.0',
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
        warnings: true,
      },
    },
  }
}
