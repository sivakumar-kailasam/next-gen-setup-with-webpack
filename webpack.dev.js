const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  entry: {
    shopifyDevScript: './src/shopify/index.js',
    bigCommerceDevScript: './src/big-commerce/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Shopify testing page',
      template: './src/shopify/index.html',
      filename: 'shopify.html',
      chunks: ['shopifyDevScript', 'shopify'],
      chunksSortMode: 'manual'
    }),
    new HtmlWebpackPlugin({
      title: 'BigCommerce testing page',
      template: './src/big-commerce/index.html',
      filename: 'big-commerce.html',
      chunks: ['bigCommerceDevScript', 'bigCommerce'],
      chunksSortMode: 'manual'
    })
  ]
})
