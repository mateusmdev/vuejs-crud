const sequelize = require('../database/db')
const { DataTypes } = require('sequelize')

const User = require('./user.js')

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genre: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    zip_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    father_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mother_name: {
        type: DataTypes.STRING,
        allowNull: true
    }

})

User.hasMany(Client, {
    constraints: true,
    foreignKey: 'user_id'
})

module.exports = Client