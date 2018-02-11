const Sequelize = require('sequelize')
const db = require('../db')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jhfrzR-k2kAswjwv6gg4rlTaddCWk4_O6A6TiFeDFTQzV7fNLw'
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campus
