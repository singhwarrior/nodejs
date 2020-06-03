var myServer = require('./server');
var router = require('./router');
var handler = require('./handler.js');

const requestHandler = {};
requestHandler["/"] = handler.home;
requestHandler["/home"] = handler.home;
requestHandler["/review"] = handler.review;


myServer.startServer(router.route, requestHandler);
