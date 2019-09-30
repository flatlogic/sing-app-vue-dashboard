const path = require('path');

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        // this is an workaround of jquery requirement for the vue-bootstrap-slide library
        "jquery": path.join(__dirname, "./jqueryStub.js")
      }
    }
  }
};