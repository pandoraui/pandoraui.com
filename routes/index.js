var Mock = require("mockjs");
var fs = require('fs');

var db_path = "./data/docs.json";
var jsonData = {};//= JSON.parse(fs.readFileSync(db_path+'docs.json',"utf-8"));

// var readstream = fs.createReadStream(path, options);
// fs.ReadStream(db_path, options);

fs.readFile(db_path, 'utf-8', function(err, data) {
    if(err) {
        console.error(err);
    } else {
        jsonData = JSON.parse(data);
    }
});

exports.index = function(req, res){
  // var template = {
  //   "errno": 0,
  //   "msg": "",
  //   "data|10": [{
  //     "id|+1": 1,
  //     "img": "@img(24x24)",
  //     "name|1": ["html", "css", "框架/类库", "开发/调试工具", "性能/测试"],
  //     "sulg|1": ["html", "css", "dom", "javascript", "backbone", "node", "sass", "less"],
  //     "icon|1": ["html", "css", "dom", "javascript", "backbone", "node", "sass", "less"],
  //     "parentid": 0,
  //     "rank|1-6": 1,
  //     "quality|1-100": 1,
  //     "add_date": "@date",
  //     "last_modified": "@date",
  //     "sublist|5-10": [{
  //       "id|+1": 7,
  //       "img": "@img(24x24)",
  //       "name|1": ["html", "css", "框架", "类库", "开发", "调试工具", "性能", "测试"],
  //       "enname|1": ["html", "css", "dom", "javascript", "backbone", "node", "sass", "less"],
  //       "parentid|1-6": 1,
  //       "rank|1-6": 1,
  //       "quality|1-100": 1,
  //       "add_date": "@date",
  //       "last_modified": "@date",
  //     }]
  //   }]
  // };

  //var jsonData = Mock.mock(template);
  //debugger;
  //console.log(jsonData);
  res.render('index',{list: jsonData.list});
};