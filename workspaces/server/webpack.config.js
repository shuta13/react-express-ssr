const path = require('path');
const webpackConfigBase = require('../../webpack.config.base');

module.exports = {
  ...webpackConfigBase,
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../../dist'),
  },
};
