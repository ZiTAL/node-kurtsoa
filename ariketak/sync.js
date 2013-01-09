var fs = require('fs');

var file = fs.readFileSync('a.txt', 'utf-8');

if(file)
	console.log(file);
