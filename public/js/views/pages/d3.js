// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.D3Page = (function(_super) {
    __extends(D3Page, _super);

    function D3Page() {
      return D3Page.__super__.constructor.apply(this, arguments);
    }

    D3Page.prototype.afterRender = function() {
      this.highlightCode(this.findAll('.highlight > pre'), 'javascript');
    };

    return D3Page;

  })(app.views.BasePage);

}).call(this);
