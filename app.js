var http = require('http');
var server = http.createServer((req, res) => {

});
var io = require('socket.io')(server);
server.listen(3000, ()=>{
    console.log('Server running at port 3000');
});
require('./handleSocket/io.js')(io);
