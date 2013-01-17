    var emitter = require('events').EventEmitter;

    var e = new emitter();

    e.on('hartu', function(data)
    {
        console.log(data);
    });

module.exports = e;
