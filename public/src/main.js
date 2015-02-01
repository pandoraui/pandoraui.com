
//
// 入口文件
//

// define(function(require, exports, module) {
//   var app_config = require('app_config');
define(['app_config'],function(app_config) {

  var config = {
    paths: app_config.paths
  };

  require.config(config);
  //seajs.config(config);
  
  var modules = app_config.modules;
  var params = app_config.params;
  
  console.log(params)
  window.app = app = {}

  require(['app'], function(app) {
    console.log('ready')
    app.init();
  });

})