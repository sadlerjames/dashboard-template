const mysql = require('mysql');

var conx = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'dashboard-template'
});

module.exports = {
    create: function (email, password, callback) {
        try {
            conx.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                //Insert a record in the users table:
                var sql = "INSERT INTO users (email, password) VALUES (?, ?)";
                conx.query(sql, [email, password], function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted");
                });
              });
              
        } catch (err) {
            // pass any errors on
            callback(err);
        }
    }
};