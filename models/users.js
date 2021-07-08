const { DataTypes } = require('sequelize');
const db = require('../db');

const UsersModel = db.define('users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    role: {
        type: DataTypes.ENUM({
        values: ["user", "admin"]}),
        allowNull: false,
        defaultValue: "user"
    },
});

module.exports = UsersModel; 