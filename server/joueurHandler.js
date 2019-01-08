var http = require('http');
var url = require('url');

function savePerso(response, request){
  console.log("test");
  var params = url.parse(request.url).query;
  var fs = require('fs');
  var params = decodeURIComponent(params);

  fs.writeFile("./perso.json", params, function(err){
    if(err){
      return console.log(err);
    }
    console.log("le fichier est sauvegardé");
  });
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.writeHead(200);
  response.end();
}
exports.savePerso=savePerso;