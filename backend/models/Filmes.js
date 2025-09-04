const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Filmes = db.define('Filmes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    titulo: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
    },

    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    diretor: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },

    genero: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },

    capaUrl: {
        type: DataTypes.STRING,
        allowNull: true 
    } 
})

module.exports = Filmes