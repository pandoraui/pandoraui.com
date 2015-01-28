
(function() {
  var MONTHS, newsItem;

  app.templates.newsPage = function() {
    return " <h1 class=\"_lined-heading\">Changelog</h1>\n<p class=\"_note\">For the latest news,\n  subscribe to the <a href=\"http://eepurl.com/HnLUz\">newsletter</a>\n  or follow <a href=\"https://twitter.com/DevDocs\">@DevDocs</a>.<br>\n  For development updates, follow the project on <a href=\"https://github.com/Thibaut/devdocs\">GitHub</a>.\n<div class=\"_news\">" + (app.templates.newsList(app.news)) + "</div> ";
  };

  app.templates.newsList = function(news) {
    var date, result, value, year, _i, _len;
    year = new Date().getUTCFullYear();
    result = '';
    for (_i = 0, _len = news.length; _i < _len; _i++) {
      value = news[_i];
      date = new Date(value[0]);
      if (year !== date.getUTCFullYear()) {
        year = date.getUTCFullYear();
        result += "<h4>" + year + "</h4>";
      }
      result += newsItem(date, value.slice(1));
    }
    return result;
  };

  MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  newsItem = function(date, news) {
    var i, result, text, title, _i, _len;
    date = "<span class=\"_news-date\">" + MONTHS[date.getUTCMonth()] + " " + (date.getUTCDate()) + "</span>";
    result = '';
    for (i = _i = 0, _len = news.length; _i < _len; i = ++_i) {
      text = news[i];
      text = text.split("\n");
      title = "<span class=\"_news-title\">" + (text.shift()) + "</span>";
      result += "<div class=\"_news-row\">" + (i === 0 ? date : '') + " " + title + " " + (text.join('<br>')) + "</div>";
    }
    return result;
  };

  app.news = App.news.to_json;

}).call(this);
