var stream = require('stream');

var st = new stream.Stream();

st.readable = true;

st.on('data', function(chunk)
{
	console.log(chunk);
});

st.emit('data', 'datos...');