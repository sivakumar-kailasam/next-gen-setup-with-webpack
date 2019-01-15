const CleanWebpackPlugin = require('clean-webpack-plugin')

const babelLoader = {
  test: /\.m?js$/,
  exclude: /(node_modules)/,
  use: { loader: 'babel-loader' }
}

module.exports = {
  entry: {
    shopify: './lib/shopify/index.js',
    bigCommerce: './lib/big-commerce/index.js'
  },
  module: {
    rules: [babelLoader]
  },
  plugins: [new CleanWebpackPlugin(['dist'])]
}
