const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usermodel = require('../models/user');
const allinfo = require('../models/user').allinfo;
const verifyToken = require('../middleware/verifyToken').verifyToken;

let saltRounds = 10;
let salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
    login: function (req, res) {
        try {
            let email = req.body.email;
            let password = req.body.password;
            //let email = "test@test.com";
            //let inputedpassword = "test";
            allinfo(email, function (r) {
                //r is the result of the callback
                if (r === undefined || r.length == 0) {
                    // array empty or does not exist
                    res.json({
                        success: false
                    });
                } else {
                    let dbpassword = r.password;
                    let compare = bcrypt.compareSync(password, dbpassword);
                    if (compare === true) {
                        jwt.sign({ r }, 'secretkey', (err, token) => {
                            res.json({
                                success: true,
                                data: { token: token }
                            });
                        });
                    } else {
                        res.json({
                            success: false,
                            data: null
                        });
                    }

                }
            });
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

    create: function (req, res) {
        try {
            console.log("creating");
            let email = req.body.email;
            let password = req.body.password;
            let hashpass = bcrypt.hashSync(password, salt);
            usermodel.create(email, hashpass, function (r) {
                //r is the result of the callback
                if (r === undefined || r.length == 0) {
                    // array empty or does not exist
                    res.json({
                        success: false
                    });
                } else {
                    console.log(r);

                }
            });
            
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

    request: function (req, res, callback) {
        try {
            let token = verifyToken(req, res);
            jwt.verify(token, 'secretkey', (err, authData) => {
                if (err) {
                    res.sendStatus(403);
                } else {
                    res.json({
                        message: 'post created',
                        authData
                    })
                }

            });

        } catch (err) {
            callback(err);
        }

    }


};