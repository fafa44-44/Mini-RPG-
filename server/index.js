var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var joueurHandler=require("./joueurHandler");

var handle = {};

//global.joueur=null;
//global.carte=null;
//global.coffre=null;

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/save"] = requestHandlers.save;
handle["/savePerso"] = joueurHandler.savePerso;
//handle["/upload"] = requestHandlers.upload;
//handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
