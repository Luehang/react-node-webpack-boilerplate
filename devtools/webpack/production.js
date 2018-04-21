const path = require('path');
const plugins = require('./plugins');

module.exports = (config) => {
  return {
    entry: {
      index: path.resolve('src/index.js'),
      testPageTwo: path.resolve('src/second.js'),
      vendor: ['react', 'react-dom'],
    },

    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: plugins.ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [
                    path.resolve('node_modules/xbem/src'),
                    path.resolve(`src/gui/layout`),
                    path.resolve(`src/gui/themes/${config.theme}`),
                    path.resolve(`src/gui/themes/${config.theme}/fonts`),
                    path.resolve(`src/gui/themes/${config.theme}/patterns`)
                  ],
                },
              },
            ],
          }),
        },
      ],
    },

    output: {
      path: path.resolve(process.cwd(), 'public'),
      filename: 'javascripts/[name].[chunkhash].js',
      publicPath: '/'
    },

    plugins: [
      ...(config.analysis ? [ plugins.BundleAnalyzerPlugin ] : []),
      plugins.HashedModuleIdsPlugin,
      plugins.WebpackChunkHash,
      plugins.ExtractTextPlugin,
      plugins.ImageminPlugin(config.environment),
    ],
  };
};
