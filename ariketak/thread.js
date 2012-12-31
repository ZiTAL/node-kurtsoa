setInterval(function()
{
	console.log('hello world');
}, 5000);


var http = require('http');

setInterval(function()
{
    http.get(
    {
        host: 'google.com'
    }, function(res)
    {
        console.log(res.headers);
    });
}, 3000);

var server = http.createServer(function(req, res)
{
	res.writeHead(200);

	setTimeout(function()
	{
		res.end("Web server response");
	}, 1000);
});

server.listen(8000);