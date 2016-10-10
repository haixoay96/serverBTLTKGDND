module.exports = (io, db)=>{
    var listAccount = [];
    var listRoom = [];
    io.on('connection', require('./connection.js')(listAccount, listRoom, db));

}
