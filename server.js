var app = require('http').createServer(handler), 
    io = require('socket.io').listen(app),
//  fs = require('fs'),
    node_static = require('node-static');

static_files = new node_static.Server('./public');

app.listen(80);

function handler(request, response) {

    request.addListener('end', function () {
        static_files.serve(request, response);
    });

    /*fs.readFile(__dirname + '/index.html', function (err, data) {
    
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }

        res.writeHead(200);
        res.end(data);
    });*/
}

io.sockets.on('connection', function (socket) {

    
    
    /*socket.emit('news', { hello: 'world' });
    
    socket.on('my other event', function (data) {
        console.log(data);
    });*/
});
