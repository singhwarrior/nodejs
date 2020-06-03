console.log("Hey there");



function callingFunc(callbackFunc){
	console.log("Calling Function");
	setTimeout(callbackFunc, 1000);
}

callingFunc(() => {
	console.log("I am called back");
});