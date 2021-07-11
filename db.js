require ('dotenv').config()//optional per Jason

const {Sequelize} = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: process.env.ENVIRONMENT === 'production'
})


module.exports = sequelize;



{/*const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
    dialect: 'postgres',
})

module.exports = sequelize;  */}