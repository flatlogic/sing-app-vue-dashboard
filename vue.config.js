const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  publicPath: 'sing-app-vue/',
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const terserWebpackPlugin = config.optimization.minimizer[0];
      const terserOptions = terserWebpackPlugin.options.terserOptions;
      terserOptions.mangle = {
        reserved: ['$super']
      };
    }
    config.resolve.alias["jquery"] = path.join(__dirname, "./jqueryStub.js");
  }
};