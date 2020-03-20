let publicPath = process.env.NODE_ENV === 'production' ? 'sing-app-vue-dashboard/' : '/';

module.exports = {
  publicPath,
  productionSourceMap: false,
};
