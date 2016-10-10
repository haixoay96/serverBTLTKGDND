module.exports = (io)=>{
    var listAccount = [];
    var listRoom = [];
    var url = 'mongodb://duclinh:namnam@ds021166.mlab.com:21166/btltkgdnd';
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(url , (err, db)=>{
        if(err){
            console.log('Connect failure!');
            return;
        }
        console.log('Connect successfull!');
        io.on('connection', require('./connection.js')(listAccount, listRoom));
    });

}
