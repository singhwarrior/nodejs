//var myhttp = {req:null, res:null};

var myhttp = function(req,res){
	this.req = req;
	this.res = res;
	this.print = function(){
		console.log(`{req:${this.req}, res:${this.res}}`);
	}
}
myhttp.prototype.doGet = function(){
	get();
}

myhttp.prototype.doPost = function(){
	post();
}
myhttp.prototype.doPut = function(){
	put();
}

function get(){
	console.log('HTTP Method : GET');
}
function post(){
	console.log('HTTP Method : POST');
}
function put(){
	console.log('HTTP Method : PUT');
}
function httpinfo(httpobj){
	console.log(httpobj);
}
/*
module.exports.myhttp = myhttp;
module.exports.get = get;
module.exports.post = post;
module.exports.put = put;
*/

module.exports = {
	myhttp : myhttp,
	httpinfo : function(httpobj){
		console.log(httpobj);
	}
}