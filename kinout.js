            var socket = io.connect("http://"+window.location.host+":"+"1980");
            if(typeof(socket)!='undefined')
            {
                socket.on('push', function(direction)
                {
                    KINOUT.Router.direction(direction);
                });
            }
