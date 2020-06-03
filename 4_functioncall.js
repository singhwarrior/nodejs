function myFunction(func, value){
	func(value);
}

myFunction((x) => {
	var y = x*x;
	console.log(y);
},2);