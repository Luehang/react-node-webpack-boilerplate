const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const WebpackChunkHash = require('webpack-chunk-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

plugins = {
  CleanWebpackPlugin:
    new CleanWebpackPlugin([
      path.resolve('public/'),
      path.resolve('views/pages/')
    ], {
      root: process.cwd(),
      watch: false
    }),

  HtmlIndexPlugin:
    new HtmlWebpackPlugin({
      title: 'React App',
      appMountId: 'root',
      inlineManifestWebpackName: 'webpackManifest',
      //template: path.resolve('src/index.template.hbs'),
      chunks: ['vendor', 'index'],
      filename: path.resolve('views/pages/index.hbs'),
      template: HtmlWebpackTemplate,
      favicon: path.resolve('src/favicon.ico'),
      //minify: { collapseWhitespace: true },
      //inject: false,
      inject: 'body',
    }),

  HtmlTestPageTwoPlugin:
    new HtmlWebpackPlugin({
      title: 'React App',
      appMountId: 'root',
      inlineManifestWebpackName: 'webpackManifest',
      //template: path.resolve('src/index.template.hbs'),
      chunks: ['vendor', 'testPageTwo'],
      filename: path.resolve('views/pages/secondpage.hbs'),
      template: HtmlWebpackTemplate,
      favicon: path.resolve('src/favicon.ico'),
      //minify: { collapseWhitespace: true },
      //inject: false,
      inject: 'body',
    }),

  HashedModuleIdsPlugin:
    new webpack.HashedModuleIdsPlugin(),

  WebpackChunkHash:
    new WebpackChunkHash(),

  ExtractTextPlugin:
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true,
    }),

  HotModuleReplacementPlugin:
    new webpack.HotModuleReplacementPlugin(),

  BundleAnalyzerPlugin:
    new BundleAnalyzerPlugin(),
};

plugins.ImageminPlugin = (environment) => {
  return new ImageminPlugin({
    disable: environment !== 'production', // Disable during development
  });
}

module.exports = plugins;