
//
// 入口文件
//

//define(function() {
(function() {
  var init;

  init = function() {
    //console.log('js ready');
    document.removeEventListener('DOMContentLoaded', init, false);
    if (document.body) {
      console.log('body loaded');
      return app.init();
    } else {
      return setTimeout(init, 42);
    }
  };

  document.addEventListener('DOMContentLoaded', init, false);
}).call(this);
//});

/*
// 所有模块都通过 define 来定义
define(function(require, exports, module) {

  // 通过 require 引入依赖
  var $ = require('jquery');
  var Spinning = require('./spinning');

  // 通过 exports 对外提供接口
  exports.doSomething = ...

  // 或者通过 module.exports 提供整个接口
  module.exports = ...

});
*/