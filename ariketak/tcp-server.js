var net = require('net');

var sockets = [];

var server = net.createServer(function(socket)
{
	sockets.push(socket);

	socket.on('data', function(data)
	{
		for(var i in sockets)
		{
			if(socket!=sockets[i])
				sockets[i].write(data);
		}
	});

	socket.on('end', function()
	{
		// remove socket from array
		var index = sockets.indexOf(socket);
		if(index!='-1')
			sockets.splice(index, 1);		
	});
});

server.listen(8000);