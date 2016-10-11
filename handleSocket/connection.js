module.exports = (listAccount, listRoom, db)=>{
    var connection = (socket)=>{
        console.log( socket.id + ' connect at '+__filename);
        socket.on('sign_up', require('./sign_up.js')(listAccount, listRoom, socket, db));
    }
    return connection;
}
