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

/* GET home page. */
module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index',{list: jsonData.list});
  });
  app.get('*', function (req, res) {
    res.render('index',{list: jsonData.list});
  });
  
};
