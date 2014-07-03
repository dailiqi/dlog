define('ui/toolbar/toolbar',function(require, exports, module) {
  var $ = require('jquery');
  function Toolbar(container) {
    this._container = $(container);
  }

  exports.Toolbar = Toolbar;
  Toolbar.prototype.render = function() {
    this._init();
    // this._container.append('<div>sidebar init</div>');
    this._render();
    this._createChild();
  };

  Toolbar.prototype._init = function() {
    
  };
  
  Toolbar.prototype._render = function() {
    var _css = {
      "display" : "block",
      "position" : "fixed",
      "top":"0px",
      "right" : "0px",
      "width" : "600px",
      "height" : "90px",
      "padding" : "5px",
      "opacity": "0.5",
      "filter": "alpha(opacity=50)",
      "background": "#CCC"
    };
    this._wrapper = $('<div></div>');
    this._wrapper.css(_css);
    this._container.append(this._wrapper);
  };
  Toolbar.prototype._createChild = function() {
    var $ul = $('<ul></ul>');
    var data = require('./data');
    for (var index in data) {
      $ul.append('<li>' +data[index]+ '</li>');   
    };
    var _licss = {
      "display" : "inline-block",
      "width" : "80px",
      "height" : "80px",
      "float" : "left",
      "margin-right" : "15px",
      "background-color" : "green",
      "opacity": "0.9",
      "filter": "alpha(opacity=90)",
    }
    $ul.children('li').css(_licss);
    this._wrapper.append($ul);
  };
});