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
    password: DataTypes.STRING({length: 300}),
    admin: DataTypes.BOOLEAN,
    // location: DataTypes.INTEGER,
    // cardInfo: DataTypes.INTEGER
  })



// const Location = db.define('location', {
//         id: {
//           type: DataTypes.INTEGER,
//           primaryKey: true,
//           allowNull: false,
//           autoIncrement: true
//         },
//         address: DataTypes.STRING({length: 100}),
//         city: DataTypes.STRING({length: 65}),
//         state: DataTypes.STRING({length: 100}),
//         zipcode: DataTypes.INTEGER
// })


// const CardInfo = db.define('cardinfo', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         autoIncrement: true
//     },
//     cardHolder: DataTypes.STRING({length: 100}),
//     cardNumber: DataTypes.INTEGER,
//     cvv: DataTypes.INTEGER,
//     expDate: DataTypes.INTEGER,
//     location: DataTypes.INTEGER
// })

// const Cart = db.define('cart', {
//     productId: DataTypes.INTEGER

// })

module.exports = {Card, Photo}