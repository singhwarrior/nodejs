function callback(){
	console.log("I am callback function!!");
}

function dbCall(){
	console.log("DB fetch started");
	for(i=0;i<10000000;i++);
	console.log("DB fetch finished");	
}

console.log("Customer 1 asks for farmhouse pizza");
dbCall("Customer 1");
console.log("Customer 2 asks for country pizza");
dbCall("Customer 2");
console.log("Customer 3 asks for cheezie delight pizza");
dbCall("Customer 3");

console.log("Customer 1 asks for farmhouse pizza");
setTimeout(callback, 5000);
console.log("Customer 2 asks for country pizza");
setTimeout(callback, 5000);
console.log("Customer 3 asks for cheezie delight pizza");
setTimeout(callback, 5000);

