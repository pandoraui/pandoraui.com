(function() {
  var supportsCssGradients,
    __slice = [].slice;

  this.app = {
    $: $,
    $$: $$,
    collections: {},
    models: {},
    templates: {},
    views: {},
    init: function() {
      console.log("init");
      try {
        this.initErrorTracking();
      } catch (_error) {

      }
      if (!this.browserCheck()) {
        return;
      }
      this.showLoading();
      this.store = new Store;
      if (app.AppCache.isEnabled()) {
        this.appCache = new app.AppCache;
      }
      this.settings = new app.Settings(this.store);
      this.docs = new app.collections.Docs;
      this.disabledDocs = new app.collections.Docs;
      this.entries = new app.collections.Entries;
      this.router = new app.Router;
      this.shortcuts = new app.Shortcuts;
      this.document = new app.views.Document;
      if (this.isMobile()) {
        this.mobile = new app.views.Mobile;
      }
      if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)) {
        document.documentElement.style.height = "" + window.innerHeight + "px";
      }
      if (this.DOC) {
        this.bootOne();
      } else if (this.DOCS) {
        this.bootAll();
      } else {
        this.onBootError();
      }
    },
    browserCheck: function() {
      if (this.isSupportedBrowser()) {
        return true;
      }
      document.body.className = '';
      document.body.innerHTML = app.templates.unsupportedBrowser;
      return false;
    },
    initErrorTracking: function() {
      if (this.isInvalidLocation()) {
        new app.views.Notif('InvalidLocation');
      } else {
        if (this.config.sentry_dsn) {
          Raven.config(this.config.sentry_dsn, {
            whitelistUrls: [/devdocs/],
            includePaths: [/devdocs/],
            ignoreErrors: [/dpQuery/]
          }).install();
        }
        this.previousErrorHandler = onerror;
        window.onerror = this.onWindowError.bind(this);
      }
    },
    bootOne: function() {
      console.log(this.DOC);
      this.doc = new app.models.Doc(this.DOC);
      this.docs.reset([this.doc]);
      this.doc.load(this.start.bind(this), this.onBootError.bind(this), {
        readCache: true
      });
      new app.views.Notice('singleDoc', this.doc);
      delete this.DOC;
    },
    bootAll: function() {
      console.log(this.DOCS);
      var doc, docs, _i, _len, _ref;
      docs = this.settings.getDocs();
      _ref = this.DOCS;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        doc = _ref[_i];
        (docs.indexOf(doc.slug) >= 0 ? this.docs : this.disabledDocs).add(doc);
      }
      this.docs.sort();
      this.disabledDocs.sort();
      this.docs.load(this.start.bind(this), this.onBootError.bind(this), {
        readCache: true,
        writeCache: true
      });
      delete this.DOCS;
    },
    start: function() {
      var doc, type, _i, _j, _len, _len1, _ref, _ref1;
      _ref = this.docs.all();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        doc = _ref[_i];
        this.entries.add(doc.toEntry());
        _ref1 = doc.types.all();
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          type = _ref1[_j];
          this.entries.add(type.toEntry());
        }
        this.entries.add(doc.entries.all());
      }
      this.db = new app.DB();
      this.trigger('ready');
      this.router.start();
      this.hideLoading();
      if (!this.doc) {
        this.welcomeBack();
      }
      this.removeEvent('ready bootError');
    },
    welcomeBack: function() {
      var visitCount;
      visitCount = this.settings.get('count');
      this.settings.set('count', ++visitCount);
      if (visitCount === 5) {
        new app.views.Notif('Share', {
          autoHide: null
        });
      }
      if (visitCount === 10) {
        new app.views.Notif('Thanks', {
          autoHide: null
        });
      }
      new app.views.News();
      return this.checkForDocUpdates();
    },
    checkForDocUpdates: function() {
      if (this.settings.get('autoUpdate')) {
        return this.docs.updateInBackground();
      } else {
        return this.docs.checkForUpdates(function(i) {
          if (i > 0) {
            return new app.views.Notif('UpdateDocs', {
              autoHide: null
            });
          }
        });
      }
    },
    reload: function() {
      this.docs.clearCache();
      this.disabledDocs.clearCache();
      if (this.appCache) {
        this.appCache.reload();
      } else {
        window.location = '/';
      }
    },
    reset: function() {
      var _ref;
      this.store.clear();
      this.settings.reset();
      this.db.reset();
      if ((_ref = this.appCache) != null) {
        _ref.update();
      }
      window.location = '/';
    },
    showLoading: function() {
      document.body.classList.remove('_noscript');
      document.body.classList.add('_loading');
    },
    hideLoading: function() {
      document.body.classList.remove('_booting');
      document.body.classList.remove('_loading');
    },
    indexHost: function() {
      return this.config[this.appCache && this.settings.hasDocs() ? 'index_path' : 'docs_host'];
    },
    onBootError: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this.trigger('bootError');
      this.hideLoading();
    },
    onWindowError: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.isInjectionError.apply(this, args)) {
        this.onInjectionError();
      } else if (this.isAppError.apply(this, args)) {
        if (typeof this.previousErrorHandler === "function") {
          this.previousErrorHandler.apply(this, args);
        }
        this.hideLoading();
        this.errorNotif || (this.errorNotif = new app.views.Notif('Error'));
        this.errorNotif.show();
      }
    },
    onInjectionError: function() {
      if (!this.injectionError) {
        this.injectionError = true;
        alert("JavaScript code has been injected in the page which prevents DevDocs from running correctly.\nPlease check your browser extensions/addons. ");
        Raven.captureMessage('injection error');
      }
    },
    isInjectionError: function() {
      return window.$ !== app.$ || window.$$ !== app.$$;
    },
    isAppError: function(error, file) {
      return file && file.indexOf('devdocs') !== -1 && file.indexOf('.js') === file.length - 3;
    },
    isSupportedBrowser: function() {
      var error, features, key, value;
      try {
        features = {
          bind: !!Function.prototype.bind,
          pushState: !!history.pushState,
          matchMedia: !!window.matchMedia,
          classList: !!document.body.classList,
          insertAdjacentHTML: !!document.body.insertAdjacentHTML,
          defaultPrevented: document.createEvent('CustomEvent').defaultPrevented === false,
          cssGradients: supportsCssGradients()
        };
        for (key in features) {
          value = features[key];
          if (!(!value)) {
            continue;
          }
          //TODO: Raven? https://github.com/getsentry/raven-js
          //Raven.captureMessage("unsupported/" + key);
          return false;
        }
        return true;
      } catch (_error) {
        error = _error;
        //TODO: Raven?
        // Raven.captureMessage('unsupported/exception', {
        //   extra: {
        //     error: error
        //   }
        // });
        return false;
      }
    },
    isSingleDoc: function() {
      return !!(this.DOC || this.doc);
    },
    isMobile: function() {
      try {
        return this._isMobile != null ? this._isMobile : this._isMobile = (window.matchMedia('(max-device-width: 767px), (max-device-height: 767px)').matches) || (navigator.userAgent.indexOf('Android') !== -1 && navigator.userAgent.indexOf('Mobile') !== -1) || (navigator.userAgent.indexOf('IEMobile') !== -1);
      } catch (_error) {
        return this._isMobile = false;
      }
    },
    isInvalidLocation: function() {
      return this.config.env === 'production' && location.host.indexOf(app.config.production_host) !== 0;
    }
  };

  supportsCssGradients = function() {
    var el;
    el = document.createElement('div');
    el.style.cssText = "background-image: -webkit-linear-gradient(top, #000, #fff); background-image: linear-gradient(to top, #000, #fff);";
    return el.style.backgroundImage.indexOf('gradient') >= 0;
  };

  $.extend(app, Events);

}).call(this);
