const Sequelize = require('sequelize')

const sequelize = new Sequelize('dashboard-template', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  sequelize
}

