const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usermodel = require('../models/user');

let saltRounds = 10;

module.exports = {
    login: function (req, res, callback) {
        try {
            let email = req.body.email;
            let password = req.body.password;
            let passhashinputed = bcrypt.hashSync(password, saltRounds);
            let dbpassword = usermodel.login(email);

            if (email && password){
                //compare the password in the database vs the password that the user entered
                let compare = bcrypt.compareSync(dbpassword, passhashinputed);
                if (compare == true){
                    res.json({success: true});
                } else{
                    res.json({success: false});
                }
            } else {
                res.json({success: false});
            }
        } catch (err) {
            // pass any errors on
            callback(err);
        }
    }
};