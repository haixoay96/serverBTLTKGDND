var url = 'mongodb://duclinh:namnam@ds021166.mlab.com:21166/btltkgdnd';
var MongoClient = require('mongodb').MongoClient;
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
app.use('/', express.static('data'));
var io = require('socket.io')(server);
server.listen(3000, ()=>{
    console.log('Server running at port 3000');
});
MongoClient.connect(url , (err, db)=>{
    if(err){
        console.log('Connect failure! '+__filename);
        return;
    }
    require('../handleSocket/io.js')(io, db);
    console.log('Connect successfull! '+ __filename);
});
