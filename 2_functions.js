function print(){
	console.log("Hello World!!");
}

function printMessage(message){
	console.log(message);
}

var printFunction1 = function(message){
	console.log("printFunction1"+message);
}

var printFunction2 = (message) => {
	console.log("printFunction2"+message);
}

printMessage("Hello World!!");
printFunction1("Anno Hello World!!");
printFunction1("Anno1 Hello World!!");
setTimeout(print,5000);
setTimeout(print,5000);
