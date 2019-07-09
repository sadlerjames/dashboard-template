const Sequelize = require('sequelize')
const sequelize = require('../../utils/sequelize').sequelize;

const Model = Sequelize.Model;
class User extends Model { }
User.init({
    // attributes
    email: {
        type: Sequelize.STRING,
        allowNull: false

    },
    password: {
        type: Sequelize.STRING,
        allowNull: false

    }
}, {
        sequelize,
        modelName: 'user'
        // options
    });

module.exports = {
    create: function (inemail, inpassword) {
        try {
            User.create({ email: inemail, password: inpassword }).then(success => {
                console.log("Users generated ID:", success.id);
            });

        } catch (err) {
            // pass any errors on
            callback(err);
        }
    }, 
    allinfo: function (inemail) {
        try {
            let userinfo;
            return User.findAll({
                where: {
                  email: inemail
                }
              }).then(info => {
                return userinfo = JSON.stringify(info, null, 4);
                //console.log("All the info on the user:", JSON.stringify(info, null, 4))
                //console.log(userinfo);
              });
              //console.log(userinfo);
              //return(userinfo);
              
        } catch (err) {
            // pass any errors on
            console.log(err);
        }
    }

};