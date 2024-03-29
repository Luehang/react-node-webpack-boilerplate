const path = require('path');
const merge = require('webpack-merge');
const plugins = require('./webpack/plugins');

module.exports = (params) => {
  const config = {
    environment: (params && params.environment) ? params.environment : 'development',
    theme: (params && params.theme) ? params.theme : 'default',
    analysis: (params && params.analysis) ? params.analysis : false,
  };

  console.info('*** Environment', config.environment);
  console.info('*** Analysis', config.analysis);
  console.info('*** Theme', config.theme);

  return merge({
    context: path.resolve('src'),

    mode: config.environment,

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'assets/',
              },
            }
          ],
        },
        {
          test: /\.(ico|ttf|woff|woff2|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts/',
              },
            }
          ],
        }
      ],
    },

    resolve: {
      extensions: ['.js', '.json', '.css', '.scss'],
      modules: [path.resolve('src'), 'node_modules'],
      alias: {
        components: path.resolve('src/components'),
        modules: path.resolve('src/modules'),
        libs: path.resolve('src/libs'),
      },
    },

    plugins: [
      plugins.CleanWebpackPlugin,
      plugins.HtmlIndexPlugin,
      plugins.HtmlTestPageTwoPlugin
    ],

    optimization: {
      splitChunks: {
          name: 'vendor',
          chunks: 'all',
      },
    },
  }, require('./webpack/' + config.environment)(config));
};
