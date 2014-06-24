var http = require('http'),
    fs = require('fs');
    
http.createServer( function( request, response ) { 
    var file = (request.url === '/' ) ? './index.html' : __dirname + request.url;
    fs.readFile( file, function( err, contents ) {  
        if ( err ) {
            response.writeHead(404);
            response.end( JSON.stringify(err));
            return;
        }
        response.writeHead(200);
        response.end( contents );
    });
}).listen(8124);

console.log('server running at http://127.0.0.1:8124');
