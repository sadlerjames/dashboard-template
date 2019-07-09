const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usermodel = require('../models/user');
const allinfo = require('../models/user').allinfo;

let saltRounds = 10;

module.exports = {
    login: function (req, res) {
        try {
            let email = req.body.email;
            let password = req.body.password;
            let response = allinfo(email);
            console.log(response);
            /**
            const user = {
                id : id,
                email: email
            }
            */
            //let passhashinputed = bcrypt.hashSync(password, saltRounds);
            //let dbpassword = usermodel.login(email);
            /**
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
            */
        } catch (err) {
            // pass any errors on
            console.log(err);
        }
    },

    create: function (req, res, callback) {
        try{
            let email = req.body.email;
            let password = req.body.password;
            usermodel.create(email, password);

        } catch (err) {
            callback(err);
        }

    }

};