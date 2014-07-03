define('ui/summary/summary',function(require, exports, module) {
	// var jade = require('jade');
	var $ = require('jquery');
	function Summary($container,index,subject) {

		this._container = $container;
		this._index = index;//从0开始
		this._title = subject.title;
		this._content = subject.content;
		this._type = subject.type;
	}
	exports.Summary = Summary;
	Summary.prototype.render = function() {
		this._init();
		this._position();
    this._render();
    this._createChild();
  };
  Summary.prototype._init = function() {
  	//设定基本样式
  	this._width = 350;
  	this._height = 250;
  	this._titleHeight = 50;
  	this._marginright = 15;
  	this._margin = 15;
  	this._top = 0;
  	this._left = 0;
  	this._$element = $('<div></div>');
  	this._$element.css('display','none');
  	this._$element.html(this._content);
  	this._$element.appendTo(this._container);

  };
  Summary.prototype._position = function() {
  	// var width = $(body).css('width');
  	var width = document.body.clientWidth
  	var rowSize = width/(this._width + this._margin);//每行的个数
  	var row = (this._index)/rowSize + 1;
  	var column = (this._index)%rowSize;//所属第几column 0开始
  	this._top = (row - 1) * (this._height + this._margin);
  	this._left = (this._width + this._margin) * column - this._margin;
  };

	Summary.prototype._render = function() {
		this._$element.css({
			width:this._width + 'px',
			height : this._height + 'px',
			margin : this._margin + 'px',
			display : 'block',
			'background-color': 'red',
			position : 'absolute',
			top : this._top + 'px',
			left: this._left + 'px',
		})
	};

  Summary.prototype._createChild = function() {
  };
  Summary.prototype.show = function() {
  	this._$element.show();
  };
  Summary.prototype.hide = function() {
  	this._$element.hide();
  };
});