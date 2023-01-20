const {DataTypes} = require('sequelize')
const db = require('./database')

const Card = db.define('card', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      manaCost: DataTypes.INTEGER,
      types: DataTypes.STRING,
      cardText: DataTypes.STRING,
      flavorText: DataTypes.STRING,
      pt: DataTypes.STRING,
      expansion: DataTypes.STRING,
      rarity: DataTypes.STRING,
      artist: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      price: DataTypes.FLOAT
}) 



const Photo = db.define('photo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    url: DataTypes.STRING({length: 500}),
    primaryPhoto: DataTypes.BOOLEAN
  })



  const User = db.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: DataTypes.STRING({length: 20}),
    email: DataTypes.STRING({length: 100}),
    password: DataTypes.STRING({length: 300}),
    admin: DataTypes.BOOLEAN,
  })




const Cart = db.define('cart', {
        productId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
})

module.exports = {Card, Photo, User, Cart}