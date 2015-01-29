// Generated by CoffeeScript 1.8.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.Notif = (function(_super) {
    __extends(Notif, _super);

    Notif.className = '_notif';

    Notif.activeClass = '_in';

    Notif.defautOptions = {
      autoHide: 15000
    };

    Notif.events = {
      click: 'onClick'
    };

    function Notif(type, options) {
      this.type = type;
      this.options = options != null ? options : {};
      this.onClick = __bind(this.onClick, this);
      this.options = $.extend({}, this.constructor.defautOptions, this.options);
      Notif.__super__.constructor.apply(this, arguments);
    }

    Notif.prototype.init = function() {
      this.show();
    };

    Notif.prototype.show = function() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = this.delay(this.hide, this.options.autoHide);
      } else {
        this.render();
        this.position();
        this.activate();
        this.appendTo(document.body);
        this.el.offsetWidth;
        this.addClass(this.constructor.activeClass);
        if (this.options.autoHide) {
          this.timeout = this.delay(this.hide, this.options.autoHide);
        }
      }
    };

    Notif.prototype.hide = function() {
      clearTimeout(this.timeout);
      this.timeout = null;
      this.detach();
    };

    Notif.prototype.render = function() {
      this.html(this.tmpl("notif" + this.type));
    };

    Notif.prototype.position = function() {
      var lastNotif, notifications;
      notifications = $$("." + app.views.Notif.className);
      if (notifications.length) {
        lastNotif = notifications[notifications.length - 1];
        this.el.style.top = lastNotif.offsetTop + lastNotif.offsetHeight + 16 + 'px';
      }
    };

    Notif.prototype.onClick = function(event) {
      if (event.target.tagName !== 'A') {
        $.stopEvent(event);
        this.hide();
      }
    };

    return Notif;

  })(app.View);

}).call(this);