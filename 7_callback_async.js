/*function dbCall(customer_id){
	console.log("Connecting to DB for "+customer_id)
	for(i=0; i<1000000;i++);
	console.log("Done with DB call for "+customer_id)	
}*/

function request_async(customer_id, count){
	var processing_loop_count = count;
	console.log("customer:"+customer_id+", requested for DB call");
	setTimeout(function(){
		console.log("Connecting to DB for "+customer_id);
		for(i=0; i<processing_loop_count;i++);
		console.log("Done with DB call for "+customer_id);
	}, 0);
}

function request_sync(customer_id, count){
	var processing_loop_count = count;
	console.log("customer:"+customer_id+", requested for DB call");
	console.log("Connecting to DB for "+customer_id);
	for(i=0; i<processing_loop_count;i++);
	console.log("Done with DB call for "+customer_id);
}

var init = function(isAsync){
	if(isAsync){
		request_async(1, 1000000000);
		request_async(2, 10000);
		request_async(3, 1000000);
		request_async(4, 100000000);
		request_async(5, 1000000000);
		request_async(6, 1000000);			
	}else{
		request_sync(1, 1000000000);
		request_sync(2, 10000);
		request_sync(3, 1000000);
		request_sync(4, 100000000);
		request_sync(5, 1000000000);
		request_sync(6, 1000000);
	}

}

init(true);
//init(false);