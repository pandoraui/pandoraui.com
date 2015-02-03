// Generated by CoffeeScript 1.8.0
(function() {
  app.templates.typePage = function(type) {
    return " <h1>" + type.doc.name + " / " + type.name + "</h1>\n<ul class=\"_entry-list\">" + (app.templates.render('typePageEntry', type.entries())) + "</ul> ";
  };

  app.templates.typePageEntry = function(entry) {
    return "<li><a href=\"" + (entry.fullPath()) + "\">" + ($.escape(entry.name)) + "</a></li>";
  };

}).call(this);