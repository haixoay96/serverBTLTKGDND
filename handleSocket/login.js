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
            socket.emit('result_login', {
                status: SUCCESSFULL
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
