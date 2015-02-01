
//
// 入口文件
//

// 所有模块都通过 define 来定义
define(['app_config'],function(app_config) {

  // 通过 exports 对外提供接口
  //exports.doSomething = ...

  var init = function(){
    console.log('init')
    if (document.body) {
      console.log('body loaded');
      return app.init();
    } else {
      return setTimeout(init, 42);
    }
  }

  var App = {
    docs_host: '',//http://baidu.com',//'localhost:3000',
    environment: 'dev',
    docs_prefix: 'data',
    version: ''
  };

  // 或者通过 module.exports 提供整个接口
  //module.exports = init
  window.App = App;
  return App;

});
