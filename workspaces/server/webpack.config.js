const path = require('path');
const webpackConfigBase = require('../webpack.config.base');

module.exports = {
  ...webpackConfigBase,
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
