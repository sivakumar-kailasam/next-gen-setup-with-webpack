const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Shopify testing page',
      filename: 'shopify.html',
      chunks: ['shopify']
    }),
    new HtmlWebpackPlugin({
      title: 'BigCommerce testing page',
      filename: 'big-commerce.html',
      chunks: ['bigCommerce']
    })
  ]
})
