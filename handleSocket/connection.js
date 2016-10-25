module.exports = (listAccount,listAccountOnline, listRoom, db)=>{
    var connection = (socket)=>{
        console.log( socket.id + ' connect at '+__filename);
        socket.on('sign_up', require('./sign_up.js')(listAccount, listRoom, socket, db));
        socket.on('login', require('./login.js')(listAccount, listAccountOnline, listRoom, socket, db));
    }
    return connection;
}
