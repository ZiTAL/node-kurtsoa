var http = require('http');

var server = http.createServer(function(req, res)
{
	res.writeHead('200',
		{
			'content-type': 'text/plain'
		}
	);
	res.write("hello\n");
	setTimeout(function()
	{
		res.end("world\n")
	}, 1500);
});

server.listen(8000);