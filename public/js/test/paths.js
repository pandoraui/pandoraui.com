var script = [
  'application',
  'docs',
  'news',
  'debug', {
  'app' : ['app', 'config', 'router', 'settings', 'db', 'appcache', 'searcher', 'shortcuts'],
  'lib' : ['ajax', 'events', 'page', 'store', 'db', 'util', 'license'],
  'model' : ['model', 'doc', 'entry', 'rype'],
  'views' : ['view', {
      'layout': ['document', 'mobile', 'nav', 'path'],
      'content': ['content', 'root_page', 'entry_page', 'static_page', 'offine_page', 'entry_page', 'type_page'],
      'sidebar': ['sidebar', 'sidebar_hover', 'results', 'doc_list', 'doc_picker', 'entry_list', 'type_list'],
      'pages': ['base'],
      'list': ['list_fold', 'list_select', 'list_focus', 'paginated_list'],
      'search': ['search', 'search_scope'],
      'misc': ['news', 'notice', 'notif']
    }],
  'collections' : ['collection', 'docs', 'entries', 'types'],
  'templates' : ['base', 'error_tmpl', 'notice_tmpl', 'notif_tmpl', 'path_tmpl', 'sidebar_tmpl', {
      'pages': ['about_tmpl', 'help_tmpl', 'new_tmpl', 'offline_tmpl', 'root_tmpl', 'type_tmpl']
    }],
  'vendor': ['zepto', 'underscore']
}];

var paths = {};
script.forEach(function(item,i){
  if(_.isString(item)){
    paths[item] = item;
    return;
  }
  if(_.isObject(item)){
    for(var key in item){
      //var path = key;
      item[key].forEach(function(v){
        if(_.isString(v)){
          paths[v] = key + '/' + v;
          return;
        }
        if(_.isObject(v)){
          for(var key2 in v){
            //var path2 = key2;
            v[key2].forEach(function(j){
              if(_.isString(j)){
                paths[j] = key + '/' + key2 + '/' + j;
              }
            });
          }
        }
      });
    }
  }
});



JSON.stringify(paths)


{
  "application": "application",
  "docs": "collections/docs",
  "news": "views/misc/news",
  "debug": "debug",
  "app": "app/app",
  "config": "app/config",
  "router": "app/router",
  "settings": "app/settings",
  "db": "lib/db",
  "appcache": "app/appcache",
  "searcher": "app/searcher",
  "shortcuts": "app/shortcuts",
  "ajax": "lib/ajax",
  "events": "lib/events",
  "page": "lib/page",
  "store": "lib/store",
  "util": "lib/util",
  "license": "lib/license",
  "model": "model/model",
  "doc": "model/doc",
  "entry": "model/entry",
  "rype": "model/rype",
  "view": "views/view",
  "document": "views/layout/document",
  "mobile": "views/layout/mobile",
  "nav": "views/layout/nav",
  "path": "views/layout/path",
  "content": "views/content/content",
  "root_page": "views/content/root_page",
  "entry_page": "views/content/entry_page",
  "static_page": "views/content/static_page",
  "offine_page": "views/content/offine_page",
  "type_page": "views/content/type_page",
  "sidebar": "views/sidebar/sidebar",
  "sidebar_hover": "views/sidebar/sidebar_hover",
  "results": "views/sidebar/results",
  "doc_list": "views/sidebar/doc_list",
  "doc_picker": "views/sidebar/doc_picker",
  "entry_list": "views/sidebar/entry_list",
  "type_list": "views/sidebar/type_list",
  "base": "templates/base",
  "list_fold": "views/list/list_fold",
  "list_select": "views/list/list_select",
  "list_focus": "views/list/list_focus",
  "paginated_list": "views/list/paginated_list",
  "search": "views/search/search",
  "search_scope": "views/search/search_scope",
  "notice": "views/misc/notice",
  "notif": "views/misc/notif",
  "collection": "collections/collection",
  "entries": "collections/entries",
  "types": "collections/types",
  "error_tmpl": "templates/error_tmpl",
  "notice_tmpl": "templates/notice_tmpl",
  "notif_tmpl": "templates/notif_tmpl",
  "path_tmpl": "templates/path_tmpl",
  "sidebar_tmpl": "templates/sidebar_tmpl",
  "about_tmpl": "templates/pages/about_tmpl",
  "help_tmpl": "templates/pages/help_tmpl",
  "new_tmpl": "templates/pages/new_tmpl",
  "offline_tmpl": "templates/pages/offline_tmpl",
  "root_tmpl": "templates/pages/root_tmpl",
  "type_tmpl": "templates/pages/type_tmpl",
  "zepto": "vendor/zepto",
  "underscore": "vendor/underscore"
}