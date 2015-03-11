
(function() {
  app.Settings = (function() {
    var DARK_KEY, DOCS_KEY, SETTINGS_KEY, SIZE_KEY;

    SETTINGS_KEY = 'settings';

    DOCS_KEY = 'docs';

    DARK_KEY = 'dark';

    SIZE_KEY = 'size';

    Settings.defaults = function() {
      return {
        count: 0,
        hideDisabled: false,
        hideIntro: false,
        news: 0,
        autoUpdate: true
      };
    };

    function Settings(store) {
      this.store = store;
      if (!(this.settings = this.store.get(SETTINGS_KEY))) {
        this.create();
      }
    }

    Settings.prototype.create = function() {
      this.settings = this.constructor.defaults();
      this.applyLegacyValues(this.settings);
      this.save();
    };

    Settings.prototype.applyLegacyValues = function(settings) {
      var key, v, value;
      for (key in settings) {
        v = settings[key];
        if (!((value = this.store.get(key)) != null)) {
          continue;
        }
        settings[key] = value;
        this.store.del(key);
      }
    };

    Settings.prototype.save = function() {
      return this.store.set(SETTINGS_KEY, this.settings);
    };

    Settings.prototype.set = function(key, value) {
      this.settings[key] = value;
      return this.save();
    };

    Settings.prototype.get = function(key) {
      return this.settings[key];
    };

    Settings.prototype.hasDocs = function() {
      try {
        return !!Cookies.get(DOCS_KEY);
      } catch (_error) {}
    };

    Settings.prototype.getDocs = function() {
      var _ref,
          default_docs = app.config.default_docs;
      try {
        default_docs = ((_ref = Cookies.get(DOCS_KEY)) != null ? _ref.split('/') : void 0) || default_docs;
        console.log(default_docs);
        return default_docs;
      } catch (_error) {
        console.log(default_docs);
        return default_docs;
      }
    };

    Settings.prototype.setDocs = function(docs) {
      try {
        Cookies.set(DOCS_KEY, docs.join('/'), {
          path: '/',
          expires: 1e8
        });
      } catch (_error) {

      }
    };

    Settings.prototype.setDark = function(value) {
      try {
        if (value) {
          Cookies.set(DARK_KEY, '1', {
            path: '/',
            expires: 1e8
          });
        } else {
          Cookies.expire(DARK_KEY);
        }
      } catch (_error) {

      }
    };

    Settings.prototype.setSize = function(value) {
      try {
        Cookies.set(SIZE_KEY, value, {
          path: '/',
          expires: 1e8
        });
      } catch (_error) {

      }
    };

    Settings.prototype.reset = function() {
      try {
        Cookies.expire(DOCS_KEY);
      } catch (_error) {}
      try {
        Cookies.expire(DARK_KEY);
      } catch (_error) {}
      try {
        Cookies.expire(SIZE_KEY);
      } catch (_error) {}
      try {
        this.store.del(SETTINGS_KEY);
      } catch (_error) {}
    };

    return Settings;

  })();

}).call(this);
