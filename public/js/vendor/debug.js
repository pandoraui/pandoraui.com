
//
// debug 
//

// 所有模块都通过 define 来定义
define(function(require, exports, module) {
  
  console.log("debug");

  // 通过 require 引入依赖
  var Zepto = require('zepto');
  var Raven = require('raven');
  var Prism = require('prism');
  var FastClick = require('fastclick');

  // 通过 exports 对外提供接口
  //exports.doSomething = ...
  
  var seaApp = function(){
    console.log("seaApp");
  };

  // 或者通过 module.exports 提供整个接口
  module.exports = seaApp

});