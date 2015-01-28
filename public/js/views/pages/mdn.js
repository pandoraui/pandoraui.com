// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.MdnPage = (function(_super) {
    var LANGUAGE_REGEXP;

    __extends(MdnPage, _super);

    function MdnPage() {
      return MdnPage.__super__.constructor.apply(this, arguments);
    }

    MdnPage.className = '_mdn';

    LANGUAGE_REGEXP = /brush: ?(\w+)/;

    MdnPage.prototype.afterRender = function() {
      var el, language, _i, _len, _ref;
      _ref = this.findAll('pre[class^="brush"]');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        el = _ref[_i];
        language = el.className.match(LANGUAGE_REGEXP)[1].replace('html', 'markup').replace('js', 'javascript');
        el.className = '';
        this.highlightCode(el, language);
      }
    };

    return MdnPage;

  })(app.views.BasePage);

}).call(this);
