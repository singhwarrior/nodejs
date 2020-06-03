function dbCall(customer_id, count){
	console.log("DB Call started for customer:"+customer_id);
	for(i=0;i<count;i++);
	console.log("DB Call completed for customer:"+customer_id);
}

function request(customer_id, count){
	console.log("Request by customer:"+customer_id);
	setTimeout(function(){
		console.log("DB Call started for customer:"+customer_id);
		for(i=0;i<count;i++);
		console.log("DB Call completed for customer:"+customer_id);
	},0);
	//dbCall(customer_id, count);
}

request(1, 1000000000);
request(2, 1000);
request(3, 100000);
