var querystring = require('querystring');
function home(response){
	console.log("Handling home request");
	var htmlFile = '<html>'+
						'<head></head>'+
						'<body>'+
							'<form action="/review" method="post">'+
								'<textarea name="text" rows="20" cols="60"></textarea>'+
								'<input type="submit" value="Submit Review">'+
							'</form>'+
						'</body>'+
				  '</html>';
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write(htmlFile);
	response.end();
}

function review(response, reviewData){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write(querystring.parse(reviewData).text);
	response.end();
}

module.exports.home = home;
module.exports.review = review;