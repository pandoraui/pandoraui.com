
//
// 结构配置文件
//

define(function(require, exports, module) {
    var script = [
      'app_config',
      {'lib' : ['util', 'events', 'store', 'license']},
      //{'lib' : ['ajax', 'events', 'page', 'util', 'license']},
      {'app' : ['app']},
      //{'app' : ['router']},
      {'app' : ['config', 'settings']},
      // 'docs',
      // 'news',
      // {'app' : ['db', 'appcache', 'searcher', 'shortcuts']},
      // {'models' : ['model', 'doc', 'entry', 'type']},
      // {'views' : ['view', {
      //     'layout': ['document', 'mobile', 'nav', 'path'],
      //     'content': ['content', 'root_page', 'entry_page', 'static_page', 'offline_page', 'entry_page', 'type_page'],
      //     'sidebar': ['sidebar', 'sidebar_hover', 'results', 'doc_list', 'doc_picker', 'entry_list', 'type_list'],
      //     'pages': ['base'],
      //     'list': ['list_fold', 'list_select', 'list_focus', 'paginated_list'],
      //     'search': ['search', 'search_scope'],
      //     'misc': ['news', 'notice', 'notif']
      //   }]},
      // {'collections' : ['collection', 'docs', 'entries', 'types']},
      // {'templates' : ['base', 'error_tmpl', 'notice_tmpl', 'notif_tmpl', 'path_tmpl', 'sidebar_tmpl', 
      //     {'pages': ['about_tmpl', 'help_tmpl', 'new_tmpl', 'offline_tmpl', 'root_tmpl', 'type_tmpl']}
      //   ]
      // },
      //{'vendor': ['zepto', 'underscore']},
      //'debug',
      'application',
    ];

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
  var params = JSON.stringify(modules);
  params = params.replace(/[\[""\]]/g,'');

  var app_config = {
    paths: paths,
    modules: modules,
    params: params
  }

  module.exports = app_config;
})


