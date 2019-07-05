const mysql = require('mysql');

var conx = mysql.createConnection({
    host: 'sql304.thecoderszone.com',
    user: 'thcdr_23594181',
    password: 'root',
    database: 'thcdr_23594181_test'
});

module.exports = {
    create: function(email, password, callback) {
        try {
            conx.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                //Insert a record in the users table:
                var sql = "INSERT INTO users (email, password) VALUES (?, ?)";
                conx.query(sql, [email, password], function(err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                });
            });

        } catch (err) {
            // pass any errors on
            callback(err);
        }
    },
    login: function(email) {
        try {
            conx.connect(function(err) {
                if (err) throw err;
                //Get users info from the database:
                var sql = 'SELECT * FROM users WHERE email = ?';
                conx.query(sql, [email], function(err, result) {
                    if (err) throw err;
                    return results;

                });
            });

        } catch (err) {
            // pass any errors on
            callback(err);
        }
    }

};