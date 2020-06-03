var fs = require('fs');
var readableStream = fs.createReadStream('9_input.txt');
var data = '';
readableStream.setEncoding('UTF-8');
readableStream.on('data', (chunk) => {
	data += chunk;
});
/*
readableStream.on('end',() => {
	console.log(data);
});
*/

var writeData = 'Hello World!!';
var writeStream = fs.createWriteStream('9_output.txt');
writeStream.write(data, 'UTF-8');
writeStream.end();
writeStream.on('finish',()=>{
	console.log('Writing data is finished!!');
});
writeStream.on('error',(err)=>{
	console.log(err);
});