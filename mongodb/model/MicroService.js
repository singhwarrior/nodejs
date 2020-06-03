const TAB = "    ";
const NEW_LINE = "\n";
const COMMA = ",";

function MicroService(serviceName, monitorTopics, failureInfo){
	this.serviceName = serviceName;
	this.monitorTopics = monitorTopics;
	this.failureInfo = failureInfo;
}

MicroService.prototype.toString = function(){
	var microServiceString = this.serviceName;
	microServiceString = microServiceString+NEW_LINE;

	if(this.monitorTopics.length){
		for(var i=0; i< this.monitorTopics.length; i++){
			microServiceString = microServiceString 
							   + TAB 
							   + this.monitorTopics[i].monitor_topic
							   + COMMA
							   + this.monitorTopics[i].predecessor_topic
							   + NEW_LINE;
		}
	}else{
		console.log('No Monitor Topics for '+this.serviceName);
	}


		microServiceString = microServiceString
							+TAB
							+this.failureInfo.failed_topic
							+COMMA
							+this.failureInfo.requeue_topic
							+COMMA
							+this.failureInfo.max_requeue_count
							+NEW_LINE;
	console.log(microServiceString);
} 


module.exports.MicroService = MicroService; 