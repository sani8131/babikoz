var http = require('http');

var server = http.createServer(function(req, res){
		res.writeHead(200, {'content-type': 'text/html'});
		
		res.end('<h1>BabiKoz Server</h1>');

});

var port = Number(process.env.PORT || 5000 );

server.listen(port);
