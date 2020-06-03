var fs = require('fs');
var readStream = fs.createReadStream('9_input.txt');
var writeStream = fs.createWriteStream('10_output.txt');
readStream.pipe(writeStream);