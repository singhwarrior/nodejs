var http = require('http');
var url = require('url');

var hostname = '0.0.0.0';
var port = '8080';



function startServer(route, requestHandler){
	function requestCallBack(request, response){
		var reviewData="";
		var requestUrl = url.parse(request.url);
		request.setEncoding("utf8");
		// Older way
		request.addListener("data", (chunk) => {
			reviewData += chunk;
		});
		request.addListener("end", () => {
			route(requestHandler, requestUrl.pathname, response, reviewData);			
		});
		// Newer way
		/*
		request.on('data', (chunk) => {
			reviewData += chunk;
		});
		request.on('end', ()=>{
			route(requestHandler, requestUrl.pathname, response, reviewData);
		});
		*/
	}

	const server = http.createServer(requestCallBack);
	server.listen(port, hostname, ()=>{
		console.log("Server running at "+hostname+":"+port)
	});

}

module.exports.startServer = startServer





