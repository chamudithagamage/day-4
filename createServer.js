var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var pathName = url.parse(req.url).pathname;
    
    fs.readFile(pathName.substring(1), function (err, data) {
        console.log(pathName.substring(1));

        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            console.log(err);
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        
        res.end();
    });
}).listen(8880);

console.log('Server running at http://127.0.0.1:8880/');