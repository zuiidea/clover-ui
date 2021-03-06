const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const sourcePath = path.resolve(__dirname, 'src/example')
const staticPath = path.resolve(__dirname, 'exampleDist')
const modulesPath = path.resolve(__dirname, 'node_modules')
const componentsPath = path.resolve(__dirname, 'src')

module.exports = function (env) {
  const production = env === 'production'
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'example/index.ejs'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(production ? 'production' : 'development'),
      },
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'example/public'),
      to: staticPath,
    }]),
  ]

  if (production) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.optimize.UglifyJsPlugin(),
    )
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
    )
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
          autoprefixer(),
          pxtorem({
            propList: ['*'],
            rootValue: 75,
          }),
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
    entry: path.resolve(__dirname, 'example/index.js'),
    output: {
      path: staticPath,
      filename: '[name].[hash:8].js',
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
        'clover-ui': componentsPath,
        theme: path.resolve(__dirname, 'src/theme'),
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
