var script = [
    'application',
    'docs',
    'news',
    'debug', {
    'app' : ['app', 'config', 'router', 'settings', 'db', 'appcache', 'searcher', 'shortcuts'],
    'lib' : ['ajax', 'events', 'page', 'store', 'db', 'util', 'license'],
    'model' : ['model', 'doc', 'entry', 'type'],
    'views' : ['view', {
        'layout': ['document', 'mobile', 'nav', 'path'],
        'content': ['content', 'root_page', 'entry_page', 'static_page', 'offine_page', 'type_page'],
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

function isString(str){
  return  Object.prototype.toString.call(str) === "[object String]"
}

var paths = {};
var modules = [];
script.forEach(function(item,i){
  if(isString(item)){
    paths[item] = item;
    modules.push(item);
    return;
  }else{
    for(var key in item){
      //var path = key;
      item[key].forEach(function(v){
        if(isString(v)){
          paths[v] = key + '/' + v;
          modules.push(v);
        } else {
          for(var key2 in v){
            //var path2 = key2;
            v[key2].forEach(function(j){
              if(isString(j)){
                paths[j] = key + '/' + key2 + '/' + j;
                modules.push(j);
              }
            });
          }
        }
      });
    }
  }
});

JSON.stringify(paths);
var modules = JSON.stringify(modules);
var params = modules.replace(/[\[""\]]/g,'')

