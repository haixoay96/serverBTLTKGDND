module.exports = (listAccount,listAccountOnline, listRoom, socket, db)=>{
    /**
     * data = {
     username: duclinh,
     password: 1234

 }
     */
     const SUCCESSFULL = 100;
     const ERROR_MAIL_OR_PASS = 101;
     var _ = require('lodash');
     var login = (data=>{
        var indexAccount = _.findIndex(listAccount, {
            username: data.username,
            password: data.password
        });
        if(indexAccount!==-1){
            listAccountOnline.push({
                username: data.username,
                password: data.password
            });
            socket.emit('result_login', {
                status: SUCCESSFULL
            });
            socket.broadcast.emit({
                status: true,
                username: data.username
            });
            return;
        }
        socket.emit('result_login', {
            status: ERROR_MAIL_OR_PASS
        });
        return;
    }
    return login;
}
