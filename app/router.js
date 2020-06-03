function route(requestHandler, pathname, response, reviewData){
	if(typeof requestHandler[pathname] === 'function'){
		console.log("Routing Request for pathname="+pathname);
		requestHandler[pathname](response, reviewData);		
	}else{
		console.log("No handler for path ="+pathname);
		response.writeHead(404, {"Content-Type":"text/plain"});
		response.write("Error 404 : Page not found");
		response.end();
	}
}

exports.route = route