module.exports = (listAccount, listRoom, socket) => {
    var _ = require('lodash');
    var sign_up = (data) => {
        /**
         * data = {
         *  username: 'duclinh96@gmail.com',
         *  password: 123456,
         *  phoneNumber: 0961077819
         * }
         */
        var indexAccount = _.findIndex(listAccount, {
            username: data.username
        });
        var config = indexAccount === -1 ? true : false;
        socket.emit('result_sign_up', {
            status: config
        });
        /// insert to database
    }
    return sing_up;
}
