module.exports = (listAccount, listRoom, socket, db) => {
    var _ = require('lodash');
    var emailCheck = require('email-check');
    var insertAccount = require('../handleDatabase/insertAccount.js')(db);
    var sign_up = (data) => {
        /**
         * data = {
         *  username: 'duclinh96@gmail.com',
         *  password: 123456,
         *  phoneNumber: 0961077819
         * }
         *
         */
        const SUCCESSFULL = 100;
        const ERROR_MAIL = 101;
        const ERROR_EXISTS = 102;
        const ERROR_SYSTEM = 103;
        var indexAccount = _.findIndex(listAccount, {
            username: data.username
        });
        emailCheck(data.username)
            .then((res) => {
                if (res) {
                    var result = indexAccount === -1 ? SUCCESSFULL : ERROR_EXISTS;
                    var account = {
                        username: data.username,
                        password: data.password,
                        status: ''
                        avatar: '/avatar.png',
                        background: '/background.jpg'
                    };
                    socket.emit('result_sign_up', {
                        status: result
                    });
                    listAccount.push(account);
                    insertAccount('Account', account);
                    return;
                }
                socket.emit('result_sign_up', {
                    status: ERROR_MAIL
                });
            })
            .catch((err) => {
                if (err.message === 'refuse') {
                    // The MX server is refusing requests from your IP address.
                    console.log('Ip is fefused! ' + __filename);
                } else {
                    // Decide what to do with other errors.
                    console.log('Email error ' + __filename);
                }
                socket.emit('result_sign_up', {
                    status: ERROR_SYSTEM
                });
            });
    }
    return sign_up;
}
