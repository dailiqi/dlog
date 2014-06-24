define('ui/sidebar/sidebar',function(require, exports, module) {
	alert(1);
	var data = require('./data');
  var $ = require('jquery');
  var Sidebar = function (container) {
    this._container = $(container);
  }
  Sidebar.prototype.init = function() {
    this._container.append('<div>sidebar init</div>');
  };
  // 模块代码
  // var a = require('./a'); 
  //exports是module.exports的一个引用，只能通过赋值来添加
  // exports.foo = 'bar';
  exports.Sidebar = Sidebar;
  //module.exports支持覆盖赋值
  // module.exports = {
  //   foo: 'bar'
  // }
});

// // var Sidebar = {};
// // Sidebar.prototype.init = function() {
// //   alert('Sidebar init');
// // };
// // Module.exports = Sidebar;

// define('ui/sidebar/sidebar',function(require, exports, module) {

//   // 通过 require 引入依赖
//   // var $ = require('jquery');
//   // var Spinning = require('./spinning');
//   // var Sidebar = {};
//   // 通过 exports 对外提供接口
//   // exports.doSomething = ...
//   exports.init = function() {
//    alert('init');
//   }
//   var Sidebar = function (container) {
//    this._container = $(container);
//   }
//   module.exports = Sidebar;

//   // 或者通过 module.exports 提供整个接口
//   // module.exports =Sidebar;

// });