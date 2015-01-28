// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.EntryList = (function(_super) {
    __extends(EntryList, _super);

    EntryList.tagName = 'div';

    EntryList.className = '_list _list-sub';

    function EntryList(entries) {
      this.entries = entries;
      EntryList.__super__.constructor.apply(this, arguments);
    }

    EntryList.prototype.init = function() {
      this.renderPaginated();
      this.activate();
    };

    EntryList.prototype.render = function(entries) {
      return this.tmpl('sidebarEntry', entries);
    };

    return EntryList;

  })(app.views.PaginatedList);

}).call(this);
