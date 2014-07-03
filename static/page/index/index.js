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
	//在这里只能使用ajax，不能使用getJSON，会出现 null的情况，具体原因未知，应该是callback函数未能挂载到匿名mod上的原因
	$.ajax({
		url:"/list",
		success:function(res) {
			var Summary = require('ui/summary/summary').Summary;
			var summary0 = new Summary('#container',0,res);
			summary0.render();
			var summary1 = new Summary('#container',1,res);
			summary1.render();
			var summary2 = new Summary('#container',2,res);
			summary2.render();
			var summary3 = new Summary('#container',3,res);
			summary3.render();
			// console.log(summary);
		}})
})
seajs.use('page/index/index');
