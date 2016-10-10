module.exports = (listAccount, listRoom)=>{
    var connection = (socket)=>{
        console.log( socket.id + ' connect at '+__filename);
        socket.on('sign_up', require('./sing_up.js')(listAccount, listRoom, socket));
    }
    return connection;
}
