var mongodb = require('mongodb');
var model = require('./model/MicroService.js');
//var MicroService = model.MicroService;
var mongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/ARMS_DB';
mongoClient.connect(url, function(err,db){
	if(err)
		console.log(err);
	else{
		console.log('Connected to '+url);
		var serviceRegistryCollection = db.collection('SERVICE_REGISTRY');
		//Returns Cursor object when we call find({})
		serviceRegistryCollection.find({}).toArray(function(err, items){
			if(err)
				console.log(err);
			else if(items.length){
				//var services = [];
				for(var i=0;i<items.length;i++){
					let microService = new model.MicroService(items[i].service_name, items[i].monitor_topics, items[i].failure_info);
					microService.toString();
			}else{
				console.log('No Result found!!');
			}
			db.close();
		});
		db.close();
	}
});