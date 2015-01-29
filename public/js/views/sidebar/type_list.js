// Generated by CoffeeScript 1.8.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.TypeList = (function(_super) {
    __extends(TypeList, _super);

    TypeList.tagName = 'div';

    TypeList.className = '_list _list-sub';

    TypeList.events = {
      open: 'onOpen',
      close: 'onClose'
    };

    function TypeList(doc) {
      this.doc = doc;
      this.onClose = __bind(this.onClose, this);
      this.onOpen = __bind(this.onOpen, this);
      TypeList.__super__.constructor.apply(this, arguments);
    }

    TypeList.prototype.init = function() {
      this.lists = {};
      this.render();
      this.activate();
    };

    TypeList.prototype.activate = function() {
      var list, slug, _ref;
      if (TypeList.__super__.activate.apply(this, arguments)) {
        _ref = this.lists;
        for (slug in _ref) {
          list = _ref[slug];
          list.activate();
        }
      }
    };

    TypeList.prototype.deactivate = function() {
      var list, slug, _ref;
      if (TypeList.__super__.deactivate.apply(this, arguments)) {
        _ref = this.lists;
        for (slug in _ref) {
          list = _ref[slug];
          list.deactivate();
        }
      }
    };

    TypeList.prototype.render = function() {
      return this.html(this.tmpl('sidebarType', this.doc.types.all()));
    };

    TypeList.prototype.onOpen = function(event) {
      var type;
      $.stopEvent(event);
      type = this.doc.types.findBy('slug', event.target.getAttribute('data-slug'));
      if (type && !this.lists[type.slug]) {
        this.lists[type.slug] = new app.views.EntryList(type.entries());
        $.after(event.target, this.lists[type.slug].el);
      }
    };

    TypeList.prototype.onClose = function(event) {
      var type;
      $.stopEvent(event);
      type = this.doc.types.findBy('slug', event.target.getAttribute('data-slug'));
      if (type && this.lists[type.slug]) {
        this.lists[type.slug].detach();
        delete this.lists[type.slug];
      }
    };

    TypeList.prototype.paginateTo = function(model) {
      var _ref;
      if (model.type) {
        if ((_ref = this.lists[model.getType().slug]) != null) {
          _ref.paginateTo(model);
        }
      }
    };

    return TypeList;

  })(app.View);

}).call(this);