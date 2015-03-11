// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.models.Doc = (function(_super) {
    __extends(Doc, _super);

    function Doc() {
      Doc.__super__.constructor.apply(this, arguments);
      this.reset(this);
      this.text = this.name.toLowerCase();
    }

    Doc.prototype.reset = function(data) {
      this.resetEntries(data.entries);
      this.resetTypes(data.types);
    };

    Doc.prototype.resetEntries = function(entries) {
      this.entries = new app.collections.Entries(entries);
      this.entries.each((function(_this) {
        return function(entry) {
          return entry.doc = _this;
        };
      })(this));
    };

    Doc.prototype.resetTypes = function(types) {
      this.types = new app.collections.Types(types);
      this.types.each((function(_this) {
        return function(type) {
          return type.doc = _this;
        };
      })(this));
    };

    Doc.prototype.fullPath = function(path) {
      if (path == null) {
        path = '';
      }
      if (path[0] !== '/') {
        path = "/" + path;
      }
      return "/" + this.slug + path;
    };

    Doc.prototype.fileUrl = function(path) {
      return "" + app.config.docs_host + (this.fullPath(path));// + "?" + this.mtime;
    };

    Doc.prototype.dbUrl = function() {
      return "" + app.config.docs_host + "/" + this.db_path + "?" + this.mtime;
    };

    Doc.prototype.indexUrl = function() {
      var url = "" + (app.indexHost()) + "/" + this.index_path + "?" + this.mtime;
      console.log('ajaxUrl:'+url);
      return url;
    };

    Doc.prototype.toEntry = function() {
      return new app.models.Entry({
        doc: this,
        name: this.name,
        path: 'index'
      });
    };

    Doc.prototype.findEntryByPathAndHash = function(path, hash) {
      var entry;
      if (hash && (entry = this.entries.findBy('path', "" + path + "#" + hash))) {
        return entry;
      } else if (path === 'index') {
        return this.toEntry();
      } else {
        return this.entries.findBy('path', path);
      }
    };

    Doc.prototype.load = function(onSuccess, onError, options) {
      console.log('Doc load')
      var callback;
      if (options == null) {
        options = {};
      }
      if (options.readCache && this._loadFromCache(onSuccess)) {
        return;
      }
      callback = (function(_this) {
        return function(data) {
          _this.reset(data);
          onSuccess();
          if (options.writeCache) {
            _this._setCache(data);
          }
        };
      })(this);
      return ajax({
        url: this.indexUrl(),
        success: callback,
        error: onError
      });
    };

    Doc.prototype.clearCache = function() {
      app.store.del(this.slug);
    };

    Doc.prototype._loadFromCache = function(onSuccess) {
      var callback, data;
      if (!(data = this._getCache())) {
        return;
      }
      callback = (function(_this) {
        return function() {
          _this.reset(data);
          onSuccess();
        };
      })(this);
      setTimeout(callback, 0);
      return true;
    };

    Doc.prototype._getCache = function() {
      var data;
      if (!(data = app.store.get(this.slug))) {
        return;
      }
      if (data[0] === this.mtime) {
        return data[1];
      } else {
        this.clearCache();
      }
    };

    Doc.prototype._setCache = function(data) {
      app.store.set(this.slug, [this.mtime, data]);
    };

    Doc.prototype.install = function(onSuccess, onError) {
      var error, success;
      if (this.installing) {
        return;
      }
      this.installing = true;
      error = (function(_this) {
        return function() {
          _this.installing = null;
          onError();
        };
      })(this);
      success = (function(_this) {
        return function(data) {
          _this.installing = null;
          app.db.store(_this, data, onSuccess, error);
        };
      })(this);
      ajax({
        url: this.dbUrl(),
        success: success,
        error: error,
        timeout: 3600
      });
    };

    Doc.prototype.uninstall = function(onSuccess, onError) {
      var error, success;
      if (this.installing) {
        return;
      }
      this.installing = true;
      success = (function(_this) {
        return function() {
          _this.installing = null;
          onSuccess();
        };
      })(this);
      error = (function(_this) {
        return function() {
          _this.installing = null;
          onError();
        };
      })(this);
      app.db.unstore(this, success, error);
    };

    Doc.prototype.getInstallStatus = function(callback) {
      app.db.version(this, function(value) {
        return callback({
          installed: !!value,
          mtime: value
        });
      });
    };

    Doc.prototype.isOutdated = function(status) {
      return status.installed && this.mtime !== status.mtime;
    };

    return Doc;

  })(app.Model);

}).call(this);
