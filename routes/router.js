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
  // switch(req.mothod){
  //   case 'POST':
  //     update(req,res);
  //     break;
  //   case 'DELETE':
  //     remove(req,res);
  //     break;
  //   case 'PUT':
  //     create(req,res);
  //     break;
  //   case 'GET':
  //   default:
  //     get(req,res);

  // }
  app.get('/', function (req, res) {
    res.render('index',{list: jsonData.list});
  });
  app.get('/data/*.json', function (req, res) {
    fs.readFile('./data/category.json', 'utf-8', function(err, data) {
      if(err) {
          console.error(err);
      } else {
          res.end(data);// = JSON.parse(data);
      }
    });
  });

  
  
};
