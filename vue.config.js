const path = require('path');
let publicPath = process.env.NODE_ENV === 'production' ? 'sing-app-vue/' : '/';

module.exports = {
  publicPath,
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