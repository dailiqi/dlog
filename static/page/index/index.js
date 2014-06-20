seajs.config({
	base: "/static/",
	alias : {
		"jquery" : "/static/libs/jquery/dist/jquery.js",
	}
})
// var sidebar = seajs.require('/static/ui/sidebar/sidebar.js')
var sidebar = seajs.require('ui/sidebar/sidebar')
sidebar.init();
