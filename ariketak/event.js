    var emitter = require('events').EventEmitter;

    var e = new emitter();

    e.on('hartu', function(data)
    {
        console.log(data);
    });

    setInterval(function()
    {
        e.emit('hartu', Date.now());            
    }, 1000);    
