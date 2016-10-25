module.exports = (io, db)=>{
    var listAccount = [];
    var listRoom = [];
    var listAccountOnline = [];
    io.on('connection', require('./connection.js')(listAccount, listAccountOnline, listRoom, db));

}
