const path = require('path');
const webpackConfigBase = require('../../webpack.config.base');

module.exports = {
  ...webpackConfigBase,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
