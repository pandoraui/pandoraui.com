
//
// 入口文件
//

define(['app_config'],function(app_config) {

  var config = {
    paths: app_config.paths
  };

  require.config(config);
  
  var modules = app_config.modules;
  var params = app_config.params;
  require(modules, function(params) {
    console.log('main: load modules')
  });

})