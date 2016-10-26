module.exports = (listAccount, listAccountOnline, socket, db) => {
    var _ = require('lodash');
    var fs = require('fs');
    var changeAvatar = (data) => {
        /*
        data = buffer

    }

        */
        var index = _.findIndex(listAccountOnline, {
            socketL: socket.id
        });
        if (index !== -1) {
            var filename = listAccountOnline[index].username + Date.now().toString();
            var writeStream = fs.createWriteStream(__dirname + '../data/' + filename);
            writeStream.write(data);
            writeStream.end();
        }
    }
}
