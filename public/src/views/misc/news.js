// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.News = (function(_super) {
    __extends(News, _super);

    function News() {
      return News.__super__.constructor.apply(this, arguments);
    }

    News.className += ' _notif-news';

    News.defautOptions = {
      autoHide: null
    };

    News.prototype.init = function() {
      this.unreadNews = this.getUnreadNews();
      if (this.unreadNews.length) {
        this.show();
      }
      this.markAllAsRead();
    };

    News.prototype.render = function() {
      this.html(app.templates.notifNews(this.unreadNews));
    };

    News.prototype.getUnreadNews = function() {
      var news, time, _i, _len, _ref, _results;
      if (!(time = this.getLastReadTime())) {
        return [];
      }
      _ref = app.news;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        news = _ref[_i];
        if (new Date(news[0]).getTime() <= time) {
          break;
        }
        _results.push(news);
      }
      return _results;
    };

    News.prototype.getLastNewsTime = function() {
      return new Date(app.news[0][0]).getTime();
    };

    News.prototype.getLastReadTime = function() {
      return app.settings.get('news');
    };

    News.prototype.markAllAsRead = function() {
      app.settings.set('news', this.getLastNewsTime());
    };

    return News;

  })(app.views.Notif);

}).call(this);
