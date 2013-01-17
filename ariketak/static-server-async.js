var http = require('http');
var fs = require('fs');
var path = require('path');

var server_path = '/home/projects/node-kurtsoa';

var server = http.Server(function(req, res)
{
	var dynamic_path = server_path + req.url;
	fs.realpath(dynamic_path, function(err, dynamic_path)
	{
		if(err)
		{
			res.writeHead('404');
			res.end("Error 404 Not found: "+req.url);									
		}
		else
		{
			path.exists(dynamic_path, function(err)
			{
				fs.stat(dynamic_path, function(err, stat)
				{
					if(err)
					{
						res.writeHead('404');
						res.end("Error 404 Not found: "+req.url);						
					}
					if(stat.isFile())
					{
						fs.readFile(dynamic_path, 'utf-8', function (err, data)
						{
							if(err)
							{
								res.writeHead('403');
								res.end("Error 403 Forbidden: "+req.url);
							}
							else
							{
								res.writeHead('200');
								res.end(data);
							}
						});
					}
					else if(stat.isDirectory())
					{
						fs.readdir(dynamic_path, function(err, files)
						{
							if(err)
							{
								res.writeHead('403');
								res.end("Error 403 Forbidden: "+req.url);
							}
							else
							{
								res.writeHead('200');
								for(var i in files)	
									res.write(files[i]+"\n");
								res.end();
							}
						});
					}
				});
			});
		}
	});
});

/*
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket)
{
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data)
	{
		console.log(data);
	});
});
*/

server.listen(1980);