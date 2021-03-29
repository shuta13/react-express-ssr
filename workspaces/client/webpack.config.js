const path = require('path');
const webpackConfigBase = require('../../webpack.config.base');

module.exports = {
  ...webpackConfigBase,
  output: {
    filename: 'static/js/bundle.js',
    path: path.resolve(__dirname, '../../dist/public'),
  },
};
