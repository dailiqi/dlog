seajs.config({
	base: "/static/",
	alias : {
		"jquery" : "libs/jquery/dist/jquery.js"
	}
})
// var sidebar = seajs.require('/static/ui/sidebar/sidebar.js')
// var sidebar = seajs.require('ui/sidebar/sidebar')
// sidebar.init();

// seajs.use('ui/sidebar/main',function () {

// 	alert(2);
// 	// body...
// });
// seajs.use('ui/sidebar/main' , function() {
// })
// require('ui/sidebar/main');
define('page/index/index' ,function(require,exports,module) {
	var Toolbar = require('ui/toolbar/toolbar').Toolbar;
	var toolbar = new Toolbar('#container');
	toolbar.render();
	// var toolbar = new Toolbar();
	// var sidebar = require('ui/sidebar/sidebar')
	// console.log(sidebar);
})
seajs.use('page/index/index');