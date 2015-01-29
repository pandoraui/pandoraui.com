// Generated by CoffeeScript 1.8.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.RootPage = (function(_super) {
    __extends(RootPage, _super);

    function RootPage() {
      this.onClick = __bind(this.onClick, this);
      return RootPage.__super__.constructor.apply(this, arguments);
    }

    RootPage.events = {
      click: 'onClick'
    };

    RootPage.prototype.init = function() {
      if (!this.isHidden()) {
        this.setHidden(false);
      }
      this.render();
    };

    RootPage.prototype.render = function() {
      this.empty();
      if (app.isMobile()) {
        this.append(this.tmpl('mobileNav'));
      }
      this.append(this.tmpl(this.isHidden() ? 'splash' : app.isMobile() ? 'mobileIntro' : 'intro'));
    };

    RootPage.prototype.hideIntro = function() {
      this.setHidden(true);
      this.render();
    };

    RootPage.prototype.setHidden = function(value) {
      app.settings.set('hideIntro', value);
    };

    RootPage.prototype.isHidden = function() {
      return app.isSingleDoc() || app.settings.get('hideIntro');
    };

    RootPage.prototype.onRoute = function() {};

    RootPage.prototype.onClick = function(event) {
      if (event.target.hasAttribute('data-hide-intro')) {
        $.stopEvent(event);
        this.hideIntro();
      }
    };

    return RootPage;

  })(app.View);

}).call(this);